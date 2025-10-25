import React, { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Tooltip from "./Tooltip";

interface GalaxyProps {
  id: string;
  name: string;
  position: [number, number, number];
  color?: string;
  onClick?: (id: string, pos: [number, number, number]) => void;
  show?: boolean;
  isSelected?: boolean;
  isOther?: boolean;
  targetScale?: number;
  offset?: [number, number, number];
}

const Galaxy: React.FC<GalaxyProps> = ({
  id,
  name,
  position,
  color = "#ffffff",
  onClick,
  show = true,
  isSelected = false,
  isOther = false,
  targetScale = 1,
  offset = [0, 0, 0],
}) => {
  const groupRef = useRef<THREE.Group | null>(null);
  const pointsRef = useRef<THREE.Points | null>(null);
  const [hovered, setHovered] = useState(false);

  // Base target scale depending on selection state
  const desiredScale = isSelected ? targetScale : isOther ? targetScale * 0.6 : targetScale;

  // Precompute particle positions for the halo
  const points = useMemo(() => {
    const count = 300;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // spread in a flattened disc with some depth
      const r = Math.random() * 1.6;
      const a = Math.random() * Math.PI * 2;
      const x = Math.cos(a) * r;
      const y = (Math.random() - 0.5) * 0.2;
      const z = Math.sin(a) * r;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, []);

  // Smoothly animate position, rotation and scale
  const targetPos = useMemo(() => new THREE.Vector3(position[0] + offset[0], position[1] + offset[1], position[2] + offset[2]), [position, offset]);
  const tmpVec = useRef(new THREE.Vector3());
  useFrame((state, delta) => {
    const g = groupRef.current;
    if (!g) return;

    // Lerp position toward target (keeps neighbors slightly visible by not centering fully)
    tmpVec.current.lerp(targetPos, 0.08);
    g.position.lerp(tmpVec.current, 0.12);

    // Gentle rotation
    g.rotation.y += 0.01 * (isSelected ? 1.5 : 1);

    // Scale lerp
    const s = THREE.MathUtils.lerp(g.scale.x, desiredScale, 0.06);
    g.scale.setScalar(s);
  });

  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    setHovered(true);
  };

  const handlePointerOut = (e: any) => {
    e.stopPropagation();
    setHovered(false);
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    if (onClick) onClick(id, position);
  };

  if (!show) return null;

  return (
    <group ref={groupRef} position={position as any}>
      {/* Points halo (no pointer handlers so halo doesn't block other galaxies) */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[points, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.012} sizeAttenuation color={color} depthWrite={false} transparent opacity={0.9} />
      </points>

      {/* Core sphere */}
      <mesh onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} onClick={handleClick}>
        <sphereGeometry args={[0.36, 24, 24]} />
        <meshStandardMaterial emissive={new THREE.Color(color)} emissiveIntensity={0.6} color="#000000" metalness={0.2} roughness={0.6} />
      </mesh>

      {/* Optional subtle glow - cheap approach */}
      <mesh scale={[1.6, 0.9, 1.6]} position={[0, 0, 0]}>
        <ringGeometry args={[0.35, 0.8, 64]} />
        <meshBasicMaterial color={color} transparent opacity={0.06} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>

      {/* Tooltip above core */}
      {hovered && <Tooltip position={[0, 0.55, 0]} title={name} visible={hovered} />}
    </group>
  );
};

export default Galaxy;
