
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useState, useEffect } from 'react';
import House3D from './House3D';

const Background3D = () => {
  const [isBuilt, setIsBuilt] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Слушаем событие отправки формы
    const handleFormSubmit = () => {
      setIsBuilt(true);
    };

    window.addEventListener('formSubmitted', handleFormSubmit);
    return () => window.removeEventListener('formSubmitted', handleFormSubmit);
  }, []);

  return (
    <div 
      className="fixed inset-0 -z-10"
      style={{
        transform: `translateY(${scrollY * 0.5}px)`,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        
        <House3D isBuilt={isBuilt} />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
        
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default Background3D;
