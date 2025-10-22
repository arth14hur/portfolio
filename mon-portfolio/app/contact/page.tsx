"use client";

import { useState } from "react";

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-900">
      {/* Menu fixe */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4 md:p-6">
          <h1 className="text-xl font-bold">Arthur Daguier</h1>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <ul
            className={`md:flex md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 overflow-hidden ${
              menuOpen ? "max-h-64" : "max-h-0"
            }`}
          >
            <li className="p-4 md:p-0 text-center">
              <a href="/" className="hover:text-blue-600">Accueil</a>
            </li>
            <li className="p-4 md:p-0 text-center">
              <a href="/#projets" className="hover:text-blue-600">Projets</a>
            </li>
            <li className="p-4 md:p-0 text-center">
              <a href="/contact" className="text-blue-600 font-semibold">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="pt-24 md:pt-32 px-6 md:px-12 max-w-3xl mx-auto space-y-16">
        {/* En-tête */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Contactez-moi</h1>
          <p className="text-lg md:text-xl text-gray-700">
            Une idée, un projet, une opportunité ? Discutons-en !
          </p>
        </section>

        {/* Coordonnées */}
        <section className="text-center text-gray-800 space-y-2">
          <p>Email : <a href="mailto:arthur@example.com" className="text-blue-600 hover:underline">arthur@example.com</a></p>
          <p>Téléphone : +33 6 12 34 56 78</p>
          <p>
            LinkedIn : <a href="https://linkedin.com/in/arthur" target="_blank" className="text-blue-600 hover:underline">linkedin.com/in/arthur</a>  
            &nbsp;|&nbsp; GitHub : <a href="https://github.com/arthur" target="_blank" className="text-blue-600 hover:underline">github.com/arthur</a>
          </p>
        </section>

        {/* Formulaire de contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-center">Envoyez-moi un message</h2>
          <form className="space-y-6 bg-white p-8 rounded-2xl shadow-md">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-medium mb-2">Nom</label>
              <input
                id="name"
                type="text"
                placeholder="Votre nom"
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium mb-2">Email</label>
              <input
                id="email"
                type="email"
                placeholder="votreadresse@mail.com"
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Votre message..."
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Envoyer le message
              </button>
            </div>
          </form>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 pb-8">
          © {new Date().getFullYear()} Arthur Daguier — Tous droits réservés.
        </footer>
      </main>
    </div>
  );
}
