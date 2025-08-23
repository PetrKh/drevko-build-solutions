
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useState, useEffect } from 'react';
import House3D from './House3D';

const Background3D = () => {
  const [isBuilt, setIsBuilt] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [webglSupported, setWebglSupported] = useState(true);

  // Check WebGL support
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
      }
    } catch (e) {
      setWebglSupported(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleFormSubmit = () => {
      setIsBuilt(true);
    };

    window.addEventListener('formSubmitted', handleFormSubmit);
    return () => window.removeEventListener('formSubmitted', handleFormSubmit);
  }, []);

  // Fallback for when WebGL is not supported
  if (!webglSupported) {
    return (
      <div 
        className="fixed inset-0 -z-10 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--primary))" stroke-width="0.5" opacity="0.1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)"/%3E%3C/svg%3E')] opacity-20" />
        
        {/* Simple house icon as fallback */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className={`transition-all duration-1000 ${isBuilt ? 'text-accent' : 'text-primary/30'}`}>
            <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </div>
        </div>
      </div>
    );
  }

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
        onCreated={(state) => {
          console.log('WebGL context created successfully');
        }}
        onError={(error) => {
          console.error('Canvas error:', error);
          setWebglSupported(false);
        }}
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
