'use client'
import Scene from '@/components/Scene'
import { Canvas } from '@react-three/fiber'

export default function Home() {
  return (
    <section className="relative w-full h-screen min-h-screen">
      <Canvas
        className="canvas"
        camera={{
          fov: 75,
          near: 0.1,
          far: 100,
          position: [1, 1, 5],
        }}
      >
        <Scene />
      </Canvas>
    </section>
  )
}
