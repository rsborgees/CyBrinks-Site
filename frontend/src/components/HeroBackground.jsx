import { useEffect, useRef } from "react";
import "./HeroBackground.css";

const PARTICLE_COUNT = 46;

function createParticles(width, height) {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.4 + 0.6,
    speed: Math.random() * 0.16 + 0.04,
    drift: (Math.random() - 0.5) * 0.12,
    baseOpacity: Math.random() * 0.45 + 0.15,
    twinkleSpeed: Math.random() * 0.02 + 0.006,
    twinklePhase: Math.random() * Math.PI * 2,
  }));
}

export default function HeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let particles = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let raf = null;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = createParticles(width, height);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        const twinkle = prefersReducedMotion
          ? 1
          : Math.sin(frame * p.twinkleSpeed + p.twinklePhase) * 0.3 + 0.7;

        ctx.beginPath();
        ctx.fillStyle = `rgba(58, 160, 255, ${p.baseOpacity * twinkle})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        if (!prefersReducedMotion) {
          p.y -= p.speed;
          p.x += p.drift;
          if (p.y < -4) {
            p.y = height + 4;
            p.x = Math.random() * width;
          }
          if (p.x < -4) p.x = width + 4;
          if (p.x > width + 4) p.x = -4;
        }
      });

      frame += 1;
      if (!prefersReducedMotion) raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      resize();
      if (prefersReducedMotion) draw();
    };

    resize();
    draw();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hero__bg" aria-hidden="true">
      <div className="hero__glow hero__glow--a" />
      <div className="hero__glow hero__glow--b" />
      <div className="hero__grid" />
      <canvas ref={canvasRef} className="hero__canvas" />
      <div className="hero__scanline" />
      <div className="hero__vignette" />
    </div>
  );
}
