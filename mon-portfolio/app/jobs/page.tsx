import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const jobExperiences = [
  {
    id: 1,
    company: 'Feeling Express',
    role: 'Chauffeur-livreur VL',
    period: 'Janvier 2025 à Août 2025',
    location: 'Bourguébus',
    description: 'Chargé du transport de produits pharmaceutiques pour le client CERP.',
  },
  {
    id: 2,
    company: 'Atelier Chardine',
    role: 'Apprenti mécanicien agricole',
    period: 'Avril 2023 - Juin 2024',
    location: 'Torigny-sur-Vire',
    description: 'Apprentissage en vue de l’obtention d’un BTSA GDEA.',
    keyAchievements: [
      'Conception et réalisation d’un outil de A à Z.',
    ],
    techStack: ['Bases de programmation de machines industrielles'],
  },
];

const currentStatus = {
  seeking: true,
  statusText: 'Actuellement en recherche active d’opportunités d’alternance dans les domaines de l’IT.',
  contactLink: '/contact',
};

const JobsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Parcours professionnel - Arthur Daguier</title>
        <meta name="description" content="Découvrez le parcours professionnel et les expériences d’Arthur Daguier." />
      </Head>

      <div className="relative bg-gradient-to-br from-terminal-dark via-black to-neutral-950 min-h-screen text-terminal-light-gray font-mono p-6 sm:p-10 lg:p-16 overflow-x-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-6xl mx-auto space-y-20 lg:space-y-24">
          <header className="pt-6 md:pt-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-terminal-green mb-10 border-b-2 border-terminal-green/50 pb-4 flex items-center gap-3">
              <span className="text-terminal-green select-none text-4xl">#</span>
              Parcours professionnel
            </h1>
          </header>

          {currentStatus.seeking && (
            <section className="p-6 md:p-8 border border-green-700 rounded-lg bg-green-900/20 shadow-lg shadow-black/30">
              <h2 className="text-2xl font-semibold text-green-400 mb-3">Statut actuel</h2>
              <p className="text-lg text-neutral-300 leading-relaxed font-light mb-4">
                {currentStatus.statusText}
              </p>
              <Link
                href={currentStatus.contactLink || '/#contact'}
                className="inline-flex items-center gap-2 px-4 py-2 border border-terminal-green text-terminal-green 
                           hover:bg-terminal-green hover:text-white hover:shadow-md hover:shadow-terminal-green/30 
                           transition-colors duration-200 text-base font-semibold rounded-sm group"
              >
                Me contacter
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
            </section>
          )}

          <main className="space-y-12 lg:space-y-16">
            {jobExperiences.map((job) => (
              <section
                key={job.id}
                className="p-6 md:p-8 border border-neutral-700 rounded-lg bg-neutral-900/50 backdrop-blur-sm shadow-lg shadow-black/30"
              >
                <div className="mb-6 pb-4 border-b border-green-800/50">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-terminal-green flex items-center gap-3">
                      <span className="text-green-600 select-none text-xl">&gt;</span>
                      {job.role}
                    </h2>
                    <span className="text-sm text-neutral-500 mt-1 sm:mt-0">{job.period}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center text-neutral-400 text-sm">
                    <p className="font-medium text-base">{job.company}</p>
                    <p>{job.location}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg text-green-500 mb-2 font-medium">// Description du poste</h3>
                    <p className="text-neutral-300 leading-relaxed font-light whitespace-pre-line">
                      {job.description}
                    </p>
                  </div>

                  {job.keyAchievements && job.keyAchievements.length > 0 && (
                    <div>
                      <h3 className="text-lg text-green-500 mb-2 font-medium">// Réalisations clés</h3>
                      <ul className="space-y-2 text-neutral-300 font-light list-inside">
                        {job.keyAchievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">-</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {job.techStack && job.techStack.length > 0 && (
                    <div>
                      <h3 className="text-lg text-green-500 mb-2 font-medium">// Environnement technique</h3>
                      <div className="flex flex-wrap gap-2">
                        {job.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-neutral-800 border border-neutral-700 text-neutral-400 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </>
  );
};

export default JobsPage;
