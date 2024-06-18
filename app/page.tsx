'use client'
import Scene from '@/components/Scene'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import Environments from '../components/Environments'
import Cameras from '@/components/Cameras'
export default function Home() {
  return (
    <section className="relative w-full h-screen min-h-screen">
      <Canvas
        shadows
        // orthographic: size is not proportional to distance of camera
        // orthographic
        className="canvas"
        camera={{
          fov: 75,
          near: 0.1,
          far: 100,
          position: [1, 1, 5],
          //for orthographic camera we need zoom
          // zoom: 120,
        }}
        gl={{
          // antialias is for soft edges and by default is true
          // antialias: false,
          // alpha is for background transparency
          alpha: true,
        }}
        // Executed once the canvas has been created, it will be called once
        // state is the useFrame state, but just called once
        // setClearColor(color, a:opacity)
        onCreated={(state) => state.gl.setClearColor('black', 1)}
      >
        {/* <Cameras /> */}
        <Scene />
        {/* <Environments /> */}
        {/* <Perf /> */}
        {/*  reed:x, green:y , blue:z */}
        {/* <axesHelper args={[2]} /> */}

        {/* first two args: how much the grids can be, third: color of two center lines , forth: color of lines */}
        {/* <gridHelper args={[40, 40, '#ff0000', 'green']} /> */}
      </Canvas>
    </section>
  )
}
