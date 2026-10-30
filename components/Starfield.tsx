"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  pz: number;
}

interface PlanetPreset {
  name: string;
  type: "gas" | "terrestrial" | "lava" | "ice" | "ringed";
  primaryColor: string;
  secondaryColor: string;
  shadowColor: string;
  glowColor: string;
  hasRings?: boolean;
  ringColor?: string;
  ringOuterColor?: string;
  ringTilt?: number;
  baseRadius: number;
}

interface Planet {
  x: number;
  y: number;
  z: number;
  preset: PlanetPreset;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // 1. ვარსკვლავები
    const NUM_STARS = 400;
    const SPEED = 2.2;
    const stars: Star[] = [];

    for (let i = 0; i < NUM_STARS; i++) {
      stars.push({
        x: (Math.random() - 0.5) * width * 2,
        y: (Math.random() - 0.5) * height * 2,
        z: Math.random() * width,
        pz: Math.random() * width,
      });
    }

    // 2. 7 უნიკალური პლანეტის პრესეტი
    const PRESETS: PlanetPreset[] = [
      {
        name: "Saturn",
        type: "ringed",
        primaryColor: "#facc15",
        secondaryColor: "#d97706",
        shadowColor: "#1e1403",
        glowColor: "rgba(250, 204, 21, 0.35)",
        hasRings: true,
        ringColor: "rgba(253, 224, 71, 0.75)",
        ringOuterColor: "rgba(217, 119, 6, 0.4)",
        ringTilt: 0.32,
        baseRadius: 40,
      },
      {
        name: "Jupiter",
        type: "gas",
        primaryColor: "#fb923c",
        secondaryColor: "#78350f",
        shadowColor: "#2a1205",
        glowColor: "rgba(251, 146, 60, 0.35)",
        baseRadius: 46,
      },
      {
        name: "Terra",
        type: "terrestrial",
        primaryColor: "#38bdf8",
        secondaryColor: "#10b981",
        shadowColor: "#031e29",
        glowColor: "rgba(56, 189, 248, 0.4)",
        baseRadius: 32,
      },
      {
        name: "Mars",
        type: "terrestrial",
        primaryColor: "#f87171",
        secondaryColor: "#b91c1c",
        shadowColor: "#2b0707",
        glowColor: "rgba(248, 113, 113, 0.35)",
        baseRadius: 28,
      },
      {
        name: "Ice Giant",
        type: "ice",
        primaryColor: "#22d3ee",
        secondaryColor: "#0284c7",
        shadowColor: "#041d2e",
        glowColor: "rgba(34, 211, 238, 0.45)",
        hasRings: true,
        ringColor: "rgba(34, 211, 238, 0.65)",
        ringOuterColor: "rgba(14, 165, 233, 0.25)",
        ringTilt: -0.75, // თითქმის ვერტიკალური რგოლი ურანის მსგავსად
        baseRadius: 36,
      },
      {
        name: "Lava World",
        type: "lava",
        primaryColor: "#fbbf24",
        secondaryColor: "#ea580c",
        shadowColor: "#1a0601",
        glowColor: "rgba(234, 88, 12, 0.5)",
        baseRadius: 30,
      },
      {
        name: "Exo Violet",
        type: "ringed",
        primaryColor: "#c084fc",
        secondaryColor: "#7e22ce",
        shadowColor: "#1d0831",
        glowColor: "rgba(192, 132, 252, 0.4)",
        hasRings: true,
        ringColor: "rgba(232, 121, 249, 0.75)",
        ringOuterColor: "rgba(168, 85, 247, 0.35)",
        ringTilt: -0.28,
        baseRadius: 42,
      },
    ];

    // 3. აქტიური პლანეტები სივრცეში (5 ცალი ერთდროულად სხვადასხვა სიღრმეზე)
    const MAX_PLANETS = 5;
    const planets: Planet[] = [];

