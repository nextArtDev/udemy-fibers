import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'

const Model = () => {
  const model = useGLTF('./model/dog.glb')
  const animations = useAnimations(model.animations, model.scene)

  console.log(model)
  console.log(animations)

  // Animation should be render after the first render, it will bill run just after the first render
  useEffect(() => {
    animations.actions.ClickedOn.play()
  }, [])

  return (
    <primitive
      position={[-0.9, 1.3, 0]}
      rotation={[0, 2, 0]}
      object={model.scene}
    />
  )
}
useGLTF.preload('./model/dog.glb')

export default Model
