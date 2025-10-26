"use client";

import { useEffect } from "react";
import Terminal from "@/components/Terminal";
import useTypingEffect from "@/Hooks/useTypingEffect";

export default function HomePage() {
  const introText = useTypingEffect(
    "Bienvenue dans mon univers. Je suis Arthur, étudiant en informatique.",
    40
  );

  useEffect(() => {
    const canvas = document.getElementById("matrixCanvas") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between">

      <canvas id="matrixCanvas" className="absolute inset-0 z-0"></canvas>

      <div className="z-20 w-full flex justify-center items-center mt-[20vh] text-center">
        <div className="glass-intro text-2xl md:text-3xl text-green-400 fade-in">
          {introText}
          <span className="cursor" />
        </div>
      </div>

      <div className="z-20 w-full fixed bottom-0 left-0 glass-terminal">
        <Terminal />
      </div>
    </main>
  );
}
