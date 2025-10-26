import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface StarData {
  pos: [number, number, number];
  phase: number;
  speed: number;
}

const TwinklingStars: React.FC<{ count?: number }> = ({ count = 80 }) => {
  const groupRef = useRef<THREE.Group | null>(null);

  const stars = useMemo(() => {
    const arr: StarData[] = [];
    for (let i = 0; i < count; i++) {
      const r = 20 + Math.random() * 60;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      arr.push({
        pos: [Math.cos(theta) * Math.cos(phi) * r, Math.sin(phi) * r * 0.6, Math.sin(theta) * Math.cos(phi) * r],
        phase: Math.random() * Math.PI * 2,
        speed: 0.2 + Math.random() * 0.8,
      });
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!groupRef.current) return;
    for (let i = 0; i < stars.length; i++) {
      const child = groupRef.current.children[i] as THREE.Mesh;
      if (!child) continue;
      const s = 0.06 + Math.abs(Math.sin(t * stars[i].speed + stars[i].phase)) * 0.06;
      child.scale.setScalar(s);
      const mat = child.material as THREE.MeshBasicMaterial;
      if (mat) mat.opacity = 0.5 + Math.abs(Math.sin(t * stars[i].speed + stars[i].phase)) * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {stars.map((s, i) => (
        <mesh key={i} position={s.pos as any}>
          <sphereGeometry args={[0.03, 6, 6]} />
          <meshBasicMaterial color={new THREE.Color(0xffffff)} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
};

export default TwinklingStars;
