import * as THREE from 'three'

import { ShaderMaterial, Texture } from 'three'
import { useTexture } from '@react-three/drei'
import { extend, useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react'

function Particles() {
  const particles = useRef(null)
  useFrame((_, delta) => {
    particles.current.rotation.y += delta * 0.1
    particles.current.rotation.x += delta * 0.2
  })
  const texture = useLoader(THREE.TextureLoader, './snow.png')

  const verticesAmount = 2000

  const positionArray = new Float32Array(verticesAmount * 3)

  for (let i = 0; i < verticesAmount * 3; i++) {
    positionArray[i] = (Math.random() - 0.5) * 10
  }

  return (
    <points position={[0, 2, 0]} ref={particles}>
      {/* <sphereGeometry /> */}
      <bufferGeometry>
        <bufferAttribute
          attach={'attributes-position'}
          count={positionArray.length}
          itemSize={3}
          array={positionArray}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        alphaMap={texture}
        transparent
        depthTest="false"
      />
    </points>
  )
}

export default Particles

//chat shader
// import * as THREE from 'three'
// import { extend, useFrame, useLoader } from '@react-three/fiber'
// import { ShaderMaterial, Texture } from 'three'
// import { useTexture } from '@react-three/drei'

// // Define the shader material function
// function shaderMaterial<T extends Record<string, any>>(
//   uniforms: T,
//   vertexShader: string,
//   fragmentShader: string
// ) {
//   return class CustomShaderMaterial extends ShaderMaterial {
//     constructor(parameters?: ShaderMaterialParameters) {
//       super({
//         uniforms: {
//           ...uniforms,
//           ...parameters?.uniforms,
//         },
//         vertexShader,
//         fragmentShader,
//         ...parameters,
//       })
//     }
//   }
// }

// interface CustomPointsMaterialProps {
//   alphaMap: Texture
// }

// const CustomPointsMaterial = shaderMaterial<CustomPointsMaterialProps>(
//   {
//     alphaMap: new THREE.Texture(),
//   },

//   uniform sampler2D alphaMap;
//   varying vec2 vUv;

//   void main() {
//     vec4 color = texture2D(alphaMap, vUv);
//     if (color.r < 0.5) {
//       discard;
//     }
//     gl_PointSize = 10.0;
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//   }
// ,
//   // Fragment shader can be added here if needed
// )

// extend({ CustomPointsMaterial })

// // Then in your component
// const MyComponent = () => {
//   const texture = useTexture('path_to_alpha_map_texture.png')

//   return <points material={CustomPointsMaterial} size={0.02} alphaMap={texture} />
// }
