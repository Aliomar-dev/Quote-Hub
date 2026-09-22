import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function RotatingCube({ color }) {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color={color}
        metalness={0.7}
        roughness={0.3}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

const ServiceIcon3D = ({ color = '#ff6b35' }) => {
  return (
    <div className="w-24 h-24">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <RotatingCube color={color} />
      </Canvas>
    </div>
  );
};

export default ServiceIcon3D;
