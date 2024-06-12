'use client'
import { useFrame, useThree, useLoader } from '@react-three/fiber'
import { RefObject, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'
import Custom from './Custom'
import Particles from './Particles'
type Props = {}

function Scene({}: Props) {
  const texture = useLoader(THREE.TextureLoader, './avengers.jpg')
  const { gl, camera } = useThree()
  const ref = useRef<THREE.Mesh>(null)
  const cubeRef = useRef<THREE.Mesh>(null)
  useFrame((state, delta) => {
    ref.current.rotation.y += delta
    cubeRef.current.rotation.x += delta * 2
    // state.camera.rotateZ += Math.sin(state.clock.elapsedTime)
    // state.camera.position.z = Math.cos(state.clock.elapsedTime) * 10
    // camera.position.y *= Math.sin(delta * 10)
    // camera.position.y = Math.cos(state.clock.elapsedTime)
    // state.camera.position.x = Math.sin(state.clock.elapsedTime) + 5
  })
  return (
    <>
      <OrbitControls />
      <Custom />
      <mesh ref={ref as RefObject<THREE.Mesh>}>
        {/*  reed:x, green:y , blue:z */}
        {/* <axesHelper args={[2]} /> */}
        <planeGeometry args={[2, 3]} />
        <meshBasicMaterial
          // color={'red'}
          map={texture}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={cubeRef} position={[0, 1, -2]}>
        {/* <axesHelper args={[2]} /> */}
        <boxGeometry />
        <meshBasicMaterial color={'green'} side={THREE.DoubleSide} />
      </mesh>
      <Particles />
    </>
  )
}

export default Scene
