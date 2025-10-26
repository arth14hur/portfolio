"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function HomePage() {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const fontSize = 18;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black overflow-hidden">

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0"></canvas>

      <div className="absolute inset-0 z-0 bg-black/50 backdrop-blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-green-400 text-7xl md:text-9xl font-mono mb-24 px-10 py-6 backdrop-blur-xl rounded-lg glow-animation text-center"
        >
          CHOOSE YOUR REALITY
        </motion.h1>

        <div className="flex flex-col gap-20 md:gap-24 items-center">
          <motion.button
            onClick={() => router.push("/normal")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50 hover:shadow-blue-400/80 transition-all flex items-center justify-center px-6 py-6 glow-animation"
          >
            <span className="text-white font-bold text-5xl md:text-6xl text-center leading-tight">
              BLUE
            </span>
          </motion.button>

          <motion.button
            onClick={() => router.push("/terminal")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-400/80 transition-all hidden md:flex"
          >
            <span className="text-white font-bold text-5xl md:text-6xl text-center leading-tight">
              RED
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}