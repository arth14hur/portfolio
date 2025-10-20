"use client";

import { useState, useRef, useEffect } from "react";
import CommandOutput from "@/components/CommandOutput";

export default function Terminal() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [outputs, setOutputs] = useState<string[][]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    terminalRef.current?.focus();
  }, []);

  const handleCommand = (cmd: string): string[] => {
    const command = cmd.toLowerCase().trim();

    switch (command) {
      case "help":
        return [
          "📜 Available commands:",
          "help - Show this message",
          "about - About me",
          "projects - Show my projects",
          "contact - How to reach me",
          "clear - Clear the terminal",
        ];
      case "about":
        return [
          "👨‍💻 I'm a passionate web developer who loves building creative and interactive experiences.",
          "Currently working with Next.js, TypeScript and TailwindCSS.",
        ];
      case "projects":
        return [
          "🚀 My recent projects:",
          "- Portfolio Website",
          "- 3D Web Playground",
          "- Job Finder App",
          "- Terminal UI",
        ];
      case "contact":
        return [
          "📬 You can contact me at:",
          "Email: arthur@example.com",
          "GitHub: github.com/arthurdaguier",
        ];
      case "clear":
        setHistory([]);
        setOutputs([]);
        return [];
      default:
        return [`❓ Command not found: '${command}'. Type 'help' for list.`];
    }
  };

  const typeLine = (text: string, delay = 20): Promise<string> =>
    new Promise((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          resolve(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, delay);
    });

  const processCommand = async (cmd: string) => {
    setIsProcessing(true);
    const lines = handleCommand(cmd);

    setHistory((prev) => [cmd, ...prev]);
    setOutputs((prev) => [[], ...prev]);

    // On anime chaque ligne une par une
    for (let i = 0; i < lines.length; i++) {
      let typed = "";
      for (let j = 0; j < lines[i].length; j++) {
        typed += lines[i][j];
        await new Promise((r) => setTimeout(r, 15)); // vitesse par caractère
        setOutputs((prev) => {
          const updated = [...prev];
          updated[0][i] = typed;
          return [...updated];
        });
      }
      await new Promise((r) => setTimeout(r, 200)); // délai entre lignes
    }

    setIsProcessing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (isProcessing) return;

    if (e.key === "Enter") {
      if (currentInput.trim() !== "") {
        const cmd = currentInput.trim();
        setCurrentInput("");
        processCommand(cmd);
      }
    } else if (e.key === "Backspace") {
      setCurrentInput((prev) => prev.slice(0, -1));
    } else if (e.key.length === 1) {
      setCurrentInput((prev) => prev + e.key);
    }
  };

  return (
    <div
      ref={terminalRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={() => terminalRef.current?.focus()}
      className="terminal-container no-outline select-none flex flex-col justify-end"
    >
      {/* Zone d'affichage (ordre inversé pour outputs récents en haut) */}
      <div className="flex flex-col-reverse overflow-y-auto flex-grow space-y-2 space-y-reverse">
        {history.map((cmd, idx) => (
          <div key={idx}>
            <div className="text-gray-300 font-mono">
              <span className="text-green-400">&gt;</span> {cmd}
            </div>
            {outputs[idx] &&
              outputs[idx].map((out, j) => (
                <CommandOutput key={j} output={out} />
              ))}
          </div>
        ))}
      </div>

      {/* Ligne d'entrée */}
      <div className="input-line mt-2 border-t border-green-800 pt-2 flex items-center">
        <span className="text-green-400">&gt;&nbsp;</span>
        <span>{currentInput}</span>
        {isProcessing ? <span className="cursor opacity-0" /> : <span className="cursor" />}
      </div>
    </div>
  );
}