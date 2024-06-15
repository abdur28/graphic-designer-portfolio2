'use client'

import React from 'react'
import { useLoader, useThree, Vector3 } from '@react-three/fiber'
import {
  Html,
  Loader,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
  Sparkles,
  Text,
  Plane
} from '@react-three/drei'

import { TextureLoader } from 'three'
import Shader from '../canvas/Shader/Shader'

const AboutShader = () => {
  const posY = -0.5

  const text = `
        I'm a highly skilled and passionate 
    computer science enthusiast with a
    strong commitment to problem-solving and 
    creativity. With over 4 years of experience 
    in the industry, I have honed my skills in
    programming, cybersecurity, and artificial
    intelligence. From developing complex 
    algorithms to creating innovative software 
    solutions, my expertise knows no bounds.
    
        My journey in the world of computer
    science began at a young age, fueled by
    my curiosity and dedication to mastering 
    new technologies. I hold a Master's degree 
    in Computer Science from a prestigious 
    university, where I specialized in machine 
    learning and data analysis. As a dedicated 
    professional, I offer a wide range of 
    services to meet the unique needs of my 
    clients. Whether you're looking to build a 
    cutting-edge mobile app, secure your 
    systems against cyber threats, or optimize 
    your data analytics processes, I have the 
    skills and knowledge to deliver top-notch
    solutions.
    
        When I'm not immersed in lines of code, 
    I enjoy hiking in the great outdoors,
    experimenting with new recipes in the 
    kitchen, and volunteering at local tech
    events to inspire the next generation of 
    computer science enthusiasts.
    
        For professional and reliable computer 
    science services that exceed your expectations,
    feel free to reach out to me at 
    emilymarkcatherine@gmail.com. Get in touch 
    with me today to start your journey towards 
    success in the digital world!
  `;

  const { width } = useThree((state) => state.viewport);
  console.log(width);
  const texture = useLoader(TextureLoader, '/img/projects/user-placeholder.png');

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
        pages={width/0.25}
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
              image={'/img/projects/texture.webp'}
              planeArgs={[6, 4, 32, 32]}
              planeRotation={[-Math.PI / 2.3, 0, 0]}
              wireframe={true}
              pointer={false}
              position={[0, -0.2, -1]}
            />

            <Plane
              position={[0, -1.5, -0.09]}
              rotation={[0, 0, 0]}
              args={[0.5, 0.5]}
            >
              <meshBasicMaterial attach="material" map={texture} />
            </Plane> 

            <Text
             position={[0, - width + -1.5 , 0.1]}
             fillOpacity={0.7}
             font='/FogtwoNo5.otf'
             fontSize={width / 42}
             lineHeight={1.3}
             material-toneMapped={false}
             anchorX='center'
             anchorY='middle'
             textAlign='center'
             maxWidth={width / 1.3}
           >
             {text}
           </Text>
          
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
              About Me
            </Text>
          </React.Suspense>
        </Scroll>
      </ScrollControls>
    </>
  )
}

export default AboutShader


