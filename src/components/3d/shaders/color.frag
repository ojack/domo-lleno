precision mediump float;

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
