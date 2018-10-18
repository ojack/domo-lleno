// explode geometry: https://stackoverflow.com/questions/46412425/separate-each-face-of-icosahedron-geometry-by-some-empty-space-around-it-using-t
// Our Javascript will go here.
//const shader = require('./js/solid.shader.js')

import createShaderMaterial from './createShaderMaterial.js'
import createExplodeMesh from './createExplodeMesh.js'
import ExplodeModifier from './utils/ExplodeModifier.js'

// our geometry helper functions
import {
  addBarycentricCoordinates,
  unindexBufferGeometry
} from './utils/geom'

export default THREE => {
  const dpr = window.devicePixelRatio

  // create renderer
  const renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(dpr)
  renderer.setSize( window.innerWidth, window.innerHeight )
//  document.body.appendChild( renderer.domElement )

  // create camera
  const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 10000 )
  camera.position.z = 400
  //camera.position.y = 40
  //camera.position.x = 20

  // create scene
  const scene = new THREE.Scene()
  //	scene.background = new THREE.Color( 0xffffff );

  window.addEventListener('resize', resize, false)

  var cursorX
  var cursorY
  var previousMousePosition = { x: 0,y: 0}

  var windowHalfX = window.innerWidth * 0.5;
  var windowHalfY = window.innerHeight * 0.5;


  function toRadians (degrees) {
    return degrees * Math.PI/180
  }

  // make exploding pices
  var explodingMesh = createExplodeMesh(THREE)
  scene.add(explodingMesh.mesh)

  // make wireframe geom
   var shaderMaterial = createShaderMaterial(THREE)
   var icosahedronGeometry = new THREE.IcosahedronGeometry(100,2)
  // //
   var explodeModifier = new ExplodeModifier()
         explodeModifier.modify(icosahedronGeometry)
   var icoGeom = new THREE.BufferGeometry().fromGeometry( icosahedronGeometry )
  unindexBufferGeometry(icoGeom, THREE)
   addBarycentricCoordinates(icoGeom, true, THREE)
   var Ico = new THREE.Mesh(icoGeom, shaderMaterial)
   Ico.rotation.z = 0.5
   scene.add(Ico)

  var start = Date.now()

  document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
    var deltaMove = {
          x: e.clientX-previousMousePosition.x,
          y: e.clientY-previousMousePosition.y
      };
    var deltaRotationQuaternion = new THREE.Quaternion()
    .setFromEuler(new THREE.Euler(
                  toRadians(deltaMove.y * 0.08),
                  toRadians(deltaMove.x * 0.08),
                  0,
                  'XYZ'
              ))
          Ico.quaternion.multiplyQuaternions(deltaRotationQuaternion, Ico.quaternion);

          var explodeRotationQuaternion = new THREE.Quaternion()
          .setFromEuler(new THREE.Euler(
                        toRadians(deltaMove.y * 0.02),
                        toRadians(deltaMove.x * 0.02),
                        0,
                        'XYZ'
                    ))
         explodingMesh.mesh.quaternion.multiplyQuaternions(explodeRotationQuaternion, explodingMesh.mesh.quaternion);
      previousMousePosition = {
          x: e.clientX,
          y: e.clientY
      }
    }
    var anim = 1.0

    return {
      renderer,
      camera,
      scene,
      renderScene
    }
    function renderScene(animate) {
    //  console.log(cursorX)
      shaderMaterial.uniforms[ 'time' ].value = .0001 * ( Date.now() - start );
     shaderMaterial.uniforms[ 'noiseScale' ].value = 0


      // animate value is between 1 and 0 > 1 is exploded and 0 is inner
    //  console.log('anim is', animate)
      explodingMesh.material.uniforms.time.value = animate

      renderer.render( scene, camera );
    }

  function resize(e) {
        windowHalfX = window.innerWidth * 0.5;
        windowHalfY = window.innerHeight * 0.5;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
