import React, { useMemo, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import SceneLights from "./SceneLights";
import CameraController from "./CameraController";
import Galaxy from "./Galaxy";
import Planet from "./Planet";
import Tooltip from "./Tooltip";
import { GALAXIES } from "./GalaxyData";
import { useRef } from "react";

const GalaxyScene: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedGalaxy = useMemo(() => GALAXIES.find((g) => g.id === selected) || null, [selected]);
  const [visible, setVisible] = useState<boolean[]>(() => GALAXIES.map(() => false));

  useEffect(() => {
    const timers: number[] = [];
    GALAXIES.forEach((_, i) => {
      const t = window.setTimeout(() => {
        setVisible((v) => {
          const copy = v.slice();
          copy[i] = true;
          return copy;
        });
      }, i * 450 + 300);
      timers.push(t);
    });

    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  // Container fade-in (CSS-based) to simulate stars fade and awakening zoom
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(id);
  }, []);

  return (
    <div style={{ width: "100%", height: "80vh", borderRadius: 12, overflow: "hidden", opacity: mounted ? 1 : 0, transition: "opacity 1.2s ease" }}>
      <Canvas camera={{ position: [0, 1.5, 8], fov: 60 }}>
        <SceneLights />

        {/* background stars */}
        <group>
          <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade />
        </group>

        {/* Galaxies appear with a staggered entry controlled by visible[] */}
        {GALAXIES.map((g, idx) => (
          <group key={g.id}>
            <Galaxy id={g.id} name={g.name} position={g.position} color={g.color} onClick={() => setSelected(g.id)} show={visible[idx]} />
          </group>
        ))}

        {/* If a galaxy is selected show its planets */}
        {selectedGalaxy && (
          <group>
            {selectedGalaxy.planets.map((p, i) => (
              <Planet key={p} index={i} distance={1.6 + i * 0.6} color={selectedGalaxy.color} name={p} />
            ))}
          </group>
        )}

        <CameraController target={selectedGalaxy ? selectedGalaxy.position : null} zoom={selected ? 1.2 : 1} />
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
      </Canvas>

      {/* Simple overlay for selected galaxy info */}
      <div style={{ position: "absolute", top: 16, left: 16, color: "white" }}>
        <h3 style={{ margin: 0, fontWeight: 600 }}>{selectedGalaxy ? selectedGalaxy.name : "Explore the Spiritual Galaxies"}</h3>
        {selectedGalaxy ? (
          <div style={{ fontSize: 13, opacity: 0.9 }}>
            {selectedGalaxy.planets.slice(0, 5).map((p) => (
              <div key={p}>{p}</div>
            ))}
          </div>
        ) : (
          <div style={{ fontSize: 13, opacity: 0.8 }}>Click a galaxy to reveal its planets (sub-branches)</div>
        )}
      </div>
    </div>
  );
};

export default GalaxyScene;
