// const glslify = require('glslify')
// const path = require('path')
//
// module.exports = require('shader-reload')({
//   vertex: glslify(path.resolve(__dirname, 'explode.vert')),
//   fragment: glslify(path.resolve(__dirname, 'explode.frag'))
// })

// import vert from './explode.vert'
// import frag from './explode.frag'

export default {
  vertex: `uniform float time;

  attribute vec3 customColor;
  attribute vec3 displacement;
  attribute float animationOffset;

  varying vec3 vNormal;
  varying vec3 vColor;

  float quadraticEaseInOut ( float k ) {

    if ( ( k *= 2.0 ) < 1.0 ) return 0.5 * k * k;
    return - 0.5 * ( --k * ( k - 2.0 ) - 1.0 );

  }

  void main() {

    vNormal = normal;
    vColor = customColor;

    //float t = abs(time * 2.0 - 1.0);

  //  float t = time /(1.0 - animationOffset);
   float t = time /(1.0 - displacement.y);
    //vec3 newPosition = position + time * displacement;
  //  vec3 newPosition = quadraticEaseInOut(t) * (displacement - position) + position;


  //  vec3 newPosition = quadraticEaseInOut(t) * (displacement - position) + position;
    // vec3 newPosition = position + normal * quadraticEaseInOut(t) * displacement;
    vec3 newPosition = position + normal * time * displacement;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );

  }
`,
  fragment: `
  varying vec3 vNormal;
  varying vec3 vColor;

  void main() {

    const float ambient = 0.005;

    vec3 light = vec3( 1.0 );
    light = normalize( light );

    float directional = max( dot( vNormal, light ), 0.0 );

    gl_FragColor = vec4( ( directional + ambient ) * vColor, 1.0 );
  //  gl_FragColor = vec4( vColor, 1.0 );
    gl_FragColor.xyz = sqrt( gl_FragColor.xyz );

  }`
}
