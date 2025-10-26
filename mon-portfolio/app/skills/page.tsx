// app/skills/page.tsx
import type { NextPage } from 'next';
import Head from 'next/head';

const technicalSkills = [
  {
    category: "Développement Web",
    context: ["Portfolio", "Joblinker", "Piscine Web"],
    skills: ["JavaScript", "TypeScript", "Next.js", "Node.js", "PHP", "PostgreSQL", "Express", "HTML", "CSS"]
  },
  {
    category: "Scripting et automatisation",
    context: ["Piscine Python"],
    skills: ["Python 3"]
  },
  {
    category: "Développement logiciel",
    context: ["Piscine Java"],
    skills: ["Java"]
  }
];

const softSkills = [
  { name: "Relationnel client", description: "Capacité à communiquer efficacement et à établir des relations de confiance." },
  { name: "Gestion d'entreprise", description: "Compréhension des aspects administratifs, financiers et stratégiques." },
  { name: "Autonomie", description: "Capacité à travailler de manière indépendante et à prendre des initiatives." },
  { name: "Travail en équipe", description: "Aptitude à collaborer et à contribuer à un objectif commun." },
];

const diplomas = [
  { name: "BTSA GDEA", description: null },
  { name: "Baccalauréat", description: "(Spécialités Mathématiques et Physique, option Mathématiques expertes)" },
];

const SkillsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Compétences - Arthur Daguier</title>
        <meta
          name="description"
          content="Découvrez les compétences techniques et les qualités personnelles d'Arthur Daguier."
        />
      </Head>

      <div className="relative bg-gradient-to-br from-terminal-dark via-black to-neutral-950 min-h-screen text-terminal-light-gray font-mono p-6 sm:p-10 lg:p-16 overflow-x-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-6xl mx-auto space-y-20 lg:space-y-24 pb-16">
          <header className="pt-6 md:pt-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-terminal-green mb-10 border-b-2 border-terminal-green/50 pb-4 flex items-center gap-3">
              <span className="text-terminal-green select-none text-4xl">#</span>
              Compétences & Qualités
            </h1>
          </header>

          <section className="space-y-12">
            <h2 className="text-3xl font-semibold text-terminal-green border-b border-green-800 pb-2">
              Compétences techniques
            </h2>

            {technicalSkills.map((category) => (
              <div key={category.category} className="pl-4 md:pl-8">
                <h3 className="text-2xl text-green-400 mb-3">{category.category}</h3>
                <div className="mb-4 text-sm text-neutral-500 italic">
                  Contextes : {category.context.join(', ')}
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 bg-neutral-800 border border-neutral-700 text-neutral-300 text-base rounded hover:border-green-600 hover:text-green-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="space-y-8 pt-12 border-t border-neutral-700/50">
            <h2 className="text-3xl font-semibold text-terminal-green border-b border-green-800 pb-2">
              Diplômes
            </h2>

            <ul className="space-y-4 text-lg text-neutral-300 font-light pl-4 md:pl-8">
              {diplomas.map((diploma) => (
                <li key={diploma.name} className="flex items-start gap-3">
                  <span className="text-green-600 mt-1 shrink-0">&gt;</span>
                  <div>
                    <span className="font-medium text-green-400">{diploma.name}</span>
                    {diploma.description && (
                      <span className="ml-2 text-neutral-400">{diploma.description}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-8 pt-12 border-t border-neutral-700/50">
            <h2 className="text-3xl font-semibold text-terminal-green border-b border-green-800 pb-2">
              Qualités personnelles
            </h2>

            <ul className="space-y-4 text-lg text-neutral-300 font-light pl-4 md:pl-8">
              {softSkills.map((skill) => (
                <li key={skill.name} className="flex items-start gap-3">
                  <span className="text-green-600 mt-1 shrink-0">&gt;</span>
                  <div>
                    <span className="font-medium text-green-400">{skill.name} :</span>
                    <span className="ml-2 text-neutral-400">{skill.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <footer className="text-center text-sm text-neutral-600 pt-10">
            &copy; {new Date().getFullYear()} Arthur Daguier — Tous droits réservés
          </footer>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
