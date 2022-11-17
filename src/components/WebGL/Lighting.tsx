import { useHelper } from '@react-three/drei'
import { FC, useRef } from 'react'
import { SpotLightHelper } from 'three'

export const Lighting: FC = () => {
  const spotlight = useRef(null)

  useHelper(spotlight, SpotLightHelper)

  return (
    <>
      <pointLight position={[0, 5, 5]} intensity={0.5} />

      <spotLight
        intensity={0.5}
        ref={spotlight}
        position={[2, 10, 10]}
        angle={0.15}
        penumbra={0.1}
      />
    </>
  )
}
