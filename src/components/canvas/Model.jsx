'use client'

import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import Lights from './Lights'

// "HEAD OF A BEARDED MAN - BRITISH MUSEUM 2020" (https://skfb.ly/6QZCD) by Arqueomodel3D is licensed under Creative Commons Attribution-NonCommercial (http://creativecommons.org/licenses/by-nc/4.0/).

export default function Model(props) {
  const group = useRef(null)

  const { nodes } = useGLTF('/scene.gltf')

  useFrame(({ pointer }) => {
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointer.x * (Math.PI / 16),
      0.005
    )
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      pointer.y * -(Math.PI / 16),
      0.005
    )
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[-0.5, 5.5, -8]}
        rotation={[-1.51, 0, Math.PI * 1.8]}
        scale={0.7}
      >
        <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry}>
          <meshStandardMaterial roughness={0.5} metalness={0.5} color='#474747' />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} >
          <meshStandardMaterial roughness={0.5} metalness={0.5} color='#474747' />
        </mesh>
      </group>
      <Lights />
    </group>
  )
}

useGLTF.preload('/scene.gltf')