    const createPlanet = (customZ?: number): Planet => {
      const preset = PRESETS[Math.floor(Math.random() * PRESETS.length)];
      // პლანეტა განვათავსოთ ცენტრის გარშემო სხვადასხვა კუთხით
      const angle = Math.random() * Math.PI * 2;
      const distance = width * 0.32 + Math.random() * (width * 0.55);

      return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * (height * 0.48),
        z: customZ ?? width * (1.2 + Math.random() * 0.8),
        preset,
      };
    };

    // საწყისი პლანეტების გადანაწილება სიღრმეში
    for (let i = 0; i < MAX_PLANETS; i++) {
      planets.push(createPlanet(width * (0.35 + i * 0.38)));
    }

    const render = () => {
      // კოსმოსის ბნელი ფონი რბილი Motion Blur კვალით
      ctx.fillStyle = "rgba(7, 10, 18, 0.38)";
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // 1. ვარსკვლავების დახატვა
      for (let i = 0; i < NUM_STARS; i++) {
        const star = stars[i];
        star.z -= SPEED;

        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
          star.z = width;
          star.pz = width;
        }

        const k = 280 / star.z;
        const px = star.x * k + cx;
        const py = star.y * k + cy;

        const pk = 280 / star.pz;
        const ppx = star.x * pk + cx;
        const ppy = star.y * pk + cy;
        star.pz = star.z;

        if (px < 0 || px >= width || py < 0 || py >= height) continue;

        const depthRatio = 1 - star.z / width;
        const radius = Math.max(0.6, depthRatio * 2.2);
        const alpha = Math.min(1, Math.max(0.15, depthRatio * 1.2));

        // ვარსკვლავის კუდი
        ctx.beginPath();
        ctx.moveTo(ppx, ppy);
        ctx.lineTo(px, py);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.7})`;
        ctx.lineWidth = radius * 0.9;
        ctx.stroke();

        // ბირთვი
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fillStyle =
          i % 6 === 0
            ? `rgba(250, 204, 21, ${alpha})`
            : `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }

      // 2. პლანეტების დახატვა (სიღრმის მიხედვით დალაგება, რომ შორეულები ახლო პლანეტების უკან მოექცნენ)
      planets.sort((a, b) => b.z - a.z);

      for (let i = planets.length - 1; i >= 0; i--) {
        const p = planets[i];
        p.z -= SPEED * 0.7; // პლანეტები ხომალდისკენ მოემართებიან

        // როცა პლანეტა ჩაგვცდა და ხედვის არეს გასცდა, ხელახლა შეიქმნას შორს
        if (p.z <= 20) {
          planets.splice(i, 1);
          planets.push(createPlanet());
          continue;
        }

        const k = 320 / p.z;
        const px = p.x * k + cx;
        const py = p.y * k + cy;
        const radius = p.preset.baseRadius * k;

        if (radius < 1.2) continue; // ძალიან შორს მყოფი პატარა პლანეტა ჯერ არ ჩანს

        const alpha = Math.min(
          1,
          Math.max(0.08, (1 - p.z / (width * 1.8)) * 1.3),
        );

        ctx.save();
        ctx.globalAlpha = alpha;

        // ა) ატმოსფეროს მანათობელი ჰალო (Glow)
        const glowGrad = ctx.createRadialGradient(
          px,
          py,
          radius * 0.7,
          px,
          py,
          radius * 2.2,
        );
        glowGrad.addColorStop(0, p.preset.glowColor);
        glowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(px, py, radius * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // ბ) პლანეტის სფერო (3D განათება ცენტრალური სინათლის წყაროდან)
        const planetGrad = ctx.createRadialGradient(
          px - radius * 0.35,
          py - radius * 0.35,
          radius * 0.08,
          px,
          py,
          radius,
        );
        planetGrad.addColorStop(0, "#ffffff");
        planetGrad.addColorStop(0.25, p.preset.primaryColor);
        planetGrad.addColorStop(0.7, p.preset.secondaryColor);
        planetGrad.addColorStop(1, p.preset.shadowColor);

        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fillStyle = planetGrad;
        ctx.fill();

        // გ) ატმოსფერული ზოლები გაზის გიგანტებისთვის (Jupiter / Saturn)
        if (p.preset.type === "gas" || p.preset.name === "Saturn") {
          ctx.save();
          ctx.beginPath();
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.clip(); // მხოლოდ პლანეტის შიგნით დახატოს ზოლები

          ctx.strokeStyle = p.preset.secondaryColor;
          ctx.lineWidth = Math.max(1, radius * 0.14);
          ctx.globalAlpha = alpha * 0.45;

          [-0.45, -0.15, 0.18, 0.45].forEach((offset) => {
            ctx.beginPath();
            ctx.ellipse(
              px,
              py + radius * offset,
              radius,
              radius * 0.22,
              0.1,
              0,
              Math.PI * 2,
            );
            ctx.stroke();
          });
          ctx.restore();
        }

        // დ) პლანეტის რგოლები (Saturn, Ice Giant, Exo Violet)
        if (p.preset.hasRings && p.preset.ringColor) {
          const tilt = p.preset.ringTilt || 0.3;

          // შიდა მკვეთრი რგოლი
          ctx.beginPath();
          ctx.ellipse(
            px,
            py,
            radius * 2.3,
            radius * 0.55,
            tilt,
            0,
            Math.PI * 2,
          );
          ctx.strokeStyle = p.preset.ringColor;
          ctx.lineWidth = Math.max(1.5, radius * 0.18);
          ctx.stroke();

          // გარე ნაზი რგოლი
          if (p.preset.ringOuterColor) {
            ctx.beginPath();
            ctx.ellipse(
              px,
              py,
              radius * 2.7,
              radius * 0.65,
              tilt,
              0,
              Math.PI * 2,
            );
            ctx.strokeStyle = p.preset.ringOuterColor;
            ctx.lineWidth = Math.max(1, radius * 0.1);
            ctx.stroke();
          }
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
