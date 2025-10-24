// app/layouts/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ajout du lien "Skills" ici
  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Jobs", href: "/jobs" },
    { name: "Skills", href: "/skills" }, // Nouveau lien ajouté
    { name: "Contact", href: "/contact" },
  ]; //

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "backdrop-blur-xl bg-black/40 shadow-lg" : "bg-transparent"
      }`} //
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-green-300"> {/* */}
        {/* --- Logo / Nom du site --- */}
        <Link href="/" className="text-2xl font-bold drop-shadow-glow"> {/* */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Reality<span className="text-green-100">Matrix</span> {/* */}
          </motion.span>
        </Link>

        {/* --- Desktop Nav --- */}
        <nav className="hidden md:flex items-center gap-10"> {/* */}
          {links.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <Link
                href={link.href}
                className="text-lg hover:text-green-100 transition-all duration-300 relative group" //
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-green-400 transition-all duration-300" /> {/* */}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* --- Menu Burger --- */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5" //
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`w-6 h-[2px] bg-green-300 transition-all ${
              menuOpen ? "rotate-45 translate-y-[5px]" : ""
            }`} //
          />
          <span
            className={`w-6 h-[2px] bg-green-300 transition-all ${
              menuOpen ? "opacity-0" : ""
            }`} //
          />
          <span
            className={`w-6 h-[2px] bg-green-300 transition-all ${
              menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`} //
          />
        </button>
      </div>

      {/* --- Menu Mobile --- */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/80 backdrop-blur-2xl border-t border-green-400/20 p-6 space-y-4" //
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-green-300 text-xl hover:text-green-100 transition" //
              onClick={() => setMenuOpen(false)} // Ferme le menu au clic
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}