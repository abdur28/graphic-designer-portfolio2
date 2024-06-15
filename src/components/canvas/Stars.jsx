'use client'

import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, Text } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import Shader from "./Shader/Shader";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(500), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>

      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          black
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = ({wireframe=false, title='', ...props}) => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>

        {wireframe ? (
        <>
          <Shader
          image={'/img/projects/texture.webp'}
          planeArgs={[6, 4, 32, 32]}
          planeRotation={[-Math.PI / 2.3, 0, 0]}
          wireframe={true}
          pointer={false}
          position={[0, -0.2, -1]}
        />
        <Text
         position={[0, 0.7, -3]}
         rotation={[-0.3, 0, 0]}
         lineHeight={1.3}
         fillOpacity={1}
         font='/FogtwoNo5.otf'
         fontSize={0.5}
         material-toneMapped={false}
         color={'#aaaaaa'}
         anchorX='center'
         anchorY='middle'
        >
          {title}
        </Text>     
        </>

        ) : null }

        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
