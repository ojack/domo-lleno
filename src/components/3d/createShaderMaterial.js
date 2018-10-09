//const shader = require('./shaders/wireframe.shader.js')
import shader from './shaders/wireframe.shader.js'


export default THREE => {

var shaderMaterial = new THREE.ShaderMaterial( {
extensions: {
   // needed for anti-alias smoothstep, aastep()
   derivatives: true
 },
 transparent: true,
 side: THREE.DoubleSide,
  uniforms: {
    time: { // float initialized to 0
      type: "f",
      value: 0.0
    },
    noiseScale: {
      type: "f",
      value: 1.0
    },
    fill: { value: new THREE.Color( "#000") },
    stroke: { value: new THREE.Color( "#000") },
    noiseA: { value: false },
    noiseB: { value: false },
    dualStroke: { value: false},
    seeThrough: { value: true},
    insideAltColor: { value: false },
    thickness: { value: 0.01 },
    secondThickness: { value: 0.00 },
    dashEnabled: { value: false },
    dashRepeats: { value: 0.6 },
    dashOverlap: { value: false },
    dashLength: { value: 0.55 },
    dashAnimate: { value: true },
    squeeze: { value: false },
    squeezeMin: { value: 0.3 },
    squeezeMax: { value: 1.6 }
  },
  //  vertexShader: document.getElementById( 'vertexShader' ).textContent,
  //  fragmentShader: document.getElementById( 'fragmentShader' ).textContent
  vertexShader: shader.vertex,
  fragmentShader: shader.fragment
  } )

  // shader.on('change', () => {
  //   // Mark shader for recompilation
  //   shaderMaterial.vertexShader = shader.vertex;
  //   shaderMaterial.fragmentShader = shader.fragment;
  //   shaderMaterial.needsUpdate = true;
  // })

  return shaderMaterial
}
