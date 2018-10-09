import shader from './shaders/explode.shader.js'
import ExplodeModifier from './utils/ExplodeModifier.js'
import TessellateModifier from './utils/TessellateModifier.js'



export default THREE => {
  var uniforms = uniforms = {
            time: { type: "f", value: 0.0 }
        }
  var textGeometry = new THREE.IcosahedronGeometry(98,2)
      console.log('num face is', textGeometry.faces.length)
      textGeometry.center();

      var explodeModifier = new ExplodeModifier();
      explodeModifier.modify(textGeometry);

      var tessellateModifier = new TessellateModifier(4, THREE);
      for (var i = 0; i < 6; i++) {
          tessellateModifier.modify(textGeometry);
      }

      var numFaces = textGeometry.faces.length;
      var bb = textGeometry.boundingBox;
          var vertices = textGeometry.vertices;
      textGeometry = new THREE.BufferGeometry().fromGeometry( textGeometry )

    var colors = new Float32Array( numFaces * 3 * 3 );
    var displacement = new Float32Array( numFaces * 3 * 3 );
    var animationOffset = new Float32Array( numFaces * 3)

    var color = new THREE.Color();
    var h = 0.2 * Math.random();
    var s = 0.5 + 0.5 * Math.random();
    var l = 0.5 + 0.5 * Math.random();
    console.log('num face is', numFaces)
    for ( var f = 0; f < numFaces; f ++ ) {
      var index = 9 * f;
      // each a different color
        color.setHSL( Math.floor(f/64)%9/9, 1.0, 0.5);

        color.setHSL( Math.floor(f/64)%9/9, 1.0, 1.0);

      // var d = 10 * ( 0.5 - Math.random() );
              var x = Math.random() * (bb.max.x - bb.min.x);
              var y = Math.random() * (bb.max.y - bb.min.y) * 4;
              var z = Math.random() * (bb.max.z - bb.min.z) * 10;
      var anim = Math.random() * 1.0
      for ( var i = 0; i < 3; i ++ ) {
        colors[ index + ( 3 * i )     ] = color.r;
        colors[ index + ( 3 * i ) + 1 ] = color.g;
        colors[ index + ( 3 * i ) + 2 ] = color.b;
        displacement[ index + ( 3 * i )     ] = x;
        displacement[ index + ( 3 * i ) + 1 ] = y;
        displacement[ index + ( 3 * i ) + 2 ] = z;

        animationOffset[ index + i] = anim;
      }

    }

    textGeometry.addAttribute( 'customColor', new THREE.BufferAttribute( colors, 3 ) );
    textGeometry.addAttribute( 'displacement', new THREE.BufferAttribute( displacement, 3 ) );
    textGeometry.addAttribute( 'animationOffset', new THREE.BufferAttribute( animationOffset, 1 ) );

      var shaderMaterial = new THREE.ShaderMaterial( {
      uniforms:       uniforms,
      vertexShader:   shader.vertex,
      fragmentShader: shader.fragment
    });
    //
    return {
      mesh: new THREE.Mesh( textGeometry, shaderMaterial ),
      material: shaderMaterial
    }
}
