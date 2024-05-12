import { useHelper } from '@react-three/drei'
import React from 'react'
import AnimatedStars from './AnimatedStars'
import Earth from './Earth'
import { useRef } from 'react'
import * as THREE from 'three'

function MainContainer() {
    const directionalLightRef = useRef()
    useHelper(directionalLightRef , THREE.DirectionalLightHelper , 1 , 'hotpink' )

  return (
    <>
        <color attach='background' args={['black']} />
        <directionalLight ref={directionalLightRef} position={[0,0,10]} />
        <ambientLight />
        <AnimatedStars />
        <Earth />
    </>
  )
}

export default MainContainer