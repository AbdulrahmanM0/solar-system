import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

function Earth() {
    const earthRef = useRef()
    const [earthTexture , earthNoramlMap , earthSpecularMap , earthDisplacementMap] = useTexture(['/assets/earth.jpg','/assets/earth_normal.jpg', '/assets/earth_specular.jpg'])
    useFrame(()=>{
        earthRef.current.rotation.y += 0.002
    })
    return (
    <mesh ref={earthRef}>
        {/* [radius , x axis , y axis] */}
        <sphereGeometry args={[1,32,32]} />
        <meshPhongMaterial 

        map={earthTexture} 
        normalMap={earthNoramlMap}  
        specularMap={earthSpecularMap} 
        displacementMap={earthDisplacementMap}
        displacementScale={0.1}
        />
    </mesh>
  )
}

export default Earth