import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface PulseProps {
  position: [number, number, number];
  duration?: number;
  onComplete?: () => void;
}

const Pulse: React.FC<PulseProps> = ({ position, duration = 1200, onComplete }) => {
  const mesh = useRef<THREE.Mesh | null>(null);
  const start = useRef<number | null>(null);

  useEffect(() => {
    start.current = performance.now();
    return () => {};
  }, []);

  useFrame(() => {
    if (!mesh.current || start.current === null) return;
    const t = (performance.now() - start.current) / duration; // 0..1
    const eased = Math.min(Math.pow(t, 0.5), 1);
    mesh.current.scale.setScalar(1 + eased * 6);
    const mat = mesh.current.material as THREE.MeshBasicMaterial;
    if (mat) mat.opacity = Math.max(1 - eased, 0);
    if (t >= 1) {
      onComplete && onComplete();
    }
  });

  return (
    <mesh ref={mesh} position={position as any}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshBasicMaterial color={new THREE.Color("#ffffff")} transparent opacity={0.9} blending={THREE.AdditiveBlending} depthWrite={false} />
    </mesh>
  );
};

export default Pulse;
