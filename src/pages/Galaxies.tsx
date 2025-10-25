import React from "react";
import { Link } from "react-router-dom";
import GalaxyScene from "../components/GalaxyScene/GalaxyScene";

const GalaxiesPage: React.FC = () => {

  return (
    <div
      style={{
        position: "relative",
        padding: "24px",
        minHeight: "100vh",
        overflow: "hidden",
        background: "radial-gradient(ellipse at 20% 10%, rgba(95,39,205,0.12), transparent 10%), radial-gradient(ellipse at 90% 80%, rgba(19,12,64,0.18), transparent 20%), linear-gradient(180deg,#03021a 0%, #06021f 100%)",
        color: "white",
      }}
    >
      
      <aside
        style={{
          position: "fixed",
          right: 20,
          top: 20,
          width: 220,
          zIndex: 60,
          background: "#000",
          color: "white",
          padding: "12px 14px",
          borderRadius: 8,
          boxShadow: "0 6px 20px rgba(0,0,0,0.6)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        
      </aside>

      {/* decorative red bubbles moved to page edges (not centered) */}
      <div style={{ position: "absolute", left: -120, top: -80, width: 360, height: 360, pointerEvents: "none", zIndex: 5 }}>
        <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "radial-gradient(circle at 30% 30%, rgba(255,80,80,0.14), rgba(255,40,40,0.06) 40%, transparent)", filter: "blur(28px)", opacity: 0.9 }} />
      </div>
      <div style={{ position: "absolute", right: -100, bottom: -60, width: 300, height: 300, pointerEvents: "none", zIndex: 5 }}>
        <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "radial-gradient(circle at 70% 70%, rgba(255,90,90,0.12), rgba(255,40,40,0.04) 45%, transparent)", filter: "blur(30px)", opacity: 0.9 }} />
      </div>
      <div style={{ position: "absolute", left: 12, bottom: -60, width: 220, height: 220, pointerEvents: "none", zIndex: 5 }}>
        <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "radial-gradient(circle at 20% 80%, rgba(255,60,60,0.08), transparent)", filter: "blur(20px)", opacity: 0.8 }} />
      </div>

      <GalaxyScene />
    </div>
  );
};

export default GalaxiesPage;
