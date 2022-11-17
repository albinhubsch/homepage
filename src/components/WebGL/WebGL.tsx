import { FC } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'
import { Scene } from './Scene'
import { Lighting } from './Lighting'
import { PostProcessing } from './PostProcessing'
import { Camera } from './Camera'
import { useControls } from 'leva'

export const WebGL: FC = () => {
  const { orbitControls } = useControls({
    orbitControls: { value: false, label: 'Orbit Controls' },
  })

  return (
    <div className="bg-black h-screen w-screen">
      <Canvas dpr={[1, 2]}>
        <OrbitControls enabled={orbitControls} />
        <Stats />
        <Camera />

        <Scene />

        <Lighting />
        <PostProcessing />
      </Canvas>
    </div>
  )
}
