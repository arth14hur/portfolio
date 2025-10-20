// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'terminal-green': '#00ff41', // Un vert légèrement plus doux que le fluo pur
        'terminal-dark': '#0a0a0a', // Un noir très profond mais pas pur
        'terminal-light-gray': '#e0e0e0',
      },
      fontFamily: {
        // Assure-toi que "Space Mono" est importé via Google Fonts
        mono: ['Space Mono', 'Fira Code', 'monospace'], 
      },
      keyframes: {
        // Animation simple de "clignotement" pour le curseur
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        // Animation de "glitch" pour le titre
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        glitch: 'glitch 0.2s infinite alternate', // Animation plus rapide
        'glitch-slow': 'glitch 0.4s infinite alternate', // Animation plus lente
      },
    },
  },
  plugins: [],
};
export default config;