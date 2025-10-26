import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import React, { useRef } from "react";

interface CameraControllerProps {
  target?: [number, number, number] | null;
  zoom?: number;
  sceneCenter?: [number, number, number] | null;
  awaken?: boolean;
  scale?: number;
  centerOnTarget?: boolean;
}

const CameraController: React.FC<CameraControllerProps> = ({ target, zoom = 1, sceneCenter = null, awaken = true, scale = 1, centerOnTarget = false }) => {
  const { camera } = useThree();
  const current = useRef(new Vector3());
  const awakeLerp = useRef(0);

  useFrame((_, delta) => {
    // compute desird camera destination
    if (target) {
      // target vector is the selected galaxy position
      const tgt = new Vector3(target[0], target[1], target[2]);

      // When centerOnTarget is false slightly pull target toward sceneCenter to keep neighbors visible.
      if (!centerOnTarget && sceneCenter) {
        const center = new Vector3(sceneCenter[0], sceneCenter[1], sceneCenter[2]);
        tgt.lerp(center, 0.28);
      }

      // distance tuned to keep planets and galaxy visible. If we're centering on target, back the camera out more.
      const baseDist = (centerOnTarget ? 9 : 7) * Math.max(1, scale) / zoom;
      const minDist = 5;
      const dist = Math.max(minDist, baseDist);

      // initial awaken animation: slower for a smoother zoom-in
      if (awaken && awakeLerp.current < 1) {
        awakeLerp.current = Math.min(1, awakeLerp.current + delta * 0.28);
      }

  const startOffset = new Vector3(0, 1.4, 20); 
  // slightly farther start for dramatic reveal
  const desired = new Vector3(tgt.x, tgt.y, tgt.z + dist);

      // interpolate between startOffset and desired during awakening
      const factor = awaken ? awakeLerp.current : 1;
      const dest = awaken && factor < 1 ? startOffset.lerp(desired, factor) : desired;

      // use slightly stronger lerp when centring to make motion feel snappier
      current.current.lerp(dest, centerOnTarget ? 0.12 : 0.08);
      camera.position.lerp(current.current, centerOnTarget ? 0.14 : 0.12);
      camera.lookAt(tgt.x, tgt.y, tgt.z);
    } else {
      // default resting position show whole field but slightly zoomed out
      const rest = new Vector3(0, 1.5, 12);
      current.current.lerp(rest, 0.03);
      camera.position.lerp(current.current, 0.05);
      camera.lookAt(sceneCenter ? new Vector3(sceneCenter[0], sceneCenter[1], sceneCenter[2]) : new Vector3(0, 0, 0));
    }
  });

  return null;
};

export default CameraController;
