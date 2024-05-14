import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import Moon from './Moon'
import ISS from './ISS'

function Earth() {
    const earthRef = useRef()
    const [earthTexture , earthNoramlMap , earthSpecularMap , earthDisplacementMap] = useTexture(['/assets/earth.jpg','/assets/earth_normal.jpg', '/assets/earth_specular.jpg'])
    useFrame(()=>{
        earthRef.current.rotation.y += 0.002
    })
    return (
        <group>
    <mesh receiveShadow ref={earthRef}>
        {/* [radius , x axis , y axis] */}
        <sphereGeometry args={[1,128,128]} />
        <meshPhongMaterial 
        map={earthTexture} 
        normalMap={earthNoramlMap}  
        specularMap={earthSpecularMap} 
        shininess={200}
        displacementMap={earthDisplacementMap}
        displacementScale={0.1}
        />
    </mesh>
    <ISS />
    <Moon />
    </group>
  )
}

export default Earth