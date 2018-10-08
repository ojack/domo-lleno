webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/3d/dome.js":
/*!*******************************!*\
  !*** ./components/3d/dome.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_effectcomposer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three-effectcomposer */ "./node_modules/three-effectcomposer/index.js");
/* harmony import */ var three_effectcomposer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three_effectcomposer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_ExplodeModifier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/ExplodeModifier.js */ "./components/3d/utils/ExplodeModifier.js");
/* harmony import */ var _utils_ExplodeModifier_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_ExplodeModifier_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _createScene_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createScene.js */ "./components/3d/createScene.js");
/* harmony import */ var raf_loop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! raf-loop */ "./node_modules/raf-loop/index.js");
/* harmony import */ var raf_loop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(raf_loop__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shaders_color_shader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/color.shader.js */ "./components/3d/shaders/color.shader.js");
// explode geometry: https://stackoverflow.com/questions/46412425/separate-each-face-of-icosahedron-geometry-by-some-empty-space-around-it-using-t
// Our Javascript will go here.
//const shader = require('./js/solid.shader.js')
//global.THREE = require('three')


var EffectComposer = three_effectcomposer__WEBPACK_IMPORTED_MODULE_1___default()(three__WEBPACK_IMPORTED_MODULE_0__);
 //const createFXAA = require('three-shader-fxaa');




/* harmony default export */ __webpack_exports__["default"] = (function (containerElement) {
  var _createScene = Object(_createScene_js__WEBPACK_IMPORTED_MODULE_3__["default"])(three__WEBPACK_IMPORTED_MODULE_0__),
      renderer = _createScene.renderer,
      camera = _createScene.camera,
      scene = _createScene.scene,
      renderScene = _createScene.renderScene;

  containerElement.appendChild(renderer.domElement); // Create a new offscreen framebuffer

  var target = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderTarget"](window.innerWidth, window.innerHeight);
  target.texture.stencil = false;
  target.texture.minFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearFilter"];
  target.texture.magFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearFilter"];
  target.texture.format = three__WEBPACK_IMPORTED_MODULE_0__["RGBFormat"];
  target.texture.generateMipmaps = false; // Create a new composer for post-processing

  var composer = new EffectComposer(renderer, target); // Copy scene to framebuffer

  composer.addPass(new EffectComposer.RenderPass(scene, camera)); //composer.addPass(new EffectComposer.ShaderPass(createFXAA()))
  // Add the postprocessing shader

  console.log('color shaders', _shaders_color_shader_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  var color = new EffectComposer.ShaderPass({
    vertexShader: _shaders_color_shader_js__WEBPACK_IMPORTED_MODULE_5__["default"].vertex,
    fragmentShader: _shaders_color_shader_js__WEBPACK_IMPORTED_MODULE_5__["default"].fragment,
    uniforms: {
      tDiffuse: {
        type: 't',
        value: new three__WEBPACK_IMPORTED_MODULE_0__["Texture"]()
      },
      tLookup: {
        type: 't',
        value: new three__WEBPACK_IMPORTED_MODULE_0__["Texture"]()
      },
      time: {
        // float initialized to 0
        type: "f",
        value: 0.0
      }
    }
  });
  composer.addPass(color); // Setup our lookup table for the color transform shader

  var tLookup = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]().load('/static/images/colors.png');
  tLookup.generateMipmaps = false;
  tLookup.minFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearFilter"];
  color.uniforms.tLookup.value = tLookup; // Last pass should be rendered to screen!

  composer.passes[composer.passes.length - 1].renderToScreen = true;
  var start = Date.now(); // Render loop

  var explodeAmount = 1.0;
  var explodeDirection = -1;

  function render() {
    composer.passes.forEach(function (pass) {
      if (pass.uniforms && pass.uniforms.time) {
        pass.uniforms.time.value = .0001 * (Date.now() - start);
      }
    });
    composer.render();
  }

  var animateFunction = function animateFunction() {}; //animateIn(5)


  function triggerAnimation(duration, direction) {
    animateFunction = animate(duration, direction);
  }

  function animate(duration, direction) {
    var elapsedTime = 0;
    var animationProgress = 0;
    return function (dt) {
      elapsedTime += dt / 1000;
      animationProgress = Math.max(Math.min(elapsedTime / duration, 1.0), 0.0); //console.log('time', elapsedTime, 'animProg', animationProgress)

      if (direction === 'closed') return 1.0 - animationProgress;
      return animationProgress;
    };
  } // function animateIn(duration) {
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


  raf_loop__WEBPACK_IMPORTED_MODULE_4___default()(function (dt) {
    //  console.log('anim function', animateFunction(dt))
    //  console.log('rendering')
    var progress = animateFunction(dt); //console.log('progress', progress)

    composer.passes.forEach(function (pass) {
      if (pass.uniforms && pass.uniforms.time) {
        pass.uniforms.time.value = .0001 * (Date.now() - start);
      }
    });
    renderScene(progress * 3.0);
    composer.render();
  }).start();
  return {
    render: render,
    triggerAnimation: triggerAnimation
  };
});

/***/ })

})
//# sourceMappingURL=_app.js.b6d5513e70b62e677767.hot-update.js.map