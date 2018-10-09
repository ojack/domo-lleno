// explode geometry: https://stackoverflow.com/questions/46412425/separate-each-face-of-icosahedron-geometry-by-some-empty-space-around-it-using-t
// Our Javascript will go here.
//const shader = require('./js/solid.shader.js')
//global.THREE = require('three')

import * as THREE from 'three'
import EffectComp from 'three-effectcomposer'

import ExplodeModifier from './utils/ExplodeModifier.js'
//const createFXAA = require('three-shader-fxaa');

import createScene from './createScene.js'
import createLoop from 'raf-loop'
import colorShaders from './shaders/color.shader.js'

const EffectComposer = EffectComp(THREE)

export default containerElement => {
  const {
    renderer,
    camera,
    scene,
    renderScene
  } = createScene(THREE)

  containerElement.appendChild(renderer.domElement)
  // Create a new offscreen framebuffer
  const target = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);
  target.texture.stencil = false;
  target.texture.minFilter = THREE.LinearFilter;
  target.texture.magFilter = THREE.LinearFilter;
  target.texture.format = THREE.RGBFormat;
  target.texture.generateMipmaps = false;

  // Create a new composer for post-processing
  const composer = new EffectComposer(renderer, target);

  // Copy scene to framebuffer
  composer.addPass(new EffectComposer.RenderPass(scene, camera))

//composer.addPass(new EffectComposer.ShaderPass(createFXAA()))

  // Add the postprocessing shader
  console.log('color shaders', colorShaders)
  const color = new EffectComposer.ShaderPass({
    vertexShader: colorShaders.vertex,
    fragmentShader: colorShaders.fragment,
    uniforms: {
      tDiffuse: { type: 't', value: new THREE.Texture() },
      tLookup: { type: 't', value: new THREE.Texture() },
      time: { // float initialized to 0
        type: "f",
        value: 0.0
      }
    }
  });
  composer.addPass(color);

  // Setup our lookup table for the color transform shader
  const tLookup = new THREE.TextureLoader().load('/static/images/colors.png');
  tLookup.generateMipmaps = false;
  tLookup.minFilter = THREE.LinearFilter;
  color.uniforms.tLookup.value = tLookup;

  // Last pass should be rendered to screen!
  composer.passes[composer.passes.length - 1].renderToScreen = true

  var start = Date.now()
  // Render loop
  var explodeAmount = 1.0
  var explodeDirection = -1

  function render () {

    composer.passes.forEach(pass => {
      if(pass.uniforms && pass.uniforms.time) {
        pass.uniforms.time.value = .0001 * ( Date.now() - start )
      }
    })

    composer.render()
  }

  var animateFunction = () => {}

  //animateIn(5)

function triggerAnimation(duration, direction){
  animateFunction = animate(duration, direction)
}

function animate(duration, direction) {
  var elapsedTime = 0
  var animationProgress = 0
  return (dt) => {

    elapsedTime += dt/1000
    animationProgress = Math.max(Math.min(elapsedTime / (duration), 1.0), 0.0)
      //console.log('time', elapsedTime, 'animProg', animationProgress)
    if(direction === 'closed') return 1.0 - animationProgress
    return animationProgress
  }
}
  // function animateIn(duration) {
  //   var elapsedTime = 0
  //   var animationProgress = 0
  //   return (dt) => {
  //
  //     elapsedTime += dt/1000
  //     animationProgress = Math.max(Math.min(elapsedTime / (duration), 1.0), 0.0)
  //       //console.log('time', elapsedTime, 'animProg', animationProgress)
  //     return 1.0 - animationProgress
  //   }
  // }
  //
  // function animateOut(duration) {
  //   var elapsedTime = 0
  //   var animationProgress = 0
  //   return (dt) => {
  //
  //     elapsedTime += dt/1000
  //     animationProgress = Math.max(Math.min(elapsedTime / (duration), 2.0), 0.0)
  //       //console.log('time', elapsedTime, 'animProg', animationProgress)
  //     return animationProgress
  //   }
  // }

  createLoop((dt) => {
  //  console.log('anim function', animateFunction(dt))
  //  console.log('rendering')
    var progress = animateFunction(dt)
    //console.log('progress', progress)
    composer.passes.forEach(pass => {
      if(pass.uniforms && pass.uniforms.time) {
        pass.uniforms.time.value = .0001 * ( Date.now() - start )
      }
    })

    renderScene(progress*3.0)
    composer.render()
  }).start()

  return {
    render, triggerAnimation
  }
}
