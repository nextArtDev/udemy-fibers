import { ScrollControls, Scroll, useGLTF } from '@react-three/drei'
import Images from './Images'

const ScrollControl = () => {
  const model = useGLTF('./model/model.gltf')

  return (
    <>
      <ambientLight intensity={4} />
      <directionalLight />
      {/* how much we scroll: pages -> total number of pages:4 , default:1 */}
      {/* <ScrollControls pages={3} damping={0.4} horizontal infinite> */}
      <ScrollControls pages={3} damping={0.4} infinite>
        {/* if we want an element to not effected by scrolling, we should place eit outside the Scroll  */}
        {/* Adding content by using Scroll  */}
        <Scroll>
          <Images />
          <primitive object={model.scene} position={[1.5, -1, 0]} scale={0.5} />
        </Scroll>
        {/* we need to change "html" element to true, to use html inside Scroll  */}
        <Scroll html>
          <h1
            className="absolute top-[60vh] left-[0.5em] text-red-400 text-7xl font-bold"
            style={{ position: 'absolute', top: '60vh', left: '0.5em' }}
          >
            to
          </h1>
          <h1
            className="text-7xl font-bold"
            style={{ position: 'absolute', top: '120vh', left: '60vw' }}
          >
            be
          </h1>
          <h1
            style={{
              position: 'absolute',
              top: '198.5vh',
              left: '0.5vw',
              fontSize: '40vw',
            }}
          >
            home
          </h1>
        </Scroll>
      </ScrollControls>
    </>
  )
}

export default ScrollControl
