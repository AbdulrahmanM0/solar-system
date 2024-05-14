import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

function Moon() {
    const moonRef = useRef()
    const [moon] = useTexture(['/assets/moon.jpg'])

    useFrame(({clock})=>{
      moonRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.2) * 3
      moonRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.2) * 3
      moonRef.current.rotation.y += .005
    })
  return (
    <mesh castShadow ref={moonRef} position={[4,0,0]} scale={0.3}>
        <sphereGeometry agrs={[0.5,32,32]}/>
        <meshPhongMaterial 
        map={moon}
        />
    </mesh>
  )
}

export default Moon