'use client'
import { useFrame, useThree } from '@react-three/fiber'
import { RefObject, useRef } from 'react'
import * as THREE from 'three'

type Props = {}

function Scene({}: Props) {
  const { gl, camera } = useThree()
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state, delta) => {
    ref.current.rotation.y += delta
    // state.camera.rotateZ += Math.sin(state.clock.elapsedTime)
    state.camera.position.z = Math.cos(state.clock.elapsedTime) * 10
    // camera.position.y *= Math.sin(delta * 10)
    camera.position.y = Math.cos(state.clock.elapsedTime)
    state.camera.position.x = Math.sin(state.clock.elapsedTime) + 5
  })
  return (
    <mesh ref={ref as RefObject<THREE.Mesh>}>
      <planeGeometry args={[2, 3]} />
      <meshBasicMaterial color={'red'} side={THREE.DoubleSide} />
    </mesh>
  )
}

export default Scene
