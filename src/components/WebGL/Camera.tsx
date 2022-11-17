import { PerspectiveCamera, useHelper } from '@react-three/drei'
import { FC, useRef } from 'react'
import { CameraHelper } from 'three'

export const Camera: FC = () => {
  const camera = useRef(null)

  useHelper(camera, CameraHelper)

  return (
    <>
      <PerspectiveCamera
        ref={camera}
        fov={60}
        position={[0, 0, 16]}
        makeDefault
      />
    </>
  )
}
