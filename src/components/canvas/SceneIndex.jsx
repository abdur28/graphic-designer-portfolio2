'use client'

import React, { Suspense } from 'react'
import * as THREE from 'three'

import { useFrame, useThree } from '@react-three/fiber'
import {
  Html,
  Loader,
  PerspectiveCamera,
  Sparkles,
  Text,
} from '@react-three/drei'
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
} from '@react-three/postprocessing'

import  Model  from './Model'

const SceneIndex = () => {
  useFrame((state) => {
    state.camera.position.lerp({ x: 0, y: 0, z: 12 }, 0.005)
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 14]}
        fov={55}
        near={0.1}
        far={100}
      />

      <color attach='background' args={['#050505']} />
      <fog attach='fog' args={['#050505', 0, 28]} />
      <pointLight position={[0, 10, 5]} intensity={50} />
      <Suspense
        fallback={
          <Html>
            <Loader />
          </Html>
        }
      >
        <Model position={[0, -6, 0]} rotation={[0, -0.2, 0]} />
        <Title>{`Emily Mark`}</Title>
        <TitleL>{`Emily Mark`}</TitleL>
        <Sparkles count={60} scale={[20, 20, 10]} size={1} speed={2} />
      </Suspense>
      <EffectComposer multisampling={0} disableNormalPass={true}>
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
          opacity={2}
        />
        <Noise opacity={0.025} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
      <Rig />
    </>
  )
}

const Title = ({ children }) => {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      position={[0, 0, -10]}
      lineHeight={1.3}
      font='/FogtwoNo5.otf'
      fontSize={width / 3.5}
      material-toneMapped={false}
      anchorX='center'
      anchorY='middle'
    >
      {children}
      <meshBasicMaterial color='#c4c4c4' />
    </Text>
  )
}

const TitleL = ({ children }) => {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      position={[0, 0, -10]}
      lineHeight={1.3}
      font='/FogtwoNo5.otf'
      fontSize={width / 3.5}
      material-toneMapped={false}
      anchorX='center'
      anchorY='middle'
    >
      {children}
      <meshStandardMaterial roughness={1} metalness={0.5} color='#474747' />
    </Text>
  )
}

const Rig = () => {
  return useFrame((state) => {
    state.camera.position.lerp(
      new THREE.Vector3(-state.mouse.x / 2, state.mouse.y / 2, 10),
      0.05
    )
  })
}

export default SceneIndex

