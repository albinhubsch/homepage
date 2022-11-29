import { useHelper } from '@react-three/drei'
import { useControls } from 'leva'
import { FC, useRef } from 'react'
import { SpotLightHelper } from 'three'

export const Lighting: FC = () => {
  const spotlight = useRef(null)

  const { spotlightColor, spotlightIntensity } = useControls('Spotlight', {
    spotlightColor: { value: '#e44935', label: 'Spotlight Color' },
    spotlightIntensity: {
      value: 10,
      min: 0,
      max: 100,
      step: 1,
      label: 'Spotlight Intensity',
    },
  })

  useHelper(spotlight, SpotLightHelper)

  return (
    <>
      <ambientLight intensity={1} />
      {/* <pointLight position={[0, 0, 5]} intensity={0.2} /> */}

      <spotLight
        intensity={spotlightIntensity}
        color={spotlightColor}
        ref={spotlight}
        position={[-3, -6, 4]}
        angle={0.4}
        penumbra={0.2}
        distance={12}
        decay={1.8}
      />
    </>
  )
}
