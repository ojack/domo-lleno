varying vec2 vUv;
varying float noise;

void main() {

  // compose the colour using the UV coordinate
  // and modulate it with the noise like ambient occlusion
//		vec3 color = vec3( vUv * ( 1. - 2. * noise ), 0.0 );

//  vec3 color = vec3( vec2(1.0, 1.0) * ( 1. - 2. * noise ), 1.0 );
    vec3 color = vec3( vec3(1.0, 1.0, 1.0) * ( 1. - 2. * noise ));
  //	gl_FragColor = vec4( color.rgb, 1.0 );
    gl_FragColor = vec4( 1.0, 1.0, 1.0, 1.0 );
}
