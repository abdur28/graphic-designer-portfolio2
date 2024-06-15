import { useFrame } from '@react-three/fiber';
import React, { forwardRef, useRef } from 'react';
import * as THREE from 'three';

const Lights = forwardRef((props, ref) => {
  const groupLRef = useRef();
  const groupRRef = useRef();
  const frontRef = useRef();

  useFrame(({ pointer }) => {
    if (groupLRef.current && groupRRef.current && frontRef.current) {
      groupLRef.current.rotation.y = THREE.MathUtils.lerp(
        groupLRef.current.rotation.y,
        -pointer.x * (Math.PI / 2),
        0.1
      );
      groupRRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRRef.current.rotation.y,
        pointer.x * (Math.PI / 2),
        0.1
      );
      frontRef.current.position.x = THREE.MathUtils.lerp(
        frontRef.current.position.x,
        -0.6 + pointer.x * -7,
        0.07
      );
      frontRef.current.position.y = THREE.MathUtils.lerp(
        frontRef.current.position.y,
        6 + pointer.y * -4,
        0.07
      );
    }
  });

  return (
    <group ref={ref}>
      <group ref={groupLRef}>
        <pointLight position={[0, 7, -15]} distance={15} intensity={500} />
      </group>
      <group ref={groupRRef}>
        <pointLight position={[0, 7, -18]} distance={15} intensity={500} />
      </group>
      <spotLight
        castShadow
        ref={frontRef}
        penumbra={0.75}
        angle={Math.PI / 6}
        position={[0, 0, 2]}
        distance={14}
        intensity={500}
        shadow-mapSize={[2048, 2048]}
      />
    </group>
  );
});

export default Lights;
