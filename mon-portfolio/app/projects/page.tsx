
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const detailedProjects = [
  { 
    id: 1, 
    title: 'Projet Hangman', 
    description: 'Un petit jeu Hangman créé avec la librairie Pygame.',
    longDescription: 'Ce projet visait à réutiliser les connaissances acquises pendant les deux premières semaines de formation à Epitech.',
    techStack: ['Python 3', 'Pygame'],
    liveLink: '#',
    repoLink: '#',
  },
  { 
    id: 2, 
    title: 'Job Board', 
    description: 'Projet de développement web inspiré de sites comme HelloWork et consorts.',
    longDescription: 'Projet visant à respecter un cahier des charges présenté sous forme d’étapes de développement.',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Express'],
    liveLink: '#',
    repoLink: '#',
  },
  { 
    id: 3, 
    title: 'Portfolio', 
    description: 'Projet web libre destiné à présenter mes compétences.',
    longDescription: 'Je vous invite à explorer le site sur lequel vous êtes actuellement.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: null,
    repoLink: '#',
  },
];

const ProjectsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mes Projets - Arthur Daguier</title>
        <meta name="description" content="Découvrez les projets détaillés d'Arthur Daguier." />
      </Head>

      <div className="relative bg-gradient-to-br from-terminal-dark via-black to-neutral-950 min-h-screen text-terminal-light-gray font-mono p-6 sm:p-10 lg:p-16 overflow-x-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04] pointer-events-none z-0"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto space-y-20 lg:space-y-24">
          <header className="pt-6 md:pt-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-terminal-green mb-10 border-b-2 border-terminal-green/50 pb-4 flex items-center gap-3">
              <span className="text-terminal-green select-none text-4xl">#</span>
              Mes Projets Détaillés
            </h1>
          </header>

          <main className="space-y-16 lg:space-y-20">
            {detailedProjects.map((project) => (
              <section 
                key={project.id} 
                className="p-6 md:p-8 border border-neutral-700 rounded-lg bg-neutral-900/50 backdrop-blur-sm shadow-lg shadow-black/30"
              >
                <div className="mb-6 pb-4 border-b border-green-800/50">
                  <h2 className="text-3xl sm:text-4xl font-semibold text-terminal-green mb-2 flex items-center gap-3">
                    <span className="text-green-600 select-none text-2xl">&gt;</span>
                    {project.title}
                  </h2>
                  <p className="text-lg text-neutral-400 font-light">{project.description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-xl text-green-500 mb-2 font-medium">Description détaillée :</h3>
                      <p className="text-neutral-300 leading-relaxed font-light">
                        {project.longDescription}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl text-green-500 mb-2 font-medium">Technologies utilisées :</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-green-900/50 border border-green-700 text-green-300 text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1 space-y-6">
                    <div className="space-y-3 pt-2">
                      {project.liveLink && project.liveLink !== '#' && (
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-terminal-green hover:text-green-300 hover:underline decoration-1 underline-offset-4 transition-colors duration-200 group"
                        >
                          <svg
                            className="w-5 h-5 transition-transform group-hover:scale-110"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            ></path>
                          </svg>
                          Voir le site live
                        </Link>
                      )}
                      {project.repoLink && project.repoLink !== '#' && (
                        <Link
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-terminal-green hover:text-green-300 hover:underline decoration-1 underline-offset-4 transition-colors duration-200 group"
                        >
                          <svg
                            className="w-5 h-5 transition-transform group-hover:scale-110"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
                            ></path>
                          </svg>
                          Voir le code (GitHub)
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
