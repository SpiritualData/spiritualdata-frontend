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
import PlanetInfoCard from "./PlanetInfoCard";

  // helper: convert hex color (#rrggbb) -> rgba string with alpha
  const hexToRgba = (hex: string, alpha = 0.36) => {
    try {
      const h = hex.replace("#", "");
      const r = parseInt(h.substring(0, 2), 16);
      const g = parseInt(h.substring(2, 4), 16);
      const b = parseInt(h.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } catch (e) {
      return `rgba(0,0,0,${alpha})`;
    }
  };

const GalaxyScene: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedGalaxy = useMemo(() => GALAXIES.find((g) => g.id === selected) || null, [selected]);
  // defined scene center where selected galaxy will move to (center of screen)
  const sceneCenter: [number, number, number] = [0, 0, -7];
  const [bgColor, setBgColor] = useState<string>('#02021a');
  const [glowColor, setGlowColor] = useState<string>('#ffffff');
  const [fogRange, setFogRange] = useState<[number, number]>([6, 40]);
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

  // Apply per-galaxy theme (background and glow) when selection changes
  useEffect(() => {
    if (selectedGalaxy) {
      setBgColor(selectedGalaxy.theme?.bg || '#02021a');
      setGlowColor(selectedGalaxy.theme?.glow || selectedGalaxy.color || '#ffffff');
      // slightly widen fog range for larger galaxies
      const scale = selectedGalaxy.scale || 1;
      setFogRange([6, Math.max(30, 30 + (scale - 1) * 12)]);
    } else {
      setBgColor('#02021a');
      setGlowColor('#ffffff');
      setFogRange([6, 40]);
    }
  }, [selectedGalaxy]);

  // Container fade-in (CSS-based) to simulate stars fade and awakening zoom
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(id);
  }, []);

  // discovery pulses state (persist discoveries in localStorage)
  const [pulses, setPulses] = useState<Array<{ id: string; pos: [number, number, number] }>>([]);
  const [discovered, setDiscovered] = useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem("sd_discovered") || "{}");
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("sd_discovered", JSON.stringify(discovered));
    } catch (e) {}
  }, [discovered]);

  const handleSelect = (id: string) => {
    setSelected(id);
    const galaxy = GALAXIES.find((g) => g.id === id);
    if (!galaxy) return;
    if (!discovered[id]) {
      setDiscovered((d) => ({ ...d, [id]: true }));
      setPulses((p) => [...p, { id, pos: galaxy.position }]);
    }
  };

  // control whether planets should start their emergence/rotation (delay so galaxy recenters first)
  const [planetsActive, setPlanetsActive] = useState(false);
  useEffect(() => {
    setPlanetsActive(false);
    if (selected) {
      const t = window.setTimeout(() => setPlanetsActive(true), 700);
      return () => clearTimeout(t);
    }
  }, [selected]);

  // planet info modal handling and paused planets map
  const [planetInfo, setPlanetInfo] = useState<{ key: string; title: string } | null>(null);
  const [pausedPlanets, setPausedPlanets] = useState<Record<string, boolean>>({});

  const handlePlanetRequest = (payload: { index: number; name?: string }) => {
    if (!selectedGalaxy) return;
    const key = `${selectedGalaxy.id}-${payload.index}`;
    // pause this planet
    setPausedPlanets((p) => ({ ...p, [key]: true }));
    setPlanetInfo({ key, title: payload.name || "Planet" });
  };

  const closePlanetInfo = () => {
    if (!planetInfo) return;
    setPausedPlanets((p) => {
      const copy = { ...p };
      delete copy[planetInfo.key];
      return copy;
    });
    setPlanetInfo(null);
  };

  // close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePlanetInfo();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [planetInfo]);

  return (
    <div style={{ width: "100%", height: "80vh", borderRadius: 12, overflow: "hidden", opacity: mounted ? 1 : 0, transition: "opacity 1.2s ease" }}>
      <Canvas camera={{ position: [0, 1.5, 8], fov: 60 }}>
        {/* scene background + subtle fog for depth (per-galaxy themed) */}
        <color attach="background" args={[bgColor]} />
        <fog attach="fog" args={[bgColor, fogRange[0], fogRange[1]]} />
        <SceneLights />

        {/* ambient glow tint for the selected galaxy (adds thematic color) */}
        {selectedGalaxy && <ambientLight color={glowColor} intensity={0.18} />}
        {selectedGalaxy && <pointLight position={selectedGalaxy.position as any} color={glowColor} intensity={0.6} distance={8} />}

        {/* base stars from Drei */}
        <Stars radius={100} depth={60} count={800} factor={4} saturation={0} fade />
        {/* twinkling star decorations */}
        <TwinklingStars count={90} />

        {/* Galaxies appear with a staggered entry controlled by visible[]; selection scales and offsets others */}
        {GALAXIES.map((g, idx) => {
          const isSelected = selected === g.id;
          const isOther = selected !== null && !isSelected;
          const baseScale = g.scale || 1;
          // make selected galaxy noticeably larger; non-selected slightly smaller but still larger than planets
          const finalScale = selected ? (isSelected ? baseScale * 3.0 : baseScale * 0.92) : baseScale;

          // compute offset for non-selected galaxies to push them toward the edges
          let offset: [number, number, number] = [0, 0, 0];
          if (isOther && selectedGalaxy) {
            const dx = g.position[0] - selectedGalaxy.position[0];
            const dy = g.position[1] - selectedGalaxy.position[1];
            const dz = g.position[2] - selectedGalaxy.position[2];
            const len = Math.hypot(dx, dy, dz) || 1;
            // push outward more strongly so non-selected galaxies remain visible and clickable
            const push = 4.2;
            offset = [(dx / len) * push, (dy / len) * (push * 0.35), (dz / len) * (push * 0.9)];
          }

          // if this is the selected galaxy, compute an offset that moves it toward the scene center
          if (isSelected) {
            const dx = sceneCenter[0] - g.position[0];
            const dy = sceneCenter[1] - g.position[1];
            const dz = sceneCenter[2] - g.position[2];
            offset = [dx, dy, dz];
          }

          return (
            <group key={g.id}>
              <Galaxy
                id={g.id}
                name={g.name}
                position={g.position}
                color={g.color}
                onClick={() => handleSelect(g.id)}
                show={visible[idx]}
                isSelected={isSelected}
                isOther={isOther}
                targetScale={finalScale}
                offset={offset}
              />
            </group>
          );
        })}

        {/* discovery pulses */}
        {pulses.map((p) => (
          <Pulse key={p.id} position={p.pos} onComplete={() => setPulses((prev) => prev.filter((x) => x.id !== p.id))} />
        ))}

        {/* If a galaxy is selected show its planets */}
        {selectedGalaxy && (() => {
          // position planets around the scene center (where the selected galaxy moves to)
          const finalPos: [number, number, number] = [sceneCenter[0], sceneCenter[1], sceneCenter[2]];

          return (
            <group position={finalPos as any}>
              {selectedGalaxy.planets.map((p, i) => {
                  const key = `${selectedGalaxy.id}-${i}`;
                  const isPaused = Boolean(pausedPlanets[key]);
                  return (
                    <Planet key={p} index={i} distance={1.1 + i * 0.45} size={0.26} color={selectedGalaxy.color} name={p} active={planetsActive} paused={isPaused} onRequestInfo={handlePlanetRequest} />
                  );
                })}
            </group>
          );
        })()}

  <CameraController target={selected ? sceneCenter : null} centerOnTarget={Boolean(selected)} zoom={selected ? 1.15 : 1} scale={selectedGalaxy?.scale ?? 1} sceneCenter={sceneCenter} awaken={true} />
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
      </Canvas>
      {/* Planet info modal (2D overlay) - render outside the Canvas to avoid R3F DOM errors */}
      {planetInfo && (
        <>
          {/* dark backdrop (click to close) */}
          <div onClick={closePlanetInfo} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.48)", zIndex: 1999 }} />
          <PlanetInfoCard title={planetInfo.title} onClose={closePlanetInfo} bgColor={hexToRgba(glowColor, 0.42)} />
        </>
      )}

      {/* Empty overlay — navigation and audio controls are handled by the page container */}
    </div>
  );
};

export default GalaxyScene;
