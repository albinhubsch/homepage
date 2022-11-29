import { FC, useRef } from 'react'
import { Depth, LayerMaterial } from 'lamina'
import { useControls } from 'leva'
import { MathUtils, Mesh, Vector3 } from 'three'
import { useFrame } from '@react-three/fiber'

interface PlaneBackgroundProps {
  tiltVector: Vector3
}

export const PlaneBackground: FC<PlaneBackgroundProps> = ({ tiltVector }) => {
  const plane = useRef<Mesh>(null)
  const xAngle = useRef(0)
  const yAngle = useRef(0)

  const { colorA, colorB, roughness, metalness } = useControls(
    'Background Plane',
    {
      colorA: { value: '#17003b', label: 'Color A' },
      colorB: { value: '#be0d00', label: 'Color B' },
      roughness: {
        value: 0.4,
        min: 0,
        max: 1,
        step: 0.05,
        label: 'Roughness',
      },
      metalness: {
        value: 0.2,
        min: 0,
        max: 1,
        step: 0.05,
        label: 'Metalness',
      },
    },
  )

  useFrame(() => {
    if (plane.current) {
      xAngle.current = MathUtils.lerp(xAngle.current, tiltVector.x, 0.01)
      yAngle.current = MathUtils.lerp(yAngle.current, tiltVector.y, 0.01)
      plane.current.rotation.y = -xAngle.current
      plane.current.rotation.x = yAngle.current
    }
  })

  return (
    <mesh ref={plane} position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <planeGeometry args={[16, 16]} />

      <LayerMaterial
        lighting="standard"
        roughness={roughness}
        metalness={metalness}
      >
        <Depth
          colorA={colorA}
          colorB={colorB}
          alpha={1}
          near={5}
          far={40}
          origin={[-6, -4, 0]}
        />
      </LayerMaterial>
    </mesh>
  )
}
