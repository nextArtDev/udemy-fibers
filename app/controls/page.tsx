'use client'
import { Canvas } from '@react-three/fiber'

import React from 'react'
import Scene from './components/Scene.js'

function page() {
  return (
    <section className="fixed inset-0 top-0 left-0 w-full h-full overflow-hidden bg-black">
      {/* z of position changes the angel */}
      {/* <Canvas className="canvas" camera={{ position: [0,2, 5], fov: 75 }}> */}
      {/* <Canvas className="canvas" camera={{ position: [0, -1.5, 5], fov: 75 }}> */}
      <Canvas className="canvas" camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene />
      </Canvas>
    </section>
  )
}

export default page
