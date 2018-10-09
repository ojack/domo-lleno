// const glslify = require('glslify')
// const path = require('path')
//
// module.exports = require('shader-reload')({
//   vertex: glslify(path.resolve(__dirname, 'color.vert')),
//   fragment: glslify(path.resolve(__dirname, 'color.frag'))
// })
//
//
// module.exports = {
//   vertex: glslify(path.resolve(__dirname, 'color.vert')),
//   fragment: glslify(path.resolve(__dirname, 'color.frag'))
// }


// import vert from './color.vert'
// import frag from './color.frag'

export default {
  vertex: `varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,
  fragment: `precision mediump float;

  //#define LUT_FLIP_Y

  varying vec2 vUv;
  uniform sampler2D tDiffuse;
  uniform sampler2D tLookup;
  uniform float time;
  //#pragma glslify: lut = require('glsl-lut')

  void main () {
    vec4 domeColor = texture2D(tDiffuse, vUv);
    //gl_FragColor.rgb = lut(gl_FragColor, tLookup).rgb;
    vec2 st = vec2(fract(vUv.x/1.5 ), vUv.y/1.5);
    vec4 lookupColor = texture2D(tLookup, st);
    gl_FragColor = domeColor*lookupColor;
  }
`
}
