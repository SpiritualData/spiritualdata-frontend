import React from "react";

const SceneLights: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 7]} intensity={0.6} />
      <pointLight position={[-10, -10, -10]} intensity={0.2} />
    </>
  );
};

export default SceneLights;
