import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

const AnimatedGlobe = () => {
  const meshRef = useRef<Mesh>(null);

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
      <pointLight position={[10, -10, -5]} intensity={0.5} color="#8b5cf6" />
      
      <Sphere ref={meshRef} args={[2.5, 100, 100]} scale={1}>
        <MeshDistortMaterial
          color="#1e40af"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
};

const GlobeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <AnimatedGlobe />
      </Canvas>
    </div>
  );
};

export default GlobeBackground;
