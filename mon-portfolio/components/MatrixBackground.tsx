"use client";

import { useState, useRef, useEffect } from "react";
import CommandOutput from "@/components/CommandOutput";

export default function Terminal() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [outputs, setOutputs] = useState<string[][]>([]);
  const [currentInput, setCurrentInput] = useState("");

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      if (currentInput.trim() !== "") {
        const newHistory = [currentInput, ...history];
        const result = handleCommand(currentInput);
        const newOutputs = [result, ...outputs];
        setHistory(newHistory);
        setOutputs(newOutputs);
        setCurrentInput("");
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
      {/* Zone d'affichage inversée */}
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
      <div className="input-line mt-2 border-t border-green-800 pt-2">
        <span className="text-green-400">&gt; </span>
        <span>{currentInput}</span>
        <span className="cursor" />
      </div>
    </div>
  );
}
