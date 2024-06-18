'use client'
import { useFrame, useThree, useLoader } from '@react-three/fiber'
import { RefObject, Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'
import Custom from './Custom'
import Particles from './Particles'
import Bike from './Bike.jsx'
import Model from './Model'
import { button, useControls } from 'leva'
import Audio from './Audio'
import Texts from './Text'
import Shaders from './Shaders'
type Props = {}

function Scene({}: Props) {
  const texture = useLoader(THREE.TextureLoader, './avengers.jpg')
  const { gl, camera } = useThree()
  const ref = useRef<THREE.Mesh>(null)
  const cubeRef = useRef<THREE.Mesh>(null)
  useFrame((state, delta) => {
    // ref.current.rotation.y += delta
    // cubeRef.current.rotation.x += delta * 2
    // state.camera.rotateZ += Math.sin(state.clock.elapsedTime)
    // state.camera.position.z = Math.cos(state.clock.elapsedTime) * 10
    // camera.position.y *= Math.sin(delta * 10)
    // camera.position.y = Math.cos(state.clock.elapsedTime)
    // state.camera.position.x = Math.sin(state.clock.elapsedTime) + 5
  })
  // const { position, color, wireframe, scale } = useControls('cube', {
  //   position: {
  //     value: {
  //       x: -0.9,
  //       y: 1.3,
  //       z: 0,
  //     },
  //     min: -10,
  //     max: 10,
  //     step: 0.01,
  //   },
  //   color: '#ffffff',
  //   wireframe: false,
  //   click: button(() => {
  //     console.log('clicked')
  //   }),
  //   scale: { options: [1, 1.5, 2, 2.5, 3] },
  // })
  // console.log(scale)

  // const sphereTweak = useControls('sphere', {
  //   xRotation: 0,
  // })

  return (
    <>
      {/* <Texts /> */}
      <OrbitControls />
      <ambientLight intensity={2} />
      <directionalLight intensity={10} />
      {/* <Custom /> */}
      {/* <mesh ref={ref as RefObject<THREE.Mesh>}> */}
      {/*  reed:x, green:y , blue:z */}
      {/* <axesHelper args={[2]} /> */}
      {/* <planeGeometry args={[2, 3]} />
        <meshBasicMaterial
          // color={'red'}
          map={texture}
          side={THREE.DoubleSide}
        /> */}
      {/* </mesh> */}
      {/* <mesh ref={cubeRef} position={[0, 1, -2]}> */}
      {/* <axesHelper args={[2]} /> */}
      {/* <boxGeometry /> */}
      {/* <meshBasicMaterial color={'green'} side={THREE.DoubleSide} /> */}
      {/* </mesh> */}
      {/* <Particles /> */}

      {/* Leva */}
      {/* <mesh position={[position.x, position.y, position.z]} scale={scale}>
        <boxGeometry />
        <meshStandardMaterial color={color} wireframe={wireframe} />
      </mesh> */}
      {/* <Bike scale={1.5} position={[-0.5, 0.75, 0]} />

      <Suspense
        fallback={
          <mesh scale-y={2}>
            <boxGeometry />
            <meshBasicMaterial wireframe />
          </mesh>
        }
      >
        <Model position={[position.x, position.y, position.z]} scale={scale} />
      </Suspense> */}
      {/* <Audio /> */}
      <Shaders />
    </>
  )
}

export default Scene
