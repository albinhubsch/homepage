import { FC, RefObject } from 'react'
import { CameraHelper, Vector3 } from 'three'
import { PerspectiveCamera, useHelper } from '@react-three/drei'

// state.camera.position.lerp(dummy.set(zoom ? 25 : 10, zoom ? 1 : 5, zoom ? 0 : 10), step)

interface CameraProps {
  useRef: RefObject<any>
  position: Vector3
}

export const Camera: FC<CameraProps> = ({ useRef, position }) => {
  // Set helper
  useHelper(useRef, CameraHelper)

  return (
    <>
      <PerspectiveCamera
        ref={useRef}
        fov={60}
        position={[0, 0, 16]}
        makeDefault
      />
    </>
  )
}
