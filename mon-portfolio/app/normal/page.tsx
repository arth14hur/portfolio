import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react'; // Pour utiliser Fragment si nécessaire

// Tes données de projets
const projects = [
  { id: 1, title: 'Projet Apollo', description: 'Simulateur de mission spatiale interactive pour l\'exploration lunaire.' },
  { id: 2, title: 'CryptoPulse Dashboard', description: 'Tableau de bord de suivi des cryptomonnaies en temps réel avec graphiques prédictifs.' },
  { id: 3, title: 'EcoTrack AI', description: 'Application mobile pour le suivi de l\'empreinte carbone personnelle et des objectifs écologiques.' },
  { id: 4, title: 'Neural Synth', description: 'Générateur de musique basé sur l\'IA avec personnalisation des genres et des instruments.' },
  { id: 5, title: 'CyberGuard VPN', description: 'Service VPN sécurisé avec des fonctionnalités de tunneling avancé et une interface minimaliste.' },
];

const contactLinks = [
  { name: 'Email', value: 'a.daguier@example.com', href: 'mailto:a.daguier@example.com' },
  { name: 'Phone', value: '+33 6 32 34 56 78', href: 'tel:+33632345678' },
  { name: 'LinkedIn', value: 'arthurdag_li', href: 'https://linkedin.com/in/arthur' },
  { name: 'GitHub', value: 'arthurdag_gh', href: 'https://github.com/arthur' },
];

const PortfolioPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Arthur Daguier - Cypher Portfolio</title>
        <meta name="description" content="Portfolio d'Arthur Daguier, développeur web passionné." />
      </Head>

      {/* Conteneur principal avec arrière-plan plus riche et police personnalisée */}
      <div className="relative bg-gradient-to-br from-terminal-dark to-black min-h-screen text-terminal-light-gray font-mono p-4 sm:p-8 overflow-hidden">
        
        {/* Effet de grille/scanline en arrière-plan */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none z-0"></div>
        
        {/* Wrapper de contenu centré */}
        <div className="relative z-10 max-w-5xl mx-auto space-y-16 lg:space-y-24">

          {/* --- Section d'introduction (Header) --- */}
          <header className="pt-8 md:pt-16 space-y-6">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-terminal-green animate-glitch-slow relative inline-block">
              Arthur Daguier
              <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-8 bg-terminal-green animate-blink"></span>
            </h1>
            
            <div className="text-lg sm:text-xl text-terminal-light-gray leading-relaxed max-w-2xl">
              <span className="text-terminal-green select-none">$&gt; </span>Développeur web passionné par l&apos;architecture front-end et l&apos;expérience utilisateur. J&apos;explore les limites du design interactif et de la performance.
            </div>
            
            {/* Infos de contact stylisées */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm pt-4">
              {contactLinks.map((link) => (
                <div key={link.name} className="flex items-center gap-2">
                  <span className="text-terminal-green font-bold w-16 md:w-20 shrink-0">{link.name}:</span>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-terminal-light-gray hover:text-terminal-green hover:underline decoration-terminal-green decoration-2 underline-offset-4 transition-colors duration-200"
                  >
                    {link.value}
                  </a>
                </div>
              ))}
            </div>
          </header>

          {/* --- Section Projets (Main) --- */}
          <main className="space-y-8">
            <h2 className="text-3xl font-bold text-terminal-green border-b-2 border-terminal-green pb-2">
              <span className="text-terminal-green select-none"># </span>Projets Récents
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <article 
                  key={project.id} 
                  className="relative p-6 border-2 border-terminal-green bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-terminal-green/20 group"
                >
                  <h3 className="text-xl font-semibold text-terminal-green mb-2 group-hover:underline group-hover:decoration-terminal-green group-hover:decoration-2 underline-offset-4">
                    <span className="text-terminal-green select-none">&gt; </span>{project.title}
                  </h3>
                  <p className="text-base text-terminal-light-gray leading-relaxed">{project.description}</p>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-terminal-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> {/* Effet de survol sur la bordure du bas */}
                </article>
              ))}
            </div>
          </main>

          {/* --- Section Compétences & CV (Footer) --- */}
          <footer className="space-y-8 pt-12 border-t border-gray-700">
            {/* Boutons CV / Réalisations */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="/cv_arthur_daguier.pdf" 
                download 
                className="px-6 py-3 border-2 border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black transition-colors duration-200 text-lg font-semibold flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Télécharger CV
              </a>
              <Link 
                href="/realisations" 
                className="px-6 py-3 border-2 border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black transition-colors duration-200 text-lg font-semibold flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21h7a2 2 0 002-2V9a2 2 0 00-2-2h-7m-4 0H5a2 2 0 00-2 2v11a2 2 0 002 2h11M13 7l-3-3m0 0l-3 3m3-3v11"></path></svg>
                Mes Réalisations
              </Link>
            </div>

            {/* Listes de compétences, progrès, défis */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-terminal-green mb-3">Compétences</h3>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>HTML, CSS, JavaScript, TypeScript</li>
                  <li>React, Next.js, Redux, Zustand</li>
                  <li>Tailwind CSS, SCSS, Styled-components</li>
                  <li>Node.js, Express, MongoDB, PostgreSQL</li>
                  <li>Git, Docker, CI/CD</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-terminal-green mb-3">Progrès</h3>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Maîtrise du design responsive avancé</li>
                  <li>Optimisation des performances et SEO</li>
                  <li>Développement d&apos;APIs RESTful sécurisées</li>
                  <li>Contribution open-source</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-terminal-green mb-3">Défis Relevés</h3>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Intégration de micro-services complexes</li>
                  <li>Gestion de monorepos avec Turborepo</li>
                  <li>Développement d&apos;animations web performantes</li>
                  <li>Mise en place de tests end-to-end</li>
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