uniform float time;

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
