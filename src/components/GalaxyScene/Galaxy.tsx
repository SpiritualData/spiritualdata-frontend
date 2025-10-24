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
}

const Galaxy: React.FC<GalaxyProps> = ({ id, name, position, color = "#ffffff", onClick, show = true }) => {
  const groupRef = useRef<THREE.Group | null>(null);
  const pointsRef = useRef<THREE.Points | null>(null);
  const coreRef = useRef<THREE.Mesh | null>(null);
  const [hovered, setHovered] = useState(false);
  const scale = useRef(0.7);
  const opacity = useRef(0);

  // Particle field for halo
  const particles = useMemo(() => {
    const count = 300;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.2 + Math.random() * 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      arr[i * 3 + 0] = Math.cos(theta) * Math.cos(phi) * r;
      arr[i * 3 + 1] = Math.sin(phi) * r * 0.6;
      arr[i * 3 + 2] = Math.sin(theta) * Math.cos(phi) * r;
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    // Entry scale/opacity lerp
    const targetScale = show ? 1 : 0.7;
    scale.current += (targetScale - scale.current) * Math.min(delta * 6, 1);
    if (groupRef.current) groupRef.current.scale.setScalar(scale.current);

    const targetOpacity = show ? 1 : 0;
    opacity.current += (targetOpacity - opacity.current) * Math.min(delta * 6, 1);

    // Slight rotation of halo and hover effects
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.02 * delta;
      const ptsMat = pointsRef.current.material as THREE.PointsMaterial;
      if (ptsMat) {
        const targetSize = hovered ? 0.1 : 0.06;
        ptsMat.size += (targetSize - ptsMat.size) * Math.min(delta * 8, 1);
        ptsMat.opacity = opacity.current * 0.85;
        ptsMat.needsUpdate = true;
      }
    }

    if (coreRef.current) {
      coreRef.current.rotation.y += 0.1 * delta;
      const mat = coreRef.current.material as THREE.MeshStandardMaterial;
      if (mat) {
        const targetEmissive = hovered ? 1.6 : 0.9;
        // @ts-ignore
        mat.emissiveIntensity = (mat.emissiveIntensity || 0) + (targetEmissive - (mat.emissiveIntensity || 0)) * Math.min(delta * 6, 1);
        mat.opacity = opacity.current;
        mat.transparent = true;
        mat.needsUpdate = true;
      }
    }
  });

  return (
    <group ref={groupRef} position={position as any} visible={show}>
      {/* Halo particles */}
      <points ref={pointsRef} rotation={[0, Math.random() * Math.PI, 0]}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>

        <pointsMaterial size={0.06} color={color} transparent depthWrite={false} opacity={0.85} />
      </points>

      {/* Glowing core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial emissive={new THREE.Color(color)} emissiveIntensity={0.9} metalness={0.2} roughness={0.3} transparent opacity={0} />
      </mesh>

      {/* Invisible hit area larger than core for easier clicking */}
      <mesh
        scale={[2, 2, 2]}
        onClick={() => onClick && onClick(id, position)}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "default";
        }}
      >
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Tooltip above core */}
      {hovered && <Tooltip position={[0, 0.9, 0]} title={name} visible={hovered} />}
    </group>
  );
};

export default Galaxy;
