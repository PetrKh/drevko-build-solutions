
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cone } from '@react-three/drei';
import * as THREE from 'three';

interface House3DProps {
  isBuilt: boolean;
}

const House3D = ({ isBuilt }: House3DProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Легкое покачивание
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.02;
    }
  });

  if (isBuilt) {
    // Готовый дом
    return (
      <group ref={groupRef} position={[0, -1, 0]}>
        {/* Основание дома */}
        <Box args={[3, 2, 3]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#8B4513" transparent opacity={0.7} />
        </Box>
        
        {/* Крыша */}
        <Cone args={[2.5, 1.5, 4]} position={[0, 1.75, 0]} rotation={[0, Math.PI / 4, 0]}>
          <meshStandardMaterial color="#654321" transparent opacity={0.7} />
        </Cone>
        
        {/* Дверь */}
        <Box args={[0.8, 1.5, 0.05]} position={[0, -0.25, 1.53]}>
          <meshStandardMaterial color="#4A4A4A" transparent opacity={0.8} />
        </Box>
        
        {/* Окна */}
        <Box args={[0.6, 0.6, 0.05]} position={[-1, 0.3, 1.53]}>
          <meshStandardMaterial color="#87CEEB" transparent opacity={0.6} />
        </Box>
        <Box args={[0.6, 0.6, 0.05]} position={[1, 0.3, 1.53]}>
          <meshStandardMaterial color="#87CEEB" transparent opacity={0.6} />
        </Box>
        
        {/* Боковые окна */}
        <Box args={[0.05, 0.6, 0.6]} position={[1.53, 0.3, 0]}>
          <meshStandardMaterial color="#87CEEB" transparent opacity={0.6} />
        </Box>
        <Box args={[0.05, 0.6, 0.6]} position={[-1.53, 0.3, 0]}>
          <meshStandardMaterial color="#87CEEB" transparent opacity={0.6} />
        </Box>
      </group>
    );
  }

  // Проект дома (каркас)
  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Каркас основания */}
      <group>
        {/* Нижние балки */}
        <Box args={[3, 0.1, 0.1]} position={[0, -1, -1.5]}>
          <meshStandardMaterial color="#D2B48C" transparent opacity={0.6} />
        </Box>
        <Box args={[3, 0.1, 0.1]} position={[0, -1, 1.5]}>
          <meshStandardMaterial color="#D2B48C" transparent opacity={0.6} />
        </Box>
        <Box args={[0.1, 0.1, 3]} position={[-1.5, -1, 0]}>
          <meshStandardMaterial color="#D2B48C" transparent opacity={0.6} />
        </Box>
        <Box args={[0.1, 0.1, 3]} position={[1.5, -1, 0]}>
          <meshStandardMaterial color="#D2B48C" transparent opacity={0.6} />
        </Box>
        
        {/* Вертикальные стойки */}
        <Box args={[0.1, 2, 0.1]} position={[-1.5, 0, -1.5]}>
          <meshStandardMaterial color="#D2B48C" transparent opacity={0.6} />
        </Box>
        <Box args={[0.1, 2, 0.1]} position={[1.5, 0, -1.5]}>
          <meshStandardMaterial color="#D2B48C" transparent opacity={0.6} />
        </Box>
        <Box args={[0.1, 2, 0.1]} position={[-1.5, 0, 1.5]}>
          <meshStandardMaterial color="#D2B48C" transparent opacity={0.6} />
        </Box>
        <Box args={[0.1, 2, 0.1]} position={[1.5, 0, 1.5]}>
          <meshStandardMaterial color="#D2B48C" transparent opacity={0.6} />
        </Box>
        
        {/* Верхние балки */}
        <Box args={[3, 0.1, 0.1]} position={[0, 1, -1.5]}>
          <meshStandardMaterial color="#D2B48C" transparent opacity={0.6} />
        </Box>
        <Box args={[3, 0.1, 0.1]} position={[0, 1, 1.5]}>
          <meshStandardMaterial color="#D2B48C" transparent opacity={0.6} />
        </Box>
        <Box args={[0.1, 0.1, 3]} position={[-1.5, 1, 0]}>
          <meshStandardMaterial color="#D2B48C" transparent opacity={0.6} />
        </Box>
        <Box args={[0.1, 0.1, 3]} position={[1.5, 1, 0]}>
          <meshStandardMaterial color="#D2B48C" transparent opacity={0.6} />
        </Box>
        
        {/* Стропила крыши */}
        <Box args={[0.1, 2, 0.1]} position={[0, 1.5, -1.5]} rotation={[0, 0, Math.PI / 6]}>
          <meshStandardMaterial color="#D2B48C" transparent opacity={0.6} />
        </Box>
        <Box args={[0.1, 2, 0.1]} position={[0, 1.5, 1.5]} rotation={[0, 0, -Math.PI / 6]}>
          <meshStandardMaterial color="#D2B48C" transparent opacity={0.6} />
        </Box>
        <Box args={[0.1, 2, 0.1]} position={[0, 1.5, 0]} rotation={[Math.PI / 6, 0, 0]}>
          <meshStandardMaterial color="#D2B48C" transparent opacity={0.6} />
        </Box>
        <Box args={[0.1, 2, 0.1]} position={[0, 1.5, 0]} rotation={[-Math.PI / 6, 0, 0]}>
          <meshStandardMaterial color="#D2B48C" transparent opacity={0.6} />
        </Box>
      </group>
    </group>
  );
};

export default House3D;
