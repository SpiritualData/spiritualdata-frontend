import * as React from "react";
import { Box, useTheme } from "@mui/material";

type ParticlesBgProps = {
  /** Logical particle count for a 1440x900 viewport. Scales with size & DPR. */
  baseCount?: number;
  /** Max particle speed in px per frame (logical pixels). */
  maxSpeed?: number;
  /** Whether to draw faint lines between nearby particles. */
  connect?: boolean;
  /** Max distance for line connections (in px). */
  connectDistance?: number;
  /** Optional override colors (falls back to theme). */
  colors?: string[];
  /** Make particles subtly repel the mouse. */
  mouseRepel?: boolean;
  /** Z-index for the canvas layer (defaults behind content). */
  zIndex?: number;
  /** Optional className for the wrapper Box. */
  className?: string;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
};

function hexToRgb(hex: string) {
  const value = hex.replace("#", "");
  const bigint = parseInt(
    value.length === 3
      ? value
          .split("")
          .map((c) => c + c)
          .join("")
      : value,
    16
  );
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

export default function ParticlesBg({
  baseCount = 120,
  maxSpeed = 0.7,
  connect = true,
  connectDistance = 120,
  colors,
  mouseRepel = true,
  zIndex = -1,
  className,
}: ParticlesBgProps) {
  const theme = useTheme();
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const rafRef = React.useRef<number | null>(null);
  const particlesRef = React.useRef<Particle[]>([]);
  const dprRef = React.useRef<number>(1);
  const mouseRef = React.useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  const reducedMotion = React.useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const paletteColors = React.useMemo(() => {
    const primary = theme.palette.primary.main;
    const secondary =
      theme.palette.secondary?.main || theme.palette.primary.light;
    const divider = theme.palette.divider || "#888";
    const c = colors ?? [primary, secondary, divider];
    return c.map((cHex) => hexToRgb(cHex));
  }, [theme, colors]);

  const resize = React.useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement!;
    const { width, height } = parent.getBoundingClientRect();

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    dprRef.current = dpr;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform before scaling
    ctx.scale(dpr, dpr);

    // Recompute particle count scaled by area vs a baseline (1440*900)
    const area = width * height;
    const scale = Math.sqrt(area / (1440 * 900));
    const targetCount = Math.max(20, Math.round(baseCount * scale));

    // Rebuild particles on resize to keep distribution even
    const newParticles: Particle[] = [];
    for (let i = 0; i < targetCount; i++) {
      const color = paletteColors[i % paletteColors.length];
      newParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() * 2 - 1) * maxSpeed,
        vy: (Math.random() * 2 - 1) * maxSpeed,
        size: Math.random() * 1.6 + 0.6,
        color: `rgb(${color.r}, ${color.g}, ${color.b})`,
      });
    }
    particlesRef.current = newParticles;
  }, [baseCount, maxSpeed, paletteColors]);

  const step = React.useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement!;
    if (!ctx) return;

    const { width, height } = parent.getBoundingClientRect();
    const particles = particlesRef.current;

    // Clear
    ctx.clearRect(0, 0, width, height);

    const mouse = mouseRef.current;

    // Update + draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Mouse repel
      if (mouse.active && mouseRepel) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist2 = dx * dx + dy * dy;
        const range = 140;
        const range2 = range * range;
        if (dist2 < range2 && dist2 > 0.01) {
          const force = (range2 - dist2) / range2; // 0..1
          const f = force * 1.5;
          p.vx += (dx / Math.sqrt(dist2)) * f * 0.02;
          p.vy += (dy / Math.sqrt(dist2)) * f * 0.02;
        }
      }

      p.x += p.vx;
      p.y += p.vy;

      // bounce off edges
      if (p.x <= 0 || p.x >= width) p.vx *= -1;
      if (p.y <= 0 || p.y >= height) p.vy *= -1;

      // draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.85;
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    // Draw connections
    if (connect) {
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);
          if (dist < connectDistance) {
            const alpha = 1 - dist / connectDistance;
            ctx.strokeStyle =
              "rgba(128,128,128," + (alpha * 0.35).toFixed(3) + ")";
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    }

    rafRef.current = requestAnimationFrame(step);
  }, [connect, connectDistance, mouseRepel]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resize();

    if (!reducedMotion) {
      rafRef.current = requestAnimationFrame(step);
    } else {
      // Draw a static scene once
      const ctx = canvas.getContext("2d");
      const parent = canvas.parentElement!;
      if (ctx) {
        const { width, height } = parent.getBoundingClientRect();
        ctx.clearRect(0, 0, width, height);
        particlesRef.current.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = 0.85;
          ctx.fill();
          ctx.globalAlpha = 1;
        });
      }
    }

    const handleResize = () => {
      resize();
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [resize, step, reducedMotion]);

  return (
    <Box
      className={className}
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex,
        // Subtle gradient behind the particles for nicer contrast
        backgroundImage: `radial-gradient(1200px 800px at 10% 10%, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 40%, ${theme.palette.background.default} 100%)`,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
        aria-hidden
      />
    </Box>
  );
}
