// app/skills/page.tsx
import type { NextPage } from 'next';
import Head from 'next/head';

// --- Données des Compétences ---
const technicalSkills = [
  {
    category: "Développement Web",
    context: ["Portfolio", "Joblinker", "Piscine Web"],
    skills: ["JavaScript", "TypeScript", "Next.js", "Node.js", "PHP", "PostgreSQL", "Express", "HTML", "CSS"]
  },
  {
    category: "Scripting & Automatisation",
    context: ["Piscine Python"],
    skills: ["Python 3"]
  },
  {
    category: "Développement Logiciel",
    context: ["Piscine Java"],
    skills: ["Java"]
  }
];

const softSkills = [
  { name: "BTA GDEA", description: "Brevet de Technicien Agricole en Gestion et Dév. de l'Entreprise Agricole (mention complémentaire)." },
  { name: "Relationnel Clients", description: "Capacité à communiquer efficacement et à établir des relations de confiance." },
  { name: "Gestion d'entreprise", description: "Compréhension des aspects administratifs, financiers et stratégiques." },
  { name: "Autonomie", description: "Capacité à travailler de manière indépendante et à prendre des initiatives." },
  { name: "Travail en équipe", description: "Aptitude à collaborer et à contribuer à un objectif commun." },
];

const SkillsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Compétences - Arthur Daguier</title>
        <meta name="description" content="Découvrez les compétences techniques et les qualités personnelles d'Arthur Daguier." />
      </Head>

      {/* --- Conteneur Principal (Identique aux autres pages) --- */}
      <div className="relative bg-gradient-to-br from-terminal-dark via-black to-neutral-950 min-h-screen text-terminal-light-gray font-mono p-6 sm:p-10 lg:p-16 overflow-x-hidden"> {/* */}

        {/* Grille de fond (Identique) */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04] pointer-events-none z-0"></div> {/* */}

        {/* Wrapper de contenu (Identique) */}
        <div className="relative z-10 max-w-6xl mx-auto space-y-20 lg:space-y-24 pb-16"> {/* */}

          {/* --- Titre de la Page --- */}
          <header className="pt-6 md:pt-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-terminal-green mb-10 border-b-2 border-terminal-green/50 pb-4 flex items-center gap-3"> {/* */}
              <span className="text-terminal-green select-none text-4xl">#</span> {/* */}
              Compétences & Qualités
            </h1>
          </header>

          {/* --- Section Compétences Techniques --- */}
          <section className="space-y-12">
            <h2 className="text-3xl font-semibold text-terminal-green border-b border-green-800 pb-2">// Compétences Techniques</h2> {/* Style cohérent */}
            
            {technicalSkills.map(category => (
              <div key={category.category} className="pl-4 md:pl-8">
                <h3 className="text-2xl text-green-400 mb-3">{category.category}</h3> {/* Titre de catégorie */}
                
                {/* Contexte */}
                <div className="mb-4 text-sm text-neutral-500 italic">
                  Contextes : {category.context.join(', ')}
                </div>

                {/* Liste des compétences (badges) */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-4 py-1.5 bg-neutral-800 border border-neutral-700 text-neutral-300 text-base rounded hover:border-green-600 hover:text-green-300 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* --- Section Soft Skills --- */}
          <section className="space-y-8 pt-12 border-t border-neutral-700/50"> {/* Séparateur */}
            <h2 className="text-3xl font-semibold text-terminal-green border-b border-green-800 pb-2">// Qualités Personnelles</h2> {/* Style cohérent */}

            <ul className="space-y-4 text-lg text-neutral-300 font-light pl-4 md:pl-8">
              {softSkills.map(skill => (
                <li key={skill.name} className="flex items-start gap-3">
                  <span className="text-green-600 mt-1 shrink-0">&gt;</span> {/* Puce style terminal */}
                  <div>
                    <span className="font-medium text-green-400">{skill.name}:</span> {/* Nom en vert */}
                    <span className="ml-2 text-neutral-400">{skill.description}</span> {/* Description */}
                  </div>
                </li>
              ))}
            </ul>
          </section>
          
           {/* --- Footer Minimaliste (Optionnel) --- */}
           <footer className="text-center text-sm text-neutral-600 pt-10">
             &copy; {new Date().getFullYear()} Arthur Daguier // Tous droits réservés
           </footer>

        </div>
      </div>
    </>
  );
};

export default SkillsPage;