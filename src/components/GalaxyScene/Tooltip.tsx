import React from "react";
import { Html } from "@react-three/drei";

interface TooltipProps {
  position: [number, number, number];
  title: string;
  visible?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ position, title, visible = true }) => {
  return (
    <Html position={position} center style={{ pointerEvents: "none", opacity: visible ? 1 : 0 }}>
      <div style={{ background: "rgba(0,0,0,0.6)", padding: "6px 10px", borderRadius: 6, color: "white", fontSize: 13 }}>
        {title}
      </div>
    </Html>
  );
};

export default Tooltip;
