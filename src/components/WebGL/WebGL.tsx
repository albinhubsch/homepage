import { FC, useMemo, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'
import { Scene } from './Scene'
import { Lighting } from './Lighting'
import { PostProcessing } from './PostProcessing'
import { Camera } from './Camera'
import { useControls } from 'leva'
import { useMove } from '@use-gesture/react'
import { MathUtils, PerspectiveCamera, Vector3 } from 'three'

export const WebGL: FC = () => {
  const cameraRef = useRef<PerspectiveCamera>(null)
  const orbitControlRef = useRef(null)
  const cameraPosition = useMemo(() => new Vector3(0, 5, 16), [])
  const tiltVector = useMemo(() => new Vector3(0, 0, 0), [])

  const { orbitControls, mouseControls } = useControls({
    orbitControls: { value: false, label: 'Orbit Controls' },
    mouseControls: { value: false, label: 'Mouse Controls' },
  })

  const bind = useMove(({ xy: [x, y] }) => {
    if (cameraRef.current && mouseControls) {
      const xtilt = MathUtils.mapLinear(
        x,
        1,
        window.innerWidth,
        -Math.PI / 6,
        Math.PI / 6,
      )

      const ytilt = MathUtils.mapLinear(
        y,
        1,
        window.innerHeight,
        Math.PI / 10,
        -Math.PI / 10,
      )

      tiltVector.set(xtilt, ytilt, 0)
    }
  })

  return (
    <div {...bind()} className="bg-black h-screen w-screen">
      <Canvas dpr={[1, 2]}>
        <OrbitControls ref={orbitControlRef} enabled={orbitControls} />
        <gridHelper args={[15, 15]} />
        <Stats />

        <Camera useRef={cameraRef} position={cameraPosition} />

        <Scene tiltVector={tiltVector} />

        <Lighting />
        <PostProcessing />
      </Canvas>
    </div>
  )
}
