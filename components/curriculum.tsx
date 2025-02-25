interface CurriculumCardProps {
  isPortuguese: boolean;
}

export default function CurriculumCard({ isPortuguese }: CurriculumCardProps) {
  const content = {
    en: {
      name: "leonardo franca almeida silva",
      description:
        "Computer Engineering Student | Automation Developer | Technology Enthusiast",
      sections: {
        contact: "Contact",
        skills: {
          title: "Skills",
          programming: "Programming",
          operatingSystems: "Operating Systems",
          tools: "Tools",
          languages: "Languages",
        },
      },
      languagesList: ["Portuguese", "English"],
    },
    ptBR: {
      name: "leonardo franca almeida silva",
      description:
        "Estudante de Engenharia da Computação | Desenvolvedor de Automação | Entusiasta de Tecnologia",
      sections: {
        contact: "Contato",
        skills: {
          title: "Habilidades",
          programming: "Programação",
          operatingSystems: "Sistemas Operacionais",
          tools: "Ferramentas",
          languages: "Idiomas",
        },
      },
      languagesList: ["Português", "Inglês"],
    },
  };

  const language = isPortuguese ? "ptBR" : "en";

  return (
    <section className="text-white w-[60vw]">
      <div className="bg-blue-900 px-6 pt-8 pb-6 shadow-lg flex flex-col justify-center gap-4">
        <h1 className="uppercase text-2xl font-bold">
          {content[language].name}
        </h1>
        <p>{content[language].description}</p>
      </div>

      <div className="flex w-[100%]">
        <section className="w-[33%] bg-black p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h2 className="uppercase text-2xl border-b-2 border-white">
                {content[language].sections.contact}
              </h2>

              <ul className="text-sm">
                <li>francaleonardo902@gmail.com</li>
                <li>Salvador, Brazil</li>
                <li>Leofrancaa</li>
                <li>Leofrancaa</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="uppercase text-2xl border-b-2 border-white">
                {content[language].sections.skills.title}
              </h2>

              <div className="flex flex-col gap-2">
                <h3>{content[language].sections.skills.programming}</h3>
                <ul className="text-sm">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>C</li>
                  <li>Python</li>
                  <li>React</li>
                  <li>JS</li>
                  <li>TypeScript</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <h3>{content[language].sections.skills.operatingSystems}</h3>
                <ul className="text-sm">
                  <li>Linux</li>
                  <li>Windows</li>
                  <li>Mac OS</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <h3>{content[language].sections.skills.tools}</h3>
                <ul className="text-sm">
                  <li>Git</li>
                  <li>Docker</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <h3>{content[language].sections.skills.languages}</h3>
                <ul className="text-sm">
                  {content[language].languagesList.map((lang, index) => (
                    <li key={index}>{lang}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-4 w-[67%] bg-gray-500 p-4">
          <h2 className="uppercase text-2xl border-b-2 border-white">
            education
          </h2>

          <h2 className="uppercase text-2xl border-b-2 border-white">
            professional experience
          </h2>

          <h2 className="uppercase text-2xl border-b-2 border-white">
            projects
          </h2>

          <h2 className="uppercase text-2xl border-b-2 border-white">
            extra curriculars
          </h2>
        </div>
      </div>
    </section>
  );
}
