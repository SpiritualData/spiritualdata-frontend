import React from "react";
import { motion } from "framer-motion";

// Workaround typing edge-cases in some TypeScript setups: cast motion.div to any for JSX usage
const M: any = motion.div;

interface Props {
  title: string;
  onClose: () => void;
  bgColor?: string;
}

const PlanetInfoCard: React.FC<Props> = ({ title, onClose, bgColor = "rgba(0,0,0,0.4)" }) => {
  return (
    <M
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      style={{
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        background: bgColor,
        color: "#fff",
        padding: 18,
        borderRadius: 12,
        width: 360,
        zIndex: 2001,
        boxShadow: "0 8px 28px rgba(0,0,0,0.6)",
        border: "1px solid rgba(255,255,255,0.04)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={onClose}
          aria-label="close"
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          ✕
        </button>
      </div>

      <h3 style={{ margin: "6px 0 8px 0" }}>{title}</h3>
      <p style={{ color: "rgba(255,255,255,0.9)", margin: 0 }}>Info: text</p>
    </M>
  );
};

export default PlanetInfoCard;
