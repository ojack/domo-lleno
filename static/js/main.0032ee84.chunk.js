(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t){var n=function(){};n.prototype.modify=function(e){for(var t=[],n=0,o=e.faces.length;n<o;n++){var r=t.length,a=e.faces[n],i=a.a,s=a.b,c=a.c,l=e.vertices[i],m=e.vertices[s],u=e.vertices[c];t.push(l.clone()),t.push(m.clone()),t.push(u.clone()),a.a=r,a.b=r+1,a.c=r+2}e.vertices=t},e.exports=n},18:function(e,t){e.exports.addBarycentricCoordinates=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0,o=(e.getIndex()||e.getAttribute("position")).count/3,r=[],a=0;a<o;a++){var i=t?1:0;a%2===0?r.push(0,0,1,0,1,0,1,0,i):r.push(0,1,0,0,0,1,1,0,i)}var s=new Float32Array(r),c=new n.BufferAttribute(s,3);e.addAttribute("barycentric",c)},e.exports.unindexBufferGeometry=function(e){console.log("unindexing");var t=e.getIndex();if(t){for(var n=t.array,o=n.length/3,r=e.attributes,a=Object.keys(r).map(function(t){return{array:[],attribute:e.getAttribute(t)}}),i=function(e){var t=[n[3*e+0],n[3*e+1],n[3*e+2]];a.forEach(function(e){for(var n=e.attribute,o=n.itemSize,r=0;r<t.length;r++)for(var a=t[r],i=0;i<o;i++){var s=n.array[a*o+i];e.array.push(s)}})},s=0;s<o;s++)i(s);t.array=null,e.setIndex(null),a.forEach(function(e){var t=new e.attribute.array.constructor(e.array);e.attribute.setArray(t)})}}},23:function(e,t,n){e.exports=n.p+"static/media/logo-menu.3c4bdf35.png"},25:function(e,t){var n=function(e,t){this.maxEdgeLength=e,this.THREE=t};n.prototype.modify=function(e){for(var t,n=[],o=[],r=this.maxEdgeLength*this.maxEdgeLength,a=0,i=e.faceVertexUvs.length;a<i;a++)o[a]=[];for(a=0,i=e.faces.length;a<i;a++){var s=e.faces[a];if(s instanceof this.THREE.Face3){var c=s.a,l=s.b,m=s.c,u=e.vertices[c],f=e.vertices[l],p=e.vertices[m],v=u.distanceToSquared(f),d=f.distanceToSquared(p),x=u.distanceToSquared(p);if(v>r||d>r||x>r){var g=e.vertices.length,h=s.clone(),y=s.clone();if(v>=d&&v>=x){if((b=u.clone()).lerp(f,.5),h.a=c,h.b=g,h.c=m,y.a=g,y.b=l,y.c=m,3===s.vertexNormals.length)(w=s.vertexNormals[0].clone()).lerp(s.vertexNormals[1],.5),h.vertexNormals[1].copy(w),y.vertexNormals[0].copy(w);if(3===s.vertexColors.length)(z=s.vertexColors[0].clone()).lerp(s.vertexColors[1],.5),h.vertexColors[1].copy(z),y.vertexColors[0].copy(z);t=0}else if(d>=v&&d>=x){if((b=f.clone()).lerp(p,.5),h.a=c,h.b=l,h.c=g,y.a=g,y.b=m,y.c=c,3===s.vertexNormals.length)(w=s.vertexNormals[1].clone()).lerp(s.vertexNormals[2],.5),h.vertexNormals[2].copy(w),y.vertexNormals[0].copy(w),y.vertexNormals[1].copy(s.vertexNormals[2]),y.vertexNormals[2].copy(s.vertexNormals[0]);if(3===s.vertexColors.length)(z=s.vertexColors[1].clone()).lerp(s.vertexColors[2],.5),h.vertexColors[2].copy(z),y.vertexColors[0].copy(z),y.vertexColors[1].copy(s.vertexColors[2]),y.vertexColors[2].copy(s.vertexColors[0]);t=1}else{var b,w,z;if((b=u.clone()).lerp(p,.5),h.a=c,h.b=l,h.c=g,y.a=g,y.b=l,y.c=m,3===s.vertexNormals.length)(w=s.vertexNormals[0].clone()).lerp(s.vertexNormals[2],.5),h.vertexNormals[2].copy(w),y.vertexNormals[0].copy(w);if(3===s.vertexColors.length)(z=s.vertexColors[0].clone()).lerp(s.vertexColors[2],.5),h.vertexColors[2].copy(z),y.vertexColors[0].copy(z);t=2}n.push(h,y),e.vertices.push(b);for(var E=0,k=e.faceVertexUvs.length;E<k;E++)if(e.faceVertexUvs[E].length){var j=e.faceVertexUvs[E][a],O=j[0],C=j[1],N=j[2];if(0===t){(M=O.clone()).lerp(C,.5);var S=[O.clone(),M.clone(),N.clone()],P=[M.clone(),C.clone(),N.clone()]}else if(1===t){(M=C.clone()).lerp(N,.5);S=[O.clone(),C.clone(),M.clone()],P=[M.clone(),N.clone(),O.clone()]}else{var M;(M=O.clone()).lerp(N,.5);S=[O.clone(),C.clone(),M.clone()],P=[M.clone(),C.clone(),N.clone()]}o[E].push(S,P)}}else{n.push(s);for(E=0,k=e.faceVertexUvs.length;E<k;E++)o[E].push(e.faceVertexUvs[E][a])}}}e.faces=n,e.faceVertexUvs=o},e.exports=n},29:function(e,t,n){e.exports=n(57)},34:function(e,t,n){},36:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(22),i=n.n(a),s=(n(34),n(36),n(2)),c=n(3),l=n(5),m=n(4),u=n(6),f=n(62),p=n(59),v=n(60),d=n(17),x=n.n(d),g=function(e){return console.log("footer props!",e),r.a.createElement("div",{className:"flex-1 text-left mt-24 pt-20 text-right flex mb-20 p-4"},r.a.createElement("div",{className:"flex flex-1 flex-row-reverse items-center flex-wrap"},e.organizadores.map(function(e,t){return r.a.createElement("div",{className:"flex-initial",style:{background:"url("+e.acf.logo.sizes.medium+")",backgroundSize:"80%",backgroundRepeat:"no-repeat",backgroundPosition:"center",minHeight:"120px",minWidth:"150px",maxHeight:"160px",maxWidth:"200px"}})}),r.a.createElement("div",{className:"font-menu self-start flex-1 mr-8 ml-4 text-left"},r.a.createElement("div",null,"Organizadores"))))},h=n(58),y=n(23),b=n.n(y),w=[{ID:0,object:"category",title:"\xbfQu\xe9 es Domo LLeno?",url:"/inicio"},{ID:1,object:"category",title:"Artistas Invitados",url:"/artistas"},{ID:2,object:"category",title:"Festivales Invitados",url:"/festivales"},{ID:3,object:"category",title:"Programaci\xf3n",url:"/programacion"},{ID:4,object:"category",title:"\xbfC\xf3mo Participar?",url:"/como-participar"},{ID:5,object:"category",title:"Talleres y Conferencias",url:"/inicio"}],z=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={active:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.setState({active:!0})},300)}},{key:"render",value:function(){var e=w.map(function(e,t){return r.a.createElement(h.a,{to:e.url,key:e.ID,className:"flex-initial text-sm p-0 self-center align-center justify-center w-64 m-0 mt-4 lg:mt-0 text-white hover:text-grey uppercase font-menu no-underline",style:{minWidth:"280px"}},r.a.createElement("div",{className:"align-center"},e.title))});return" mt-8",r.a.createElement("div",{className:"flex flex-col md:flex-row menu mb-10 mt-8",key:"main-menu"},r.a.createElement(h.a,{to:"/",className:"flex-1 h-full cursor-pointer m-3 mt-0"},r.a.createElement("div",{style:{background:"url("+b.a+")",minHeight:"100px",minWidth:"300px",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}})),r.a.createElement("div",{className:"ml-12 flex-2.5 h-100 w-100 p-4 flex flex-col sm:flex-row sm:flex-wrap"},e))}}]),t}(o.Component),E=n(10),k=n(24),j=n.n(k),O=n(12),C=n.n(O),N='attribute vec3 barycentric;\n  attribute float even;\n\n  varying vec3 vBarycentric;\n  varying float noise;\n  uniform float time;\n  uniform float noiseScale;\n  varying vec3 vPosition;\n  varying float vEven;\n  varying vec2 vUv;\n\n  //\n  // GLSL textureless classic 3D noise "cnoise",\n  // with an RSL-style periodic variant "pnoise".\n  // Author:  Stefan Gustavson (stefan.gustavson@liu.se)\n  // Version: 2011-10-11\n  //\n  // Many thanks to Ian McEwan of Ashima Arts for the\n  // ideas for permutation and gradient selection.\n  //\n  // Copyright (c) 2011 Stefan Gustavson. All rights reserved.\n  // Distributed under the MIT license. See LICENSE file.\n  // https://github.com/ashima/webgl-noise\n  //\n\n  vec3 mod289(vec3 x)\n  {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n  }\n\n  vec4 mod289(vec4 x)\n  {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n  }\n\n  vec4 permute(vec4 x)\n  {\n    return mod289(((x*34.0)+1.0)*x);\n  }\n\n  vec4 taylorInvSqrt(vec4 r)\n  {\n    return 1.79284291400159 - 0.85373472095314 * r;\n  }\n\n  vec3 fade(vec3 t) {\n    return t*t*t*(t*(t*6.0-15.0)+10.0);\n  }\n\n  // Classic Perlin noise, periodic variant\n  float pnoise(vec3 P, vec3 rep)\n  {\n    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n    Pi0 = mod289(Pi0);\n    Pi1 = mod289(Pi1);\n    vec3 Pf0 = fract(P); // Fractional part for interpolation\n    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = Pi0.zzzz;\n    vec4 iz1 = Pi1.zzzz;\n\n    vec4 ixy = permute(permute(ix) + iy);\n    vec4 ixy0 = permute(ixy + iz0);\n    vec4 ixy1 = permute(ixy + iz1);\n\n    vec4 gx0 = ixy0 * (1.0 / 7.0);\n    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n    gx0 = fract(gx0);\n    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n    vec4 sz0 = step(gz0, vec4(0.0));\n    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n    vec4 gx1 = ixy1 * (1.0 / 7.0);\n    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n    gx1 = fract(gx1);\n    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n    vec4 sz1 = step(gz1, vec4(0.0));\n    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n    g000 *= norm0.x;\n    g010 *= norm0.y;\n    g100 *= norm0.z;\n    g110 *= norm0.w;\n    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n    g001 *= norm1.x;\n    g011 *= norm1.y;\n    g101 *= norm1.z;\n    g111 *= norm1.w;\n\n    float n000 = dot(g000, Pf0);\n    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n    float n111 = dot(g111, Pf1);\n\n    vec3 fade_xyz = fade(Pf0);\n    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n    return 2.2 * n_xyz;\n  }\n\n  float turbulence( vec3 p ) {\n\n    float w = 100.0;\n    float t = -.5;\n\n    for (float f = 1.0 ; f <= 10.0 ; f++ ){\n    float power = pow( 2.0, f );\n    t += abs( pnoise( vec3( power * p ), vec3( 10.0, 10.0, 10.0 ) ) / power );\n    }\n\n    return t;\n\n  }\n\n  void main () {\n    vUv = uv;\n\n    // get a turbulent 3d noise using the normal, normal to high freq\n    noise = 10.0 *  -.10 * turbulence( .5 * normal );\n    float b = 5.0 * pnoise( 0.05 * position + vec3( 2.0 * time ), vec3( 100.0 ) );\n    // compose both noises\n    float displacement = - 10. * noise + b;\n\n    // move the position along the normal and transform it\n    vec3 newPosition = position + normal * displacement * noiseScale;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);\n  //  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xyz, 1.0);\n    vBarycentric = barycentric;\n    vPosition = position.xyz;\n    vEven = even;\n    vUv = uv;\n  }\n',S="varying vec3 vBarycentric;\n  varying float vEven;\n  varying vec2 vUv;\n  varying vec3 vPosition;\n\n  uniform float time;\n  uniform float thickness;\n  uniform float secondThickness;\n\n  uniform float dashRepeats;\n  uniform float dashLength;\n  uniform bool dashOverlap;\n  uniform bool dashEnabled;\n  uniform bool dashAnimate;\n\n  uniform bool seeThrough;\n  uniform bool insideAltColor;\n  uniform bool dualStroke;\n  uniform bool noiseA;\n  uniform bool noiseB;\n\n  uniform bool squeeze;\n  uniform float squeezeMin;\n  uniform float squeezeMax;\n\n  uniform vec3 stroke;\n  uniform vec3 fill;\n\n  //\n  // Description : Array and textureless GLSL 2D/3D/4D simplex\n  //               noise functions.\n  //      Author : Ian McEwan, Ashima Arts.\n  //  Maintainer : ijm\n  //     Lastmod : 20110822 (ijm)\n  //     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n  //               Distributed under the MIT License. See LICENSE file.\n  //               https://github.com/ashima/webgl-noise\n  //\n\n  vec4 mod289(vec4 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\n  float mod289(float x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\n  vec4 permute(vec4 x) {\n       return mod289(((x*34.0)+1.0)*x);\n  }\n\n  float permute(float x) {\n       return mod289(((x*34.0)+1.0)*x);\n  }\n\n  vec4 taylorInvSqrt(vec4 r)\n  {\n    return 1.79284291400159 - 0.85373472095314 * r;\n  }\n\n  float taylorInvSqrt(float r)\n  {\n    return 1.79284291400159 - 0.85373472095314 * r;\n  }\n\n  vec4 grad4(float j, vec4 ip)\n    {\n    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n    vec4 p,s;\n\n    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n    s = vec4(lessThan(p, vec4(0.0)));\n    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\n\n    return p;\n    }\n\n  // (sqrt(5) - 1)/4 = F4, used once below\n  #define F4 0.309016994374947451\n\n  float snoise(vec4 v)\n    {\n    const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4\n                          0.276393202250021,  // 2 * G4\n                          0.414589803375032,  // 3 * G4\n                         -0.447213595499958); // -1 + 4 * G4\n\n  // First corner\n    vec4 i  = floor(v + dot(v, vec4(F4)) );\n    vec4 x0 = v -   i + dot(i, C.xxxx);\n\n  // Other corners\n\n  // Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)\n    vec4 i0;\n    vec3 isX = step( x0.yzw, x0.xxx );\n    vec3 isYZ = step( x0.zww, x0.yyz );\n  //  i0.x = dot( isX, vec3( 1.0 ) );\n    i0.x = isX.x + isX.y + isX.z;\n    i0.yzw = 1.0 - isX;\n  //  i0.y += dot( isYZ.xy, vec2( 1.0 ) );\n    i0.y += isYZ.x + isYZ.y;\n    i0.zw += 1.0 - isYZ.xy;\n    i0.z += isYZ.z;\n    i0.w += 1.0 - isYZ.z;\n\n    // i0 now contains the unique values 0,1,2,3 in each channel\n    vec4 i3 = clamp( i0, 0.0, 1.0 );\n    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n    //  x0 = x0 - 0.0 + 0.0 * C.xxxx\n    //  x1 = x0 - i1  + 1.0 * C.xxxx\n    //  x2 = x0 - i2  + 2.0 * C.xxxx\n    //  x3 = x0 - i3  + 3.0 * C.xxxx\n    //  x4 = x0 - 1.0 + 4.0 * C.xxxx\n    vec4 x1 = x0 - i1 + C.xxxx;\n    vec4 x2 = x0 - i2 + C.yyyy;\n    vec4 x3 = x0 - i3 + C.zzzz;\n    vec4 x4 = x0 + C.wwww;\n\n  // Permutations\n    i = mod289(i);\n    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n    vec4 j1 = permute( permute( permute( permute (\n               i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n             + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n             + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n             + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n\n  // Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope\n  // 7*7*6 = 294, which is close to the ring size 17*17 = 289.\n    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n    vec4 p0 = grad4(j0,   ip);\n    vec4 p1 = grad4(j1.x, ip);\n    vec4 p2 = grad4(j1.y, ip);\n    vec4 p3 = grad4(j1.z, ip);\n    vec4 p4 = grad4(j1.w, ip);\n\n  // Normalise gradients\n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n    p4 *= taylorInvSqrt(dot(p4,p4));\n\n  // Mix contributions from the five corners\n    vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\n    vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\n    m0 = m0 * m0;\n    m1 = m1 * m1;\n    return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\n                 + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;\n\n    }\n\n  const float PI = 3.14159265359;\n\n  // This is like\n  float aastep (float threshold, float dist) {\n    float afwidth = fwidth(dist) * 0.5;\n    return smoothstep(threshold - afwidth, threshold + afwidth, dist);\n  }\n\n  // This function is not currently used, but it can be useful\n  // to achieve a fixed width wireframe regardless of z-depth\n  float computeScreenSpaceWireframe (vec3 barycentric, float lineWidth) {\n    vec3 dist = fwidth(barycentric);\n    vec3 smoothed = smoothstep(dist * ((lineWidth * 0.5) - 0.5), dist * ((lineWidth * 0.5) + 0.5), barycentric);\n    return 1.0 - min(min(smoothed.x, smoothed.y), smoothed.z);\n  }\n\n  // This function returns the fragment color for our styled wireframe effect\n  // based on the barycentric coordinates for this fragment\n  vec4 getStyledWireframe (vec3 barycentric) {\n    // this will be our signed distance for the wireframe edge\n    float d = min(min(barycentric.x, barycentric.y), barycentric.z);\n\n    // we can modify the distance field to create interesting effects & masking\n    float noiseOff = 0.0;\n    if (noiseA) noiseOff += snoise(vec4(vPosition.xyz * 1.0, time * 0.35)) * 0.15;\n    if (noiseB) noiseOff += snoise(vec4(vPosition.xyz * 80.0, time * 0.5)) * 0.12;\n    d += noiseOff;\n\n    // for dashed rendering, we can use this to get the 0 .. 1 value of the line length\n    float positionAlong = max(barycentric.x, barycentric.y);\n    if (barycentric.y < barycentric.x && barycentric.y < barycentric.z) {\n      positionAlong = 1.0 - positionAlong;\n    }\n\n    // the thickness of the stroke\n    float computedThickness = thickness;\n\n    // if we want to shrink the thickness toward the center of the line segment\n    if (squeeze) {\n      computedThickness *= mix(squeezeMin, squeezeMax, (1.0 - sin(positionAlong * PI)));\n    }\n\n    // if we should create a dash pattern\n    if (dashEnabled) {\n      // here we offset the stroke position depending on whether it\n      // should overlap or not\n      float offset = 1.0 / dashRepeats * dashLength / 2.0;\n      if (!dashOverlap) {\n        offset += 1.0 / dashRepeats / 2.0;\n      }\n\n      // if we should animate the dash or not\n      if (dashAnimate) {\n        offset += time * 6.0;\n      }\n\n      // create the repeating dash pattern\n      float pattern = fract((positionAlong + offset) * dashRepeats);\n      computedThickness *= 1.0 - aastep(dashLength, pattern);\n    }\n\n    // compute the anti-aliased stroke edge\n    float edge = 1.0 - aastep(computedThickness, d);\n\n    // now compute the final color of the mesh\n    vec4 outColor = vec4(0.0);\n    if (seeThrough) {\n      outColor = vec4(stroke, edge);\n      if (insideAltColor && !gl_FrontFacing) {\n        outColor.rgb = fill;\n      }\n    } else {\n      vec3 mainStroke = mix(fill, stroke, edge);\n      outColor.a = 1.0;\n      if (dualStroke) {\n        float inner = 1.0 - aastep(secondThickness, d);\n        vec3 wireColor = mix(fill, stroke, abs(inner - edge));\n        outColor.rgb = wireColor;\n      } else {\n        outColor.rgb = mainStroke;\n      }\n    }\n\n    return outColor;\n  }\n\n  void main () {\n    gl_FragColor = getStyledWireframe(vBarycentric);\n  }\n",P="uniform float time;\n\n  attribute vec3 customColor;\n  attribute vec3 displacement;\n  attribute float animationOffset;\n\n  varying vec3 vNormal;\n  varying vec3 vColor;\n\n  float quadraticEaseInOut ( float k ) {\n\n    if ( ( k *= 2.0 ) < 1.0 ) return 0.5 * k * k;\n    return - 0.5 * ( --k * ( k - 2.0 ) - 1.0 );\n\n  }\n\n  void main() {\n\n    vNormal = normal;\n    vColor = customColor;\n\n    //float t = abs(time * 2.0 - 1.0);\n\n  //  float t = time /(1.0 - animationOffset);\n   float t = time /(1.0 - displacement.y);\n    //vec3 newPosition = position + time * displacement;\n  //  vec3 newPosition = quadraticEaseInOut(t) * (displacement - position) + position;\n\n\n  //  vec3 newPosition = quadraticEaseInOut(t) * (displacement - position) + position;\n    // vec3 newPosition = position + normal * quadraticEaseInOut(t) * displacement;\n    vec3 newPosition = position + normal * time * displacement;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );\n\n  }\n",M="\n  varying vec3 vNormal;\n  varying vec3 vColor;\n\n  void main() {\n\n    const float ambient = 0.005;\n\n    vec3 light = vec3( 1.0 );\n    light = normalize( light );\n\n    float directional = max( dot( vNormal, light ), 0.0 );\n\n    gl_FragColor = vec4( ( directional + ambient ) * vColor, 1.0 );\n  //  gl_FragColor = vec4( vColor, 1.0 );\n    gl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n\n  }",I=n(25),A=n.n(I),L=n(18),_=function(e){var t=window.devicePixelRatio,n=new e.WebGLRenderer;n.setPixelRatio(t),n.setSize(window.innerWidth,window.innerHeight);var o=new e.PerspectiveCamera(30,window.innerWidth/window.innerHeight,1,1e4);o.position.z=390;var r=new e.Scene;window.addEventListener("resize",function(e){.5*window.innerWidth,.5*window.innerHeight,o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)},!1);var a={x:0,y:0};window.innerWidth,window.innerHeight;function i(e){return e*Math.PI/180}var s=function(e){var t=t={time:{type:"f",value:0}},n=new e.IcosahedronGeometry(98,2);console.log("num face is",n.faces.length),n.center(),(new C.a).modify(n);for(var o=new A.a(4,e),r=0;r<6;r++)o.modify(n);var a=n.faces.length,i=n.boundingBox;n.vertices;n=(new e.BufferGeometry).fromGeometry(n);var s=new Float32Array(3*a*3),c=new Float32Array(3*a*3),l=new Float32Array(3*a),m=new e.Color;Math.random(),Math.random(),Math.random();console.log("num face is",a);for(var u=0;u<a;u++){var f=9*u;m.setHSL(Math.floor(u/64)%9/9,1,.5),m.setHSL(Math.floor(u/64)%9/9,1,1);var p=Math.random()*(i.max.x-i.min.x),v=Math.random()*(i.max.y-i.min.y)*4,d=Math.random()*(i.max.z-i.min.z)*10,x=1*Math.random();for(r=0;r<3;r++)s[f+3*r]=m.r,s[f+3*r+1]=m.g,s[f+3*r+2]=m.b,c[f+3*r]=p,c[f+3*r+1]=v,c[f+3*r+2]=d,l[f+r]=x}n.addAttribute("customColor",new e.BufferAttribute(s,3)),n.addAttribute("displacement",new e.BufferAttribute(c,3)),n.addAttribute("animationOffset",new e.BufferAttribute(l,1));var g=new e.ShaderMaterial({uniforms:t,vertexShader:P,fragmentShader:M});return{mesh:new e.Mesh(n,g),material:g}}(e);r.add(s.mesh);var c=function(e){return new e.ShaderMaterial({extensions:{derivatives:!0},transparent:!0,side:e.DoubleSide,uniforms:{time:{type:"f",value:0},noiseScale:{type:"f",value:1},fill:{value:new e.Color("#000")},stroke:{value:new e.Color("#000")},noiseA:{value:!1},noiseB:{value:!1},dualStroke:{value:!1},seeThrough:{value:!0},insideAltColor:{value:!1},thickness:{value:.01},secondThickness:{value:0},dashEnabled:{value:!1},dashRepeats:{value:.6},dashOverlap:{value:!1},dashLength:{value:.55},dashAnimate:{value:!0},squeeze:{value:!1},squeezeMin:{value:.3},squeezeMax:{value:1.6}},vertexShader:N,fragmentShader:S})}(e),l=new e.IcosahedronGeometry(100,2);(new C.a).modify(l);var m=(new e.BufferGeometry).fromGeometry(l);Object(L.unindexBufferGeometry)(m,e),Object(L.addBarycentricCoordinates)(m,!0,e);var u=new e.Mesh(m,c);u.rotation.z=.5,r.add(u);var f=Date.now();document.onmousemove=function(t){t.pageX,t.pageY;var n=t.clientX-a.x,o=t.clientY-a.y,r=(new e.Quaternion).setFromEuler(new e.Euler(i(.08*o),i(.08*n),0,"XYZ"));u.quaternion.multiplyQuaternions(r,u.quaternion);var c=(new e.Quaternion).setFromEuler(new e.Euler(i(.02*o),i(.02*n),0,"XYZ"));s.mesh.quaternion.multiplyQuaternions(c,s.mesh.quaternion),a={x:t.clientX,y:t.clientY}};return{renderer:n,camera:o,scene:r,renderScene:function(e){c.uniforms.time.value=1e-4*(Date.now()-f),c.uniforms.noiseScale.value=0,s.material.uniforms.time.value=e,n.render(r,o)}}},T=n(26),D=n.n(T),F={vertex:"varying vec2 vUv;\n  void main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  }\n",fragment:"precision mediump float;\n\n  //#define LUT_FLIP_Y\n\n  varying vec2 vUv;\n  uniform sampler2D tDiffuse;\n  uniform sampler2D tLookup;\n  uniform float time;\n  //#pragma glslify: lut = require('glsl-lut')\n\n  void main () {\n    vec4 domeColor = texture2D(tDiffuse, vUv);\n    //gl_FragColor.rgb = lut(gl_FragColor, tLookup).rgb;\n    vec2 st = vec2(fract(vUv.x/1.5 ), vUv.y/1.5);\n    vec4 lookupColor = texture2D(tLookup, st);\n    gl_FragColor = domeColor*lookupColor;\n  }\n"},R=j()(E),q=function(e){var t=_(E),n=t.renderer,o=t.camera,r=t.scene,a=t.renderScene;e.appendChild(n.domElement);var i=new E.WebGLRenderTarget(window.innerWidth,window.innerHeight);i.texture.stencil=!1,i.texture.minFilter=E.LinearFilter,i.texture.magFilter=E.LinearFilter,i.texture.format=E.RGBFormat,i.texture.generateMipmaps=!1;var s=new R(n,i);s.addPass(new R.RenderPass(r,o)),console.log("color shaders",F);var c=new R.ShaderPass({vertexShader:F.vertex,fragmentShader:F.fragment,uniforms:{tDiffuse:{type:"t",value:new E.Texture},tLookup:{type:"t",value:new E.Texture},time:{type:"f",value:0}}});s.addPass(c);var l=(new E.TextureLoader).load("/static/images/colors.png");l.generateMipmaps=!1,l.minFilter=E.LinearFilter,c.uniforms.tLookup.value=l,s.passes[s.passes.length-1].renderToScreen=!0;var m=Date.now();var u=function(){};return D()(function(e){var t=u(e);s.passes.forEach(function(e){e.uniforms&&e.uniforms.time&&(e.uniforms.time.value=1e-4*(Date.now()-m))}),a(3*t),s.render()}).start(),{render:function(){s.passes.forEach(function(e){e.uniforms&&e.uniforms.time&&(e.uniforms.time.value=1e-4*(Date.now()-m))}),s.render()},triggerAnimation:function(e,t){u=function(e,t){var n=0,o=0;return function(r){return n+=r/1e3,o=Math.max(Math.min(n/e,1),0),"closed"===t?1-o:o}}(e,t)}}},W=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).dome=null,e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("MOUNTED DOME"),this.dome=q(this.threeRootElement),this.dome.triggerAnimation(5,this.props.domeState)}},{key:"componentDidUpdate",value:function(e,t,n){console.log("comp did update",e,this.props),e.domeState!==this.props.domeState&&this.dome.triggerAnimation(5,this.props.domeState)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"fixed pin-t pin-l w-full h-full",style:{zIndex:0},ref:function(t){return e.threeRootElement=t}})}}]),t}(o.Component),B=function(e){return r.a.createElement("div",{className:"text-white w-full font-sans text-center flex flex-col content-center",style:{zIndex:30,position:"absolute",backgroundColor:"rgba(0, 0, 0, 0.4)"}},r.a.createElement("div",{className:"max-w-3xl m-auto"},r.a.createElement(z,null),e.children,r.a.createElement(g,{organizadores:e.organizadores})))},H=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container font-sans text-center text-white"},r.a.createElement(h.a,{to:"/inicio"},r.a.createElement("div",{className:"fixed pin-t pin-l w-full h-full text-white"},r.a.createElement("div",{key:"title-text-23",className:"opacity cursor-pointer"},r.a.createElement("div",{style:{background:"url(/static/images/title-text-18.png)",width:"50%",height:"250px",minHeight:"100px",minWidth:"300px",position:"fixed",right:"5%",bottom:"20%",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}),r.a.createElement("div",{className:"fixed pin-b pin-r mr-20 mb-16 text-xl font-menu cursor-pointer",style:{zIndex:20}},"ENTRAR")))))}}]),t}(o.Component),G=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){console.log("TextElement",this.props);this.props.post.acf.imagen&&this.props.post.acf.imagen.sizes.large;var e="text-sm text-left flex-1 flex flex-col md:flex-row block m-6 font-hairline leading-loose mt-20 p-2 sm:p-8";return console.log("POST",this.props.post.acf.text_alignment),this.props.post.acf&&this.props.post.acf.text_alignment&&("Center"===this.props.post.acf.text_alignment?e+=" justify-center":"Left"===this.props.post.acf.text_alignment?e+=" justify-start":e+=" justify-end"),r.a.createElement("div",{className:e},r.a.createElement("div",{className:"h-2 mt-3 mr-6",style:{backgroundImage:"url(/static/images/underline.png)",backgroundRepeat:"no-repeat",backgroundSize:"100px",width:"100px"}},r.a.createElement("div",{className:"font-menu -mt-20 uppercase mb-16 text-2xl sm:text-3xl whitespace-no-wrap",dangerouslySetInnerHTML:{__html:this.props.post.title.rendered}})),r.a.createElement("div",{className:" mb-6 max-w-md",dangerouslySetInnerHTML:{__html:this.props.post.content.rendered}}))}}]),t}(o.Component),U=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){console.log("props",this.props);return r.a.createElement("div",{className:"p-3"},r.a.createElement("div",{className:"flex flex-col-reverse max-w-3xl pt-12"},this.props.posts.map(function(e,t){return e.acf&&e.acf.imagen?r.a.createElement("img",{className:"m-12",key:t,src:e.acf.imagen.sizes.large}):r.a.createElement(G,{post:e,key:t,index:t})})),r.a.createElement("div",null,r.a.createElement("div",{className:"font-menu text-left uppercase mb-2 text-3xl whitespace-no-wrap mt-16 p-6"}," Escenarios"),r.a.createElement("div",{className:"flex flex-col-reverse md:flex-row-reverse max-w-3xl"},this.props.escenarios.map(function(e,t){return r.a.createElement("div",{className:"flex-1 p-4"},r.a.createElement("div",{className:"flex-1",style:{background:"url("+e.acf.imagen.sizes.medium_large+")",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"right top",minHeight:"300px"}}),r.a.createElement("div",{className:"font-menu mt-3 text-lg text-left"}," ",e.title.rendered))}))))}}]),t}(o.Component),Y=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){console.log("Festival",this.props);var e=this.props.post.acf.imagen?"url("+this.props.post.acf.imagen.sizes.large+")":"#222";return r.a.createElement("div",{className:"flex-1 flex flex-col-reverse md:flex-row-reverse block mt-24 mb-24"},r.a.createElement("div",{className:"flex-1 text-left pl-24 pt-16 -ml-24 -mt-8 -mb-16 -mr-10",style:{background:"url(/static/images/festival-background"+this.props.index%2+".png)"}},r.a.createElement("div",{className:"p-10 pr-24"},r.a.createElement("h1",{className:"font-menu uppercase text-3xl mb-6",dangerouslySetInnerHTML:{__html:this.props.post.title.rendered}}),r.a.createElement("p",{className:"font-hairline leading-loose"}," ",this.props.post.acf.texto))),r.a.createElement("div",{className:"flex-1",style:{background:e,backgroundSize:"100%",backgroundRepeat:"no-repeat",backgroundPosition:"right top",minHeight:"300px"}}))}}]),t}(o.Component),V=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).call(this))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e;return console.log(this.props),this.props.texto&&(e=r.a.createElement("div",{className:"text-left max-w_sm m-4 lg:max-w-md lg:ml-128 font-hairline leading-loose lg:-mt-4"},this.props.texto)),r.a.createElement("div",{className:"inline-block m-4 mb-20"},r.a.createElement("div",{className:"inline-block"},r.a.createElement("h1",{className:"font-menu mt-20 uppercase mb-12 text-3xl",dangerouslySetInnerHTML:{__html:this.props.title}}),r.a.createElement("div",{className:"w-full h-2",style:{backgroundImage:"url(/static/images/underline.png)",backgroundRepeat:"no-repeat",backgroundSize:"100px"}})),e)}}]),t}(o.Component),X=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(V,{title:"Festivales Invitados"}),r.a.createElement("div",{className:"flex flex-col max-w-3xl"},this.props.posts.map(function(e,t){return r.a.createElement(Y,{post:e,key:t,index:t})})))}}]),t}(o.Component),Z=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(V,{title:"Programaci\xf3n"}),r.a.createElement("div",{className:"flex flex-col-reverse max-w-3xl items-center text-center"},this.props.posts.map(function(e,t){return r.a.createElement("img",{className:"flex-1 m-4 mb-12",src:e.acf.imagen.sizes.large})}),r.a.createElement("img",{className:"flex-1 max-w-md m-4 mb-10 mt-10",src:"/static/images/programacion-fechas.png"})))}}]),t}(o.Component),Q=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"flex flex-col-reverse max-w-3xl pt-12"},this.props.posts.map(function(e,t){return e.acf&&e.acf.imagen?r.a.createElement("img",{className:"m-12",key:t,src:e.acf.imagen.sizes.large}):r.a.createElement(G,{post:e,key:t,index:t})}))}}]),t}(o.Component),J=n(61),K=function(e){function t(e){var n;return Object(s.a)(this,t),n=Object(l.a)(this,Object(m.a)(t).call(this,e)),console.log("histore",n.props.history.location.pathname),n.state={domeState:n.getDomeState(n.props.history.location.pathname)},n.props.history.listen(function(e,t){n.setState({domeState:n.getDomeState(e.pathname)}),console.log("on route change",e.pathname)}),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"getDomeState",value:function(e){return"/"===e?"closed":"open"}},{key:"render",value:function(){return r.a.createElement("div",{className:"container font-sans text-center text-white"},r.a.createElement(W,{key:"initial",domeState:this.state.domeState}),this.props.children)}}]),t}(o.Component),$=Object(J.a)(K),ee=n(11),te=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={hover:!1},n.handleMouseEnter=n.handleMouseEnter.bind(Object(ee.a)(Object(ee.a)(n))),n.handleMouseLeave=n.handleMouseLeave.bind(Object(ee.a)(Object(ee.a)(n))),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleMouseEnter",value:function(){this.setState({hover:!0})}},{key:"handleMouseLeave",value:function(){this.setState({hover:!1})}},{key:"render",value:function(){var e=this.props.post;console.log("RENDERINF",e);var t="w-100 md:w-1/3 sm:w-1/2 cursor-pointer artista-container",n=e.acf.image.sizes?"url("+e.acf.image.sizes.large+")":"#222",o="w-full h-full bg-black pt-32 artista";return!0===this.state.hover&&(t+=" hover",o+=" hover"),r.a.createElement("div",{className:t,key:this.props.index},r.a.createElement("div",{className:"",style:{background:n,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",minWidth:"300px",minHeight:"300px"},onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},r.a.createElement("div",{className:o,style:{backgroundColor:"rgba(0, 0, 0, 0.5)"}},r.a.createElement("div",{className:"p-10 pin-b font-menu text-left w-100 uppercase pin-l pb-16 text-lg"},r.a.createElement("h3",null,e.title.rendered),r.a.createElement("h4",{className:"text-sm pt-2"},e.acf.pais)),r.a.createElement("div",{className:"w-1/2 h-1/2 mb-10 bg-white pin-b pin-l"}))))}}]),t}(o.Component),ne=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){console.log("posts",this.props.posts);var e=this.props.posts.map(function(e,t){return r.a.createElement(te,{post:e,index:t})});return r.a.createElement("div",null,r.a.createElement(V,{title:"Artistas Invitados"}),r.a.createElement("div",{className:"flex flex-wrap max-w-3xl items-center justify-center"},e))}}]),t}(o.Component),oe="http://api.domolleno.gov.co/wp-json/wp/v2",re=[{route:"inicio",component:U},{route:"festivales",component:X},{route:"como-participar",component:Q},{route:"programacion",component:Z},{route:"artistas",component:ne}],ae=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={categories:e.populateCategories(),loaded:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"populateCategories",value:function(){var e={};return re.forEach(function(t){e[t.route]={posts:[]}}),e.escenarios={posts:[]},e.organizadores={posts:[]},e}},{key:"getRoutes",value:function(){var e=this;return r.a.createElement(f.a,null,re.map(function(t){return r.a.createElement(p.a,{path:"/"+t.route},r.a.createElement(t.component,{posts:e.state.categories[t.route].posts,escenarios:e.state.categories.escenarios.posts}))}))}},{key:"componentWillMount",value:function(){var e={},t={},n=this;x.a.get(oe+"/categories").end(function(o,r){o?console.log("error",o):r.body.length>0?(r.body.forEach(function(n){e[n.id]=Object.assign({},n,{posts:[]}),t[n.slug]=e[n.id]}),x.a.get(oe+"/posts?per_page=99").end(function(o,r){o?console.log("ERRER",o):(r.body.forEach(function(t){t.categories.length>0&&e[t.categories[0]].posts.push(t)}),n.setState({categories:t,loaded:!0}),console.log("CAT",t))})):console.log("error fetching categories")})}},{key:"render",value:function(){return r.a.createElement(v.a,{basename:""},r.a.createElement($,null,r.a.createElement(f.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:H}),r.a.createElement(B,{organizadores:this.state.categories.organizadores.posts},this.getRoutes()))))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,2,1]]]);
//# sourceMappingURL=main.0032ee84.chunk.js.map