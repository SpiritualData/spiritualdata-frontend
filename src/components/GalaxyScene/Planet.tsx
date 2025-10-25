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
  active?: boolean;
  paused?: boolean;
  onRequestInfo?: (payload: { index: number; name?: string }) => void;
}

const Planet: React.FC<PlanetProps> = ({ index, distance, size = 0.32, color = "#ffd54f", name, active = true, paused = false, onRequestInfo }) => {
  const ref = useRef<THREE.Mesh | null>(null);
  const [hovered, setHovered] = useState(false);
  const localScale = useRef(1);
  const emerge = useRef(0); // 0..1 progress for emergence


  useFrame(({ clock }, delta) => {
    const t = clock.getElapsedTime();
    const speed = 0.2 + (index % 3) * 0.05;
    const angle = t * speed + index;

    // emergence progress when becoming active
    if (active && !paused) {
      emerge.current += Math.min(delta * 0.9, 0.12);
      if (emerge.current > 1) emerge.current = 1;
    } else if (!active) {
      emerge.current -= Math.min(delta * 0.6, 0.06);
      if (emerge.current < 0) emerge.current = 0;
    }

    // start far away then move to orbit distance as emerge progresses
    const startMultiplier = 3.6; // initial spawn distance multiplier
    const currentDistance = THREE.MathUtils.lerp(distance * startMultiplier, distance, emerge.current);

    const x = Math.cos(angle) * currentDistance;
    const z = Math.sin(angle) * currentDistance;
    if (ref.current) {
      ref.current.position.set(x, Math.sin(angle * 0.3) * 0.1 * Math.max(emerge.current, 0.3), z);
      if (!paused) {
        ref.current.rotation.y += 0.02 + 0.01 * emerge.current;
      }
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
        onClick={(e) => {
          e.stopPropagation();
          // notify parent to show info and pause rotation
          if (onRequestInfo) onRequestInfo({ index, name });
        }}
      >
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial color={color} metalness={0.3} roughness={0.6} />
      </mesh>
      {hovered && name && <Tooltip position={[0, size + 0.18, 0]} title={name} visible={true} />}
    </group>
  );
};

export default Planet;
