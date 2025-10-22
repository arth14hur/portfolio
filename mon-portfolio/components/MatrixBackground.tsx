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
          "Commandes disponible:",
          "help - Montrer ce message",
          "about - A propos de moi",
          "projects - liste des projets que j'ai réaliser",
          "contact - comment me contacter",
          "clear - supprimer l'historique",
          "Portfolio - détails du projet",
          "Job board - détails du projet",
          "Hangman - détails du projet",
          "Skills - liste de mes compétances",
          "techno - listes des techno que je connais"
        ];
      case "about":
        return [
          "Je suis étudiant à épitech et je désire apprendre d'avantage",
          "En ce moment je travail sur Java en cours",
        ];
      case "projects":
        return [
          "Projets récents:",
          "- Portfolio Website",
          "- Job board website",
          "- Hangman game",
        ];
      case "contact":
        return [
          "You can contact me at:",
          "Email: arthur@example.com",
          "GitHub: github.com/arthurdaguier",
        ];
      case "Portfolio":
        return [
          "details of portfolio Website:",
          "- Look at the Website",
        ];
      case "Job board":
        return [
          "Job board project:",
          "- Job finder Website",
        ];
      case "Hangman":
        return [
          "Hangman game",
        ];
        case "skills":
        return [
          "My skills:",
          "- Portfolio Website",
          "- Job board website",
          "- Hangman game",
        ];
        case "tecno":
        return [
          "les technos que j'ai déjà utilisés:",
          "- Framework Nextjs",
          "- Typescript",
          "- Tailwind CSS",
          "- html, js, CSS",
          "- Nodejs et express",
          "- Postgresql",
          "- Python 3",
          "- Java",
          "- projets perso avec l'unreal engin 5"
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
