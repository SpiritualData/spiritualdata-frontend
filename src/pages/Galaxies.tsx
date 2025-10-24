import React from "react";
import GalaxyScene from "../components/GalaxyScene/GalaxyScene";

const GalaxiesPage: React.FC = () => {
  return (
    <div
      style={{
        padding: "24px",
        minHeight: "100vh",
        background: "radial-gradient(ellipse at 20% 10%, rgba(95,39,205,0.12), transparent 10%), radial-gradient(ellipse at 90% 80%, rgba(19,12,64,0.18), transparent 20%), linear-gradient(180deg,#03021a 0%, #06021f 100%)",
      }}
    >
      <h1 style={{ color: "white", marginBottom: 12 }}>Spiritual Galaxies</h1>
      <GalaxyScene />
    </div>
  );
};

export default GalaxiesPage;
