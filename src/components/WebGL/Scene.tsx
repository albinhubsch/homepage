import { Depth, LayerMaterial } from 'lamina'
import { useControls } from 'leva'
import { FC } from 'react'

export const Scene: FC = () => {
  const { colorA, colorB } = useControls({
    colorA: { value: '#ff8f00', label: 'Color A' },
    colorB: { value: '#00a2ff', label: 'Color B' },
  })

  return (
    <>
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[16, 9]} />

        <LayerMaterial lighting="standard" roughness={0.8} metalness={0.5}>
          <Depth
            colorA={colorA}
            colorB={colorB}
            alpha={1}
            near={4}
            far={16}
            origin={[5, 0, 0]}
          />
        </LayerMaterial>
      </mesh>
    </>
  )
}
