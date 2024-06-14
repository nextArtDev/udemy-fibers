'use client'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect, useState } from 'react'

const Model = (props) => {
  // ray caster
  const [active, setActive] = useState(false)

  const clickHandler = () => {
    setActive(!active)
    console.log(active)
  }

  const model = useGLTF('./model/dog.glb')
  const animations = useAnimations(model.animations, model.scene)

  console.log(model)
  console.log(animations)

  // Animation should be render after the first render, it will bill run just after the first render
  useEffect(() => {
    active
      ? animations.actions.Pleased.play()
      : animations.actions.ClickedOn.play()

    return () => animations.actions.Pleased.stop()
  }, [active])

  return (
    <primitive
      castShadow
      onClick={clickHandler}
      position={[-0.9, 1.3, 0]}
      rotation={[0, 2, 0]}
      {...props}
      object={model.scene}
    />
  )
}
useGLTF.preload('./model/dog.glb')

export default Model
