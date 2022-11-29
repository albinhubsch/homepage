import { FC } from 'react'
import { Vector3 } from 'three'
import { PlaneBackground } from './PlaneBackground'

interface SceneProps {
  tiltVector: Vector3
}

export const Scene: FC<SceneProps> = ({ tiltVector }) => {
  return (
    <>
      <PlaneBackground tiltVector={tiltVector} />
    </>
  )
}
