import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import React, { useRef } from "react";

interface CameraControllerProps {
  target?: [number, number, number] | null;
  zoom?: number;
}

const CameraController: React.FC<CameraControllerProps> = ({ target, zoom = 1 }) => {
  const { camera } = useThree();
  const current = useRef(new Vector3());

  useFrame((_, delta) => {
    if (target) {
      // Smoothly move camera toward the target
      const t = 1 - Math.pow(0.001, delta * 60);
      const dest = new Vector3(target[0], target[1], target[2] + 6 / zoom);
      current.current.lerp(dest, 0.05);
      camera.position.lerp(current.current, 0.06);
      camera.lookAt(target[0], target[1], target[2]);
    } else {
      // Default slow orbit / idle motion
      camera.position.lerp(new Vector3(0, 1.5, 8), 0.02);
      camera.lookAt(0, 0, 0);
    }
  });

  return null;
};

export default CameraController;
