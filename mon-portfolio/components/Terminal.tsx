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
          "Commandes disponibles:",
          "help - montre ce message",
          "about - A propos de moi",
          "projects - liste des projets",
          "contact - comment me contacter",
          "Jobs - liste des postes occuper",
          "portfolio - détail de ce projet",
          "Joblinker - détail de ce projet",
          "Hangman - détail de ce projet",
          "techno - liste des techno que j'ai déjà utiliser",
          "skills - liste de mes compétances",
          "clear - supprimer l'historique",
        ];
      case "about":
        return [
          "Je Daguier Arthur étudiant en préMSC à Epitech",
          "J'ai la volonté d'apprendre un maximum de choses au tour de l'informatique",
        ];
      case "projects":
        return [
          "Projets récents:",
          "- Portfolio Website",
          "- Jeu 2D en Java",
          "- Joblinker site web",
          "- Hangman game",
          
        ];
      case "contact":
        return [
          "Me contacter",
          "Email: arthur.daguier@epitech.eu",
          "GitHub: arth14hur",
        ];
        case "Jobs":
        return [
          "Expériences pros",
          "Chaufeur livreur",
          "entreprise: Feeling Express",
          "",
          "apprentis mécanicien agricole",
          "entreprise: Atelier Chardine",
        ];
        case "portfolio":
        return [
          "C'est ce site",
          "Je vous invite à l'explorer",
        ];
        case "Joblinker":
        return [
          "Projet web",
          "jobboard fais en groupe pour nous apprendre l'organisation",
          "utilisation de git et github en groupe",
        ];
        case "Hangman":
        return [
          "Mini projet en python",
          "jeu du pendu en python en tant que premier projet",
        ];
        case "techno":
        return [
          "Mes technos",
          "Python, Java",
          "Javascript, Typescript, Postgresql, NodeJs, Express, Next"
        ];
        case "techno":
        return [
          "Mes compétances",
          "relation client, rapport humain, rigueur",
          "gestion d'entreprise, gestion demandes clients"
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


    for (let i = 0; i < lines.length; i++) {
      let typed = "";
      for (let j = 0; j < lines[i].length; j++) {
        typed += lines[i][j];
        await new Promise((r) => setTimeout(r, 15));
        setOutputs((prev) => {
          const updated = [...prev];
          updated[0][i] = typed;
          return [...updated];
        });
      }
      await new Promise((r) => setTimeout(r, 200));
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


      <div className="input-line mt-2 border-t border-green-800 pt-2 flex items-center">
        <span className="text-green-400">&gt;&nbsp;</span>
        <span>{currentInput}</span>
        {isProcessing ? <span className="cursor opacity-0" /> : <span className="cursor" />}
      </div>
    </div>
  );
}