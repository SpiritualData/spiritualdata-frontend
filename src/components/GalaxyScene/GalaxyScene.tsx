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
import TwinklingStars from "./TwinklingStars";
import Pulse from "./Pulse";

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

  // discovery pulses state
  const [pulses, setPulses] = useState<Array<{ id: string; pos: [number, number, number] }>>([]);
  // discovered galaxies set persisted in localStorage
  const [discovered, setDiscovered] = useState<Record<string, boolean>>(() => {
    try {
      const raw = localStorage.getItem("sd_discovered") || "{}";
      return JSON.parse(raw);
    } catch (e) {
      return {};
    }
  });

  // ambient audio (WebAudio oscillator)
  const audioRef = useRef<{ ctx?: AudioContext; osc?: OscillatorNode; gain?: GainNode } | null>(null);
  const [audioOn, setAudioOn] = useState<boolean>(() => {
    try {
      return localStorage.getItem("sd_ambient_audio") === "1";
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem("sd_discovered", JSON.stringify(discovered));
  }, [discovered]);

  useEffect(() => {
    localStorage.setItem("sd_ambient_audio", audioOn ? "1" : "0");
    if (audioOn) {
      if (!audioRef.current) audioRef.current = {};
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = 120; // low gentle hum
      gain.gain.value = 0.0018; // very low volume
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      audioRef.current.ctx = ctx;
      audioRef.current.osc = osc;
      audioRef.current.gain = gain;
    } else {
      if (audioRef.current && audioRef.current.osc) {
        try {
          audioRef.current.osc.stop();
        } catch (e) {}
        try {
          audioRef.current.ctx && audioRef.current.ctx.close();
        } catch (e) {}
        audioRef.current = null;
      }
    }
  }, [audioOn]);

  const handleSelect = (id: string) => {
    setSelected(id);
    const galaxy = GALAXIES.find((g) => g.id === id);
    if (!galaxy) return;
    if (!discovered[id]) {
      // first time discovery -> add pulse
      setDiscovered((d) => ({ ...d, [id]: true }));
      setPulses((p) => [...p, { id, pos: galaxy.position }]);
    }
  };

  return (
    <div style={{ width: "100%", height: "80vh", borderRadius: 12, overflow: "hidden", opacity: mounted ? 1 : 0, transition: "opacity 1.2s ease" }}>
      <Canvas camera={{ position: [0, 1.5, 8], fov: 60 }}>
        {/* scene background + subtle fog for depth */}
        <color attach="background" args={["#02021a"]} />
        <fog attach="fog" args={["#02021a", 6, 40]} />
        <SceneLights />

        {/* base stars from Drei */}
        <Stars radius={100} depth={60} count={800} factor={4} saturation={0} fade />
        {/* twinkling star decorations */}
        <TwinklingStars count={90} />

        {/* Galaxies appear with a staggered entry controlled by visible[] */}
        {GALAXIES.map((g, idx) => (
          <group key={g.id}>
            <Galaxy id={g.id} name={g.name} position={g.position} color={g.color} onClick={() => handleSelect(g.id)} show={visible[idx]} />
          </group>
        ))}

        {/* discovery pulses */}
        {pulses.map((p) => (
          <Pulse
            key={p.id}
            position={p.pos}
            onComplete={() => {
              setPulses((prev) => prev.filter((x) => x.id !== p.id));
            }}
          />
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

      {/* Simple overlay for selected galaxy info + audio toggle */}
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

      {/* Audio toggle and discovered info */}
      <div style={{ position: "absolute", top: 16, right: 16, color: "white", display: "flex", gap: 8, alignItems: "center" }}>
        <button
          onClick={() => setAudioOn((s) => !s)}
          style={{ background: audioOn ? "#6ee7b7" : "rgba(255,255,255,0.06)", border: "none", padding: "8px 10px", borderRadius: 8, color: audioOn ? "#00331a" : "white", cursor: "pointer" }}
        >
          {audioOn ? "Ambient On" : "Ambient Off"}
        </button>
        <div style={{ fontSize: 12, opacity: 0.9 }}>Discoveries: {Object.keys(discovered).length}</div>
      </div>
    </div>
  );
};

export default GalaxyScene;
