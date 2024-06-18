'use client'
import {
  OrbitControls,
  MeshReflectorMaterial,
  MeshWobbleMaterial,
  MeshDistortMaterial,
  GradientTexture,
  Environment,
  useCursor,
} from '@react-three/drei'
import { useState, useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame, useLoader } from '@react-three/fiber'

const Shaders = () => {
  const texture = useLoader(THREE.TextureLoader, './avengers.jpg')

  const [hover, setHover] = useState(false)
  const planeRef = useRef(null)

  // helper to indicate hover action
  useCursor(hover)

  const { lerp } = THREE.MathUtils

  // we can use gsap too
  useFrame(() => {
    planeRef.current.material.distort = lerp(
      planeRef.current.material.distort,
      hover ? 0 : 0.2,
      hover ? 0.01 : 0.05
    )
  })

  //   useEffect(() => {
  //     if (hover) {
  //       planeRef.current.material.distort = 0
  //     } else {
  //       planeRef.current.material.distort = 0.2
  //     }
  //   }, [hover])

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <Environment background files="./model/envMap/1.hdr" />

      {/* <mesh> */}
      {/*  increasing segments to smooth wobble */}
      {/* <boxGeometry args={[1, 1, 1, 32, 32, 32]} /> */}
      {/* default factor is one wobble increases by increasing that */}
      {/* <MeshWobbleMaterial color="#F76E53" factor={3} speed={0.4} /> */}
      {/* </mesh> */}

      {/* 
      <mesh rotation-x={-Math.PI * 0.5} position-y={-0.75}>
        <planeGeometry args={[6, 6]} />
        <MeshReflectorMaterial
          resolution={512}
          color="gray"
          // first value of blur is for width and the second one is for height , if second one decrease, we have more blur's toward the height
          //   blur={[1000, 100]}
          blur={[1000, 1000]}
          // mix between blur and unblur version, 1 is most blur version
          mixBlur={1}
          mirror={1}
        />
      </mesh> */}

      <mesh
        ref={planeRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <planeGeometry args={[2, 3, 64, 64]} />
        <MeshDistortMaterial map={texture} speed={3} distort={0}>
          {/* <GradientTexture colors={['aquamarine', 'hotpink']} stops={[0, 1]} /> */}
        </MeshDistortMaterial>
      </mesh>
    </>
  )
}

export default Shaders
