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
          "Commandes disponibles :",
          "help - affiche ce message",
          "about - à propos de moi",
          "projects - liste des projets",
          "contact - comment me contacter",
          "jobs - liste des postes occupés",
          "portfolio - détails de ce projet",
          "joblinker - détails de ce projet",
          "hangman - détails de ce projet",
          "techno - liste des technologies que j’ai déjà utilisées",
          "skills - liste de mes compétences",
          "clear - efface l’historique",
        ];

      case "about":
        return [
          "Je suis Daguier Arthur, étudiant en pré-MSC à Epitech.",
          "J’ai la volonté d’apprendre un maximum de choses autour de l’informatique.",
        ];

      case "projects":
        return [
          "Projets récents :",
          "- Portfolio Website",
          "- Jeu 2D en Java",
          "- Joblinker (site web)",
          "- Hangman (jeu du pendu)",
        ];

      case "contact":
        return [
          "Me contacter :",
          "Email : arthur.daguier@epitech.eu",
          "GitHub : arth14hur",
        ];

      case "jobs":
        return [
          "Expériences professionnelles :",
          "Chauffeur-livreur",
          "Entreprise : Feeling Express",
          "",
          "Apprenti mécanicien agricole",
          "Entreprise : Atelier Chardine",
        ];

      case "portfolio":
        return ["C’est ce site !", "Je vous invite à l’explorer."];

      case "joblinker":
        return [
          "Projet web : Joblinker",
          "Jobboard réalisé en groupe pour apprendre l’organisation de projet.",
          "Utilisation de Git et GitHub en collaboration.",
        ];

      case "hangman":
        return [
          "Mini-projet en Python :",
          "Jeu du pendu, premier projet en Python.",
        ];

      case "techno":
        return [
          "Mes technologies :",
          "Python, Java, JavaScript, TypeScript, PostgreSQL, Node.js, Express, Next.js",
        ];

      case "skills":
        return [
          "Mes compétences :",
          "Relation client, sens du contact, rigueur,",
          "Gestion d’entreprise, traitement des demandes clients.",
        ];

      case "clear":
        setHistory([]);
        setOutputs([]);
        return [];

      default:
        return [`❓ Commande inconnue : '${command}'. Tapez 'help' pour la liste.`];
    }
  };

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
