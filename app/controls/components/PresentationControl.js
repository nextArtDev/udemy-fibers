import { PresentationControls } from '@react-three/drei'

const PresentationControl = () => {
  return (
    <PresentationControls
      // we can change the position by grabbing outside too
      global
      // vertical rotation
      polar={[-Math.PI / 3, Math.PI / 3]}
      // horizontal rotation
      azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      // changing the spring configuration
      config={{ mass: 2, tension: 500 }}
      snap={{ mass: 4, tension: 1500 }}
    >
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="#B900F7" />
      </mesh>
    </PresentationControls>
  )
}

export default PresentationControl
