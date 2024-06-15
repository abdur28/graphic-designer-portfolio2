'use client'

import React, { useEffect, useState } from 'react'
import { useLoader, useThree, Vector3 } from '@react-three/fiber'
import {
  Html,
  Loader,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
  Sparkles,
  Text,
  Plane,
} from '@react-three/drei'

import Shader from './Shader/Shader'
import { TextureLoader } from 'three'
import { space } from 'postcss/lib/list'

const ProjectsShader = () => {
  const posY = -0.5
  const [spacing, setSpacing] = useState(0)
  const [pages, setPages] = useState(5.5)
  const [descWidth, setDescWidth] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const [shiftPostion, setShiftPosition] = useState(0.7)

  const images = [
    {
      title: 'Uno',
      position: [-1 * shiftPostion, -1  + posY , -0.09],
      src: '/img/projects/iphone.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum fermentum ante nec venenatis. Cras nec nisl hendrerit, ullamcorper tellus eu, finibus mauris. Aenean iaculis dolor eget nunc vehicula auctor. Sed risus ante, egestas eget consequat non, ullamcorper quis odio. Nam a sem faucibus, cursus orci at, laoreet quam. Donec.',
      url: 'https://iphone-config.vercel.app/',
    },

    {
      title: 'Dos',
      position: [shiftPostion, -2 + (spacing * 1) + posY , -0.09],
      src: '/img/projects/laptop.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum fermentum ante nec venenatis. Cras nec nisl hendrerit, ullamcorper tellus eu, finibus mauris. Aenean iaculis dolor eget nunc vehicula auctor. Sed risus ante, egestas eget consequat non, ullamcorper quis odio. Nam a sem faucibus, cursus orci at, laoreet quam. Donec.',
      url: 'https://umamin.link/',
    },

    {
      title: 'Tres',
      position: [-1 * shiftPostion, -3 + (spacing * 2) + posY , -0.09],
      src: '/img/projects/hello.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum fermentum ante nec venenatis. Cras nec nisl hendrerit, ullamcorper tellus eu, finibus mauris. Aenean iaculis dolor eget nunc vehicula auctor. Sed risus ante, egestas eget consequat non, ullamcorper quis odio. Nam a sem faucibus, cursus orci at, laoreet quam. Donec.',desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum fermentum ante nec venenatis. Cras nec nisl hendrerit, ullamcorper tellus eu, finibus mauris. Aenean iaculis dolor eget nunc vehicula auctor. Sed risus ante, egestas eget consequat non, ullamcorper quis odio. Nam a sem faucibus, cursus orci at, laoreet quam. Donec.',
      url: 'https://chatti.vercel.app',
    },

    {
      title: 'Cuatro',
      position: [shiftPostion, -4  + (spacing * 3) + posY , -0.09],
      src: '/img/projects/head.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum fermentum ante nec venenatis. Cras nec nisl hendrerit, ullamcorper tellus eu, finibus mauris. Aenean iaculis dolor eget nunc vehicula auctor. Sed risus ante, egestas eget consequat non, ullamcorper quis odio. Nam a sem faucibus, cursus orci at, laoreet quam. Donec.',
      url: 'https://github.com/hyamero',
    },
  ]

  const { width } = useThree(state => state.viewport)

  const handleClick = (url) => {
    window.open(url, '_blank')
  }

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
      setShiftPosition(0)
      setPages(7.5)
      setSpacing(-0.5)
      setDescWidth(0.5)
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
      setShiftPosition(0)
      setPages(7.5)
      setSpacing(-0.5)
      setDescWidth(0.5)
    } else {
      setIsMobile(false)
      setShiftPosition(0.7)
      setPages(5.5)
      setSpacing(0)
      setDescWidth(1)
    }
  }, [width])

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 1]}
        fov={55}
        near={0.1}
        far={100}
      />

      <ScrollControls
        pages={pages}
        distance={1}
        damping={1}
        horizontal={false}
        infinite={false}
      >
        <fog attach='fog' args={[0x050505, 0, 6]} />
        <Scroll>
          <Sparkles
            count={35}
            position={[-0.5, -2, -3.5]}
            scale={[6, 10, 10]}
            size={1}
            speed={2}
          />
          <React.Suspense
            fallback={
              <Html>
                <Loader />
              </Html>
            }
          >
            <Shader
              image='/img/projects/texture.webp'
              planeArgs={[6, 4, 32, 32]}
              planeRotation={[-Math.PI / 2.3, 0, 0]}
              wireframe={true}
              pointer={false}
              position={[0, -0.2, -1]}
            />

            {images.map((image, i) => {
              const texture = useLoader(TextureLoader, '/img/projects/user-placeholder.png');
              const { position, src, title, url, desc } = image

              return (
                <React.Fragment key={url}>
                  {/* <Shader
                    image={src}
                    position={position}
                    planeArgs={[0.4, 0.6, 32, 32]}
                    planeRotation={[0, 0, 0]}
                    wireframe={false}
                    pointer={true}
                    url={url}
                  /> */}

                  <Plane
                    position={position}
                    rotation={[0, 0, 0]}
                    args={[0.5, 0.5]}
                  >
                    <meshBasicMaterial attach="material" map={texture} />
                  </Plane> 

                  <Text
                    position={[-0.4 *position[0], position[1] + spacing, 0.1]}
                    fillOpacity={0.7}
                    font='/FogtwoNo5.otf'
                    fontSize={0.03}
                    material-toneMapped={false}
                    anchorX='center'
                    anchorY='middle'
                    maxWidth={descWidth}
                  >
                    {desc}
                  </Text>

                  {/* link to project */}

                  <Text
                    position={[-0.4 * position[0], position[1] + spacing - 0.25, 0.1]}
                    fillOpacity={1}
                    font='/FogtwoNo5.otf'
                    fontSize={0.045}
                    material-toneMapped={false}
                    anchorX='center'
                    anchorY='middle'
                    onClick={() => handleClick(url)}
                    onPointerEnter={(e) => {
                      document.body.style.cursor = 'pointer';
                    }}
                    onPointerLeave={(e) => {
                      document.body.style.cursor = 'auto';
                    }}
                  >
                    Link
                  </Text>
                  {/* <Text
                    position={[-position[0], position[1], 0.4]}
                    strokeWidth={'0.1%'}
                    strokeOpacity={0.4}
                    strokeColor='#ffffff'
                    fillOpacity={0}
                    font='/FogtwoNo5.otf'
                    fontSize={width / 8}
                    material-toneMapped={false}
                    anchorX={`${position[0] === 0.1 ? 'right' : 'left'}`}
                    anchorY='middle'
                  >
                    {i + 1}
                  </Text> */}
                </React.Fragment>
              )
            })}
            <Text
              position={[0, 0.7, -3]}
              rotation={[-0.3, 0, 0]}
              lineHeight={1.3}
              fillOpacity={1}
              font='/FogtwoNo5.otf'
              fontSize={width / 2}
              material-toneMapped={false}
              anchorX='center'
              anchorY='middle'
            >
              Portfolio
            </Text>
          </React.Suspense>
        </Scroll>
      </ScrollControls>
    </>
  )
}

export default ProjectsShader

