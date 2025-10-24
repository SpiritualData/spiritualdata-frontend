import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Tooltip from "./Tooltip";


interface PlanetProps {
  index: number;
  distance: number;
  size?: number;
  color?: string;
  name?: string;
}

const Planet: React.FC<PlanetProps> = ({ index, distance, size = 0.18, color = "#ffd54f", name }) => {
  const ref = useRef<THREE.Mesh | null>(null);
  const [hovered, setHovered] = useState(false);
  const localScale = useRef(1);


  useFrame(({ clock }, delta) => {
    const t = clock.getElapsedTime();
    const speed = 0.2 + (index % 3) * 0.05;
    const angle = t * speed + index;
    const x = Math.cos(angle) * distance;
    const z = Math.sin(angle) * distance;
    if (ref.current) {
      ref.current.position.set(x, Math.sin(angle * 0.3) * 0.1, z);
      ref.current.rotation.y += 0.02;
      // smooth scale interpolation for hover
      const targetScale = hovered ? 1.15 : 1;
      localScale.current += (targetScale - localScale.current) * Math.min(delta * 8, 1);
      ref.current.scale.setScalar(localScale.current);
      const mat = ref.current.material as THREE.MeshStandardMaterial;
      if (mat) {
        const target = hovered ? 0.4 : 0.6;
        // @ts-ignore
        mat.roughness = mat.roughness + (target - mat.roughness) * Math.min(delta * 4, 1);
        mat.needsUpdate = true;
      }
    }
  });

  return (
    <group>
      <mesh
        ref={ref}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial color={color} metalness={0.3} roughness={0.6} />
      </mesh>
      {hovered && name && <Tooltip position={[0, size + 0.18, 0]} title={name} visible={true} />}
    </group>
  );
};

export default Planet;
