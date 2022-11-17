import { Gradient, LayerMaterial } from 'lamina'
import { useControls } from 'leva'
import { FC } from 'react'

export const Scene: FC = () => {
  const { colorA, colorB } = useControls({
    colorA: { value: '#ff8f00', label: 'Color A' },
    colorB: { value: '#00a2ff', label: 'Color B' },
  })

  return (
    <>
      {/* <mesh>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh> */}

      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[16, 9]} />

        <LayerMaterial lighting="standard" roughness={0.8} metalness={0.5}>
          <Gradient
            colorA={colorA}
            colorB={colorB}
            start={-8}
            end={8}
            axes="x"
          />
        </LayerMaterial>
      </mesh>
    </>
  )
}
