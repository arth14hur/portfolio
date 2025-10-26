import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Projet Hangman',
    description: 'Un petit jeu Hangman créé avec la bibliothèque Pygames',
    longDescription:
      'Ce projet visait à réutiliser les connaissances acquises pendant les deux premières semaines de formation à Epitech.',
    techStack: ['Python 3', 'Pygames'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 2,
    title: 'Job board',
    description: 'Projet de développement Web basé sur des sites comme Hello Work et consort',
    longDescription:
      "Projet visant à respecter un cahier des charges présenté sous forme d&apos;étapes de développement",
    techStack: ['Next.js', 'TypeScript', 'Nodejs', 'Tailwind CSS', 'Postgresql', 'express'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 3,
    title: 'Portfolio',
    description: 'Projet Web libre dans le but de présenter nos compétences.',
    longDescription: 'Je vous invite à explorer le site sur lequel vous êtes.',
    techStack: ['Next.js', 'Typescript', 'Tailwind CSS'],
    liveLink: null,
    repoLink: '#',
  },
];

const contactLinks = [
  { name: 'Email:', value: 'arthur.daguier@epitech.eu', href: 'mailto:arthur.daguier@epitech.eu' },
  { name: 'Portable:', value: '+33 7 44 52 86 35', href: 'tel:+33744528635' },
  { name: 'LinkedIn:', value: 'arthur', href: 'https://linkedin.com' },
  { name: 'GitHub:', value: 'arthur github', href: 'https://github.com' },
];

const PortfolioPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Arthur Daguier - Portfolio</title>
        <meta name="description" content="Portfolio d&apos;Arthur Daguier, développeur web." />
      </Head>

      <div className="relative bg-gradient-to-br from-terminal-dark via-black to-neutral-950 min-h-screen text-terminal-light-gray font-mono p-6 sm:p-10 lg:p-16 overflow-x-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-6xl mx-auto space-y-20 lg:space-y-28">
          <header className="pt-6 md:pt-12 space-y-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
              <div className="flex-shrink-0">
                <Image
                  src="/profile-pic.jpg"
                  alt="Photo de Arthur Daguier"
                  width={150}
                  height={150}
                  className="rounded-full border-2 border-terminal-green/50 shadow-lg shadow-terminal-green/20 object-cover"
                  priority
                />
              </div>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-terminal-green animate-glitch-slow relative inline-block tracking-tighter">
                Arthur Daguier
                <span className="absolute -right-5 top-1/2 -translate-y-1/2 w-2 h-10 bg-terminal-green animate-blink hidden sm:block"></span>
              </h1>
            </div>
            <div className="text-xl sm:text-2xl text-neutral-300 leading-relaxed max-w-3xl font-light">
              <span className="text-terminal-green select-none mr-2">$&gt;</span>
              Étudiant à Epitech Rennes, je suis passionné par l&apos;informatique.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-base pt-6 max-w-xl">
              {contactLinks.map((link) => (
                <div key={link.name} className="flex items-baseline gap-2 group">
                  <span className="text-green-600 font-medium w-20 shrink-0">{link.name}</span>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 group-hover:text-terminal-green group-hover:underline decoration-terminal-green decoration-1 underline-offset-4 transition-colors duration-200 truncate"
                  >
                    {link.value}
                  </a>
                </div>
              ))}
            </div>
          </header>

          <main className="space-y-10">
            <h2 className="text-4xl font-semibold text-terminal-green border-b-2 border-terminal-green/50 pb-3 flex items-center gap-3">
              <span className="text-terminal-green select-none text-3xl">#</span>
              Projets Récents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projets/${project.id}`}
                  className="flex"
                >
                  <article
                    className="relative p-6 border border-green-800 bg-neutral-900/40 rounded-md
                 hover:bg-neutral-800/60 hover:border-terminal-green
                 transition-all duration-300 transform hover:scale-[1.03]
                 hover:shadow-xl hover:shadow-terminal-green/10 group flex flex-col w-full"
                  >
                    <h3 className="text-2xl font-medium text-terminal-green mb-3 flex items-center gap-2">
                      <span className="text-green-600 select-none">&gt;</span>
                      {project.title}
                    </h3>
                    <p className="text-base text-neutral-300 leading-relaxed font-light flex-grow">
                      {project.description}
                    </p>
                    <div className="absolute left-0 bottom-0 h-0.5 w-full bg-terminal-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </article>
                </Link>
              ))}

            </div>
          </main>

          <footer className="space-y-12 pt-16 border-t border-neutral-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
              <div>
                <h3 className="text-2xl font-semibold text-terminal-green mb-4 border-b border-green-800 pb-2">
                  Compétences
                </h3>
                <ul className="space-y-2 text-neutral-300 font-light list-inside">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">&gt;</span> HTML, CSS, JavaScript, TypeScript
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">&gt;</span> React, Next.js, Tailwind CSS
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">&gt;</span> Node.js, Express, PostgreSQL
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">&gt;</span> Python, bash, java
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">&gt;</span> Git, Github
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-terminal-green mb-4 border-b border-green-800 pb-2">
                  Progrès
                </h3>
                <ul className="space-y-2 text-neutral-300 font-light list-inside">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">&gt;</span> Design responsive & Accessibilité
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">&gt;</span> Optimisation performances (Core Web Vitals)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">&gt;</span> Apprentissage des conventions git Karma et convention de code
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">&gt;</span> Apprentissage de l&apos;utilisation de git
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-terminal-green mb-4 border-b border-green-800 pb-2">
                  Défis Relevés
                </h3>
                <ul className="space-y-2 text-neutral-300 font-light list-inside">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">&gt;</span> Construction d&apos;un site web (front et back-end)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">&gt;</span> Gestion Base de Données postgres
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">&gt;</span> Animations complexes(TypeScript)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">&gt;</span> Programmation Orientée Objet (java)
                  </li>
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
