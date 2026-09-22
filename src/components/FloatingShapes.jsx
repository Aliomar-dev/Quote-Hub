import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedShape({ geometry, position, color, scale = 1, speed = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003 * speed;
      meshRef.current.rotation.y += 0.004 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 * speed) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {geometry === 'sphere' && <sphereGeometry args={[1, 32, 32]} />}
      {geometry === 'box' && <boxGeometry args={[1, 1, 1]} />}
      {geometry === 'torus' && <torusGeometry args={[1, 0.4, 16, 100]} />}
      <meshStandardMaterial
        color={color}
        metalness={0.8}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

const FloatingShapes = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#ff6b35" intensity={0.5} />

        <AnimatedShape geometry="sphere" position={[-2, 0, 0]} color="#ff6b35" scale={0.8} speed={1} />
        <AnimatedShape geometry="box" position={[2, 1, -1]} color="#ffd23f" scale={0.6} speed={0.8} />
        <AnimatedShape geometry="torus" position={[0, -1, 1]} color="#f77737" scale={0.5} speed={1.2} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default FloatingShapes;
