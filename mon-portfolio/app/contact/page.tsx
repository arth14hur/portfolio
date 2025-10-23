// app/contact/page.tsx
"use client"; // Garde ceci si tu utilises useState pour la gestion du formulaire plus tard

import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link'; // Pour les liens potentiels

// Tu pourrais vouloir un état pour la gestion du formulaire plus tard
// import { useState } from 'react';

// Réutilisation des détails de contact, ajuste si nécessaire
const contactDetails = [
  { method: 'Email', value: 'a.daguier@example.com', href: 'mailto:a.daguier@example.com', icon: <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> },
  { method: 'Phone', value: '+33 6 32 34 56 78', href: 'tel:+33632345678', icon: <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> },
  { method: 'LinkedIn', value: 'arthurdag_li', href: 'https://linkedin.com/in/arthur', icon: <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg> },
  { method: 'GitHub', value: 'arthurdag_gh', href: 'https://github.com/arthur', icon: <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> },
];

const ContactPage: NextPage = () => {
  // Ajoute un état pour les inputs du formulaire si nécessaire
  // const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({ ...formData, [e.target.id]: e.target.value });
  // };
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   // Ajoute ta logique de soumission ici (ex: envoi à une API)
  // };

  return (
    <>
      <Head>
        <title>Contact - Arthur Daguier</title>
        <meta name="description" content="Contactez Arthur Daguier pour discuter de projets ou d'opportunités." />
      </Head>

      {/* --- Conteneur Principal (Identique aux autres pages) --- */}
      <div className="relative bg-gradient-to-br from-terminal-dark via-black to-neutral-950 min-h-screen text-terminal-light-gray font-mono p-6 sm:p-10 lg:p-16 overflow-x-hidden">

        {/* Grille de fond (Identique) */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04] pointer-events-none z-0"></div>

        {/* Wrapper de contenu (Identique) */}
        {/* J'ai légèrement augmenté max-w pour le formulaire */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-20 lg:space-y-24 pb-16">

          {/* --- Titre de la Page --- */}
          <header className="pt-6 md:pt-12 text-center">
            {/* Titre stylisé */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-terminal-green mb-4 inline-block">
              <span className="text-green-600 select-none mr-2">//</span> Contact
            </h1>
            {/* Paragraphe d'intro stylisé */}
            <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl mx-auto">
              Une idée, un projet, une opportunité ? N'hésitez pas à me laisser un message.
            </p>
          </header>

          {/* --- Coordonnées directes --- */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
             {contactDetails.map((detail) => (
               <div key={detail.method} className="flex items-center gap-3 group">
                 {/* Icône */}
                 <span className="flex-shrink-0">{detail.icon}</span>
                 <div>
                   {/* Méthode (Email, Phone...) */}
                   <span className="block text-sm text-green-600">{detail.method}</span>
                   {/* Valeur cliquable */}
                   <a
                     href={detail.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-neutral-300 group-hover:text-terminal-green group-hover:underline decoration-terminal-green decoration-1 underline-offset-4 transition-colors duration-200 break-all" // break-all pour les emails/liens longs
                   >
                     {detail.value}
                   </a>
                 </div>
               </div>
             ))}
          </section>

          {/* --- Formulaire de contact --- */}
          <section className="p-6 md:p-10 border border-neutral-700 rounded-lg bg-neutral-900/60 backdrop-blur-sm shadow-lg shadow-black/40">
            {/* Titre du formulaire */}
            <h2 className="text-3xl font-semibold text-terminal-green mb-8 text-center">
              <span className="text-green-600 select-none">#</span> Envoyer un message
            </h2>
            {/* Ajoute onSubmit={handleSubmit} si tu utilises l'état */}
            <form className="space-y-6">
              {/* Input Nom */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-green-500 font-medium mb-2">// Nom</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Votre nom ou pseudo..."
                  // value={formData.name} onChange={handleChange}
                  required
                  // Styles de l'input
                  className="bg-neutral-900/80 border border-neutral-700 rounded p-3 text-terminal-light-gray placeholder-neutral-500
                             focus:outline-none focus:border-terminal-green focus:ring-1 focus:ring-terminal-green transition-colors duration-200"
                />
              </div>

              {/* Input Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-green-500 font-medium mb-2">// Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="adresse@domaine.xyz"
                   // value={formData.email} onChange={handleChange}
                  required
                  // Styles de l'input
                  className="bg-neutral-900/80 border border-neutral-700 rounded p-3 text-terminal-light-gray placeholder-neutral-500
                             focus:outline-none focus:border-terminal-green focus:ring-1 focus:ring-terminal-green transition-colors duration-200"
                />
              </div>

              {/* Input Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-green-500 font-medium mb-2">// Message</label>
                <textarea
                  id="message"
                  rows={6} // Légèrement plus grand
                  placeholder="Écrivez votre message ici..."
                  // value={formData.message} onChange={handleChange}
                  required
                  // Styles du textarea
                  className="bg-neutral-900/80 border border-neutral-700 rounded p-3 text-terminal-light-gray placeholder-neutral-500
                             focus:outline-none focus:border-terminal-green focus:ring-1 focus:ring-terminal-green transition-colors duration-200 resize-none" // Ajout de resize-none
                ></textarea>
              </div>

              {/* Bouton Envoyer */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  // Styles du bouton (similaire aux boutons CV/Réalisations)
                  className="inline-flex items-center gap-2 px-8 py-3 border border-terminal-green bg-terminal-green text-black
                           hover:bg-transparent hover:text-terminal-green hover:shadow-lg hover:shadow-terminal-green/30
                           transition-all duration-300 text-lg font-semibold rounded-sm group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-terminal-green"
                >
                  Envoyer
                  {/* Icône flèche */}
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </form>
          </section>

          {/* --- Footer Minimaliste --- */}
          {/* Note: Le footer global est peut-être déjà dans app/layout.tsx */}
          <footer className="text-center text-sm text-neutral-600 pt-10">
             &copy; {new Date().getFullYear()} Arthur Daguier // Tous droits réservés
           </footer>

        </div>
      </div>
    </>
  );
};

export default ContactPage;