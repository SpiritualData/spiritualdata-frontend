import React from "react";
import GalaxyScene from "../components/GalaxyScene/GalaxyScene";

const GalaxiesPage: React.FC = () => {
  return (
    <div style={{ padding: "24px", minHeight: "100vh", background: "linear-gradient(180deg,#02021a 0%, #05051f 100%)" }}>
      <h1 style={{ color: "white", marginBottom: 12 }}>Spiritual Galaxies</h1>
      <GalaxyScene />
    </div>
  );
};

export default GalaxiesPage;
