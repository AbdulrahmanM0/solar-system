import React, { useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


function ISS() {
    const memoISSGLTF = useMemo(()=>{
       return useGLTF('/ISS_Model/ISS_stationary.gltf')
    })
    const issRef = useRef()

    useFrame(({clock})=>{
        issRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.1) * 2
        issRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.1) * 2
    })
  return (
    <mesh ref={issRef} position={[2,0,0]}>
        <primitive object={memoISSGLTF.scene} scale={0.001} />
    </mesh>
  )
}

export default ISS