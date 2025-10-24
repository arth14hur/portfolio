import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Projet Hangman',
    description: 'Un petit jeu Hangman crée avec la librairie Pygames',
    longDescription: 'Ce projet visait à réutiliser les connaissances aquisent pendant les deux premières semaines de formation à Epitech.',
    techStack: ['Python 3', 'Pygames'],
    liveLink: '#', // Remplace par le vrai lien
    repoLink: '#', // Remplace par le vrai lien
  },
  {
    id: 2,
    title: 'Job board',
    description: 'Projet de développement Web sur base des sites comme Hello Work et consort',
    longDescription: 'Projet visant a respecter un cahier des charges présenter sous forme d\'étapes de développement',
    techStack: ['Next.js', 'TypeScript', 'Nodejs', 'Tailwind CSS', 'Postgresql', 'express'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 3,
    title: 'Portfolio',
    description: 'Projet Web libre dans le but de présenter nos compétances.',
    longDescription: 'Je vous invite à explorer le site sur lequel vous étes.',
    techStack: ['Next.js', 'Typescript', 'Tailwind CSS'],
    liveLink: null, // Pas de lien live pour une app mobile par exemple
    repoLink: '#',
    // imageUrl: '/images/ecotrack.jpg'
  },
];

const contactLinks = [
  { name: 'Email:', value: 'arthur.daguier@epitech.eu', href: 'mailto:arthur.daguier@epitech.eu' },
  { name: 'Portable:', value: '+33 7 44 52 86 35', href: 'tel:+33744528635' },
  { name: 'LinkedIn:', value: 'arthur', href: 'https://linkedin.com/in/arthur' },
  { name: 'GitHub:', value: 'arthur github', href: 'https://github.com' },
];


const PortfolioPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Arthur Daguier - Portfolio</title>
        <meta name="description" content="Portfolio d'Arthur Daguier, développeur web." />
      </Head>

      {/* --- Conteneur Principal (Identique) --- */}
      <div className="relative bg-gradient-to-br from-terminal-dark via-black to-neutral-950 min-h-screen text-terminal-light-gray font-mono p-6 sm:p-10 lg:p-16 overflow-x-hidden"> {/* */}

        {/* Grille de fond (Identique) */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04] pointer-events-none z-0"></div> {/* */}

        {/* Wrapper de contenu (Identique) */}
        <div className="relative z-10 max-w-6xl mx-auto space-y-20 lg:space-y-28"> {/* */}

          {/* --- Header Section --- */}
          <header className="pt-6 md:pt-12 space-y-8"> {/* */}

            {/* --- Ajout d'un conteneur Flex pour aligner nom et image --- */}
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
              {/* Image de profil */}
              <div className="flex-shrink-0"> {/* Empêche l'image de rétrécir */}
                <Image
                  src="/profile-pic.jpg" // Chemin vers ton image dans /public
                  alt="Photo de Arthur Daguier"
                  width={150} // Largeur souhaitée (moins large)
                  height={150} // Hauteur (garder carré ou ajuster)
                  className="rounded-full border-2 border-terminal-green/50 shadow-lg shadow-terminal-green/20 object-cover" // Cadre arrondi, bordure et ombre subtile
                  priority // Charger l'image en priorité
                />
              </div>

              {/* Nom avec Glitch et Curseur */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-terminal-green animate-glitch-slow relative inline-block tracking-tighter"> {/* */}
                Arthur Daguier
                {/* Le curseur reste attaché au nom */}
                <span className="absolute -right-5 top-1/2 -translate-y-1/2 w-2 h-10 bg-terminal-green animate-blink hidden sm:block"></span> {/* */}
              </h1>
            </div>
            {/* --- Fin du conteneur Flex --- */}


            {/* Intro Text (Identique) */}
            <div className="text-xl sm:text-2xl text-neutral-300 leading-relaxed max-w-3xl font-light"> {/* */}
              <span className="text-terminal-green select-none mr-2">$&gt;</span> {/* */}
              Etudiant à Epitech Rennes, je suis passionné par l'informatique.
            </div>

            {/* Contact Info Grid (Identique) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-base pt-6 max-w-xl"> {/* */}
              {contactLinks.map((link) => (
                <div key={link.name} className="flex items-baseline gap-2 group">
                  <span className="text-green-600 font-medium w-20 shrink-0">{link.name}</span> {/* */}
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 group-hover:text-terminal-green group-hover:underline decoration-terminal-green decoration-1 underline-offset-4 transition-colors duration-200 truncate" //
                  >
                    {link.value}
                  </a>
                </div>
              ))}
            </div>
          </header>

          {/* --- Projects Section (Identique) --- */}
          <main className="space-y-10"> {/* */}
            {/* Section Title */}
            <h2 className="text-4xl font-semibold text-terminal-green border-b-2 border-terminal-green/50 pb-3 flex items-center gap-3"> {/* */}
              <span className="text-terminal-green select-none text-3xl">#</span> {/* */}
              Projets Récents
            </h2>

            {/* Projects Grid (Identique) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* */}
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="relative p-6 border border-green-800 bg-neutral-900/40 rounded-md
                             hover:bg-neutral-800/60 hover:border-terminal-green
                             transition-all duration-300 transform hover:scale-[1.03]
                             hover:shadow-xl hover:shadow-terminal-green/10 group flex flex-col" //
                >
                  <h3 className="text-2xl font-medium text-terminal-green mb-3 flex items-center gap-2"> {/* */}
                    <span className="text-green-600 select-none">&gt;</span> {/* */}
                    {project.title}
                  </h3>
                  <p className="text-base text-neutral-300 leading-relaxed font-light flex-grow"> {/* */}
                    {project.description}
                  </p>
                  <div className="absolute left-0 bottom-0 h-0.5 w-full bg-terminal-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div> {/* */}
                </article>
              ))}
            </div>
          </main>

          {/* --- Skills & Footer Section (Identique) --- */}
          <footer className="space-y-12 pt-16 border-t border-neutral-700/50"> {/* */}
            {/* Buttons Row (Identique) */}
            <div className="flex flex-wrap gap-6 items-center"> {/* */}
              <a
                href="/cv_arthur_daguier.pdf" // Assure-toi que ce fichier existe dans /public
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-terminal-green text-terminal-green
                           hover:bg-terminal-green hover:text-black hover:shadow-lg hover:shadow-terminal-green/30
                           transition-all duration-200 text-lg font-semibold rounded-sm group" //
              >
                 <svg className="w-5 h-5 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg> {/* */}
                 CV
              </a>
              <Link
                href="/realisations" // Assure-toi que cette route existe ou modifie le lien
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-600 text-neutral-400
                           hover:border-terminal-green hover:text-terminal-green
                           hover:shadow-lg hover:shadow-terminal-green/20
                           transition-all duration-200 text-lg font-semibold rounded-sm group" //
              >
                <svg className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21h7a2 2 0 002-2V9a2 2 0 00-2-2h-7m-4 0H5a2 2 0 00-2 2v11a2 2 0 002 2h11M13 7l-3-3m0 0l-3 3m3-3v11"></path></svg> {/* */}
                Réalisations
              </Link>
            </div>

            {/* Skills Grids (Identique) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12"> {/* */}
              {/* Compétences */}
              <div>
                <h3 className="text-2xl font-semibold text-terminal-green mb-4 border-b border-green-800 pb-2">Compétences</h3> {/* */}
                <ul className="space-y-2 text-neutral-300 font-light list-inside"> {/* */}
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-1">&gt;</span> HTML, CSS, JavaScript, TypeScript</li> {/* */}
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-1">&gt;</span> React, Next.js, Tailwind CSS</li> {/* */}
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-1">&gt;</span> Node.js, Express, PostgreSQL</li> {/* */}
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-1">&gt;</span> Python, bash, java</li> {/* */}
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-1">&gt;</span> Git, Github</li> {/* */}
                </ul>
              </div>
              {/* Progrès */}
              <div>
                <h3 className="text-2xl font-semibold text-terminal-green mb-4 border-b border-green-800 pb-2">Progrès</h3> {/* */}
                <ul className="space-y-2 text-neutral-300 font-light list-inside"> {/* */}
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-1">&gt;</span> Design responsive & Accessibilité</li> {/* */}
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-1">&gt;</span> Optimisation performances (Core Web Vitals)</li> {/* */}
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-1">&gt;</span> Apprentissage des conventions git Karma et convention de code</li> {/* */}
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-1">&gt;</span> Apprentissage de l'utilisation de git</li> {/* */}
                </ul>
              </div>
              {/* Défis Relevés */}
              <div>
                <h3 className="text-2xl font-semibold text-terminal-green mb-4 border-b border-green-800 pb-2">Défis Relevés</h3> {/* */}
                <ul className="space-y-2 text-neutral-300 font-light list-inside"> {/* */}
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-1">&gt;</span> Construction d'un site web (front et back-end)</li> {/* */}
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-1">&gt;</span> Gestion Base de Donné postgres</li> {/* */}
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-1">&gt;</span> Animations complexes(TypeScript)</li> {/* */}
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-1">&gt;</span> Programation Orienté Objet (java)</li> {/* */}
                </ul>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </>
  );
};

export default PortfolioPage;