import {
  OrbitControls,
  Text,
  Text3D,
  Center,
  Float,
  Html,
} from '@react-three/drei'
import { useRef } from 'react'

const Texts = () => {
  const cubeRef = useRef()

  return (
    <>
      {/* <OrbitControls /> */}
      {/* Adding text to 3d scene */}
      <Float speed={2} floatIntensity={2}>
        <Text
          strokeColor={'red'}
          strokeOpacity={'0.2'}
          strokeWidth={0.01}
          fontSize={0.5}
          color="#ffffff65"
          // font="./fonts/1.ttf"
          position-y={1.5}
          rotation-y={Math.PI * 0.01}
          maxWidth={4}
          textAlign="center"
        >
          این یک متن است
        </Text>
      </Float>
      <Center>
        <Float speed={2} floatIntensity={2}>
          {/* Adding 3d text the font should be in JSON format  */}
          {/* <Text3D
            // font="./fonts/2.json"
            font="./model/sans.json"
            height={1}
            size={1.1}
            letterSpacing={-0.1}
            bevelEnabled
            bevelSegments={20}
          >
            Hello
            <meshNormalMaterial />
          </Text3D> */}
          <Text
            fontSize={0.4}
            color="blue"
            // font="./fonts/1.ttf"
            position-y={1.5}
            rotation-y={Math.PI * 0.1}
            maxWidth={2}
            textAlign="center"
          >
            این یک متن است
          </Text>
        </Float>
      </Center>

      <mesh position-x={1} ref={cubeRef}>
        <boxGeometry />
        <meshBasicMaterial color="orange" />
        <Html
          className="absolute text-white text-5xl p-5 bg-black/20 rounded-xl"
          // without position it would be in the mesh center
          position={[-0.7, 0.5, 0.5]}
          wrapperClass="text"
          distanceFactor={5}
          // hiding text when its back of mesh
          occlude={[cubeRef]}
        >
          R3F
        </Html>
      </mesh>

      <mesh position-x={-1}>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  )
}

export default Texts
