import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
  CubeCamera,
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Cameras = () => {
  const cubeRef = useRef(null)

  useFrame((_, delta) => {
    cubeRef.current.rotation.x += delta
    cubeRef.current.rotation.y += delta
  })

  return (
    <>
      <OrbitControls />
      <Environment background files="./model/envMap/1.hdr" />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
      {/* How to create an environment reflector */}
      {/* frames={1} just take 6 pictures for camera at once and then stop taking others */}
      {/* <CubeCamera resolution={1024} frames={1}> */}
      <CubeCamera resolution={1024}>
        {(texture) => (
          <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial
              envMap={texture}
              roughness={0}
              metalness={0.9}
            />
          </mesh>
        )}
      </CubeCamera>
      <mesh ref={cubeRef} position-z={5}>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  )
}

export default Cameras
