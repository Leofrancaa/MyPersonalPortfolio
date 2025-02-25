"use client";

import { useState } from "react";
import CurriculumCard from "../../components/curriculum";

export default function Curriculum() {
  const [isPortuguese, setIsPortuguese] = useState(false);

  const translations = {
    en: {
      toggleTheme: "Toggle Theme",
      viewButton: "View in Portuguese-BR",
      // Adicione outras traduções para inglês aqui
    },
    ptBR: {
      toggleTheme: "Alternar Tema",
      viewButton: "View in English",
      // Adicione outras traduções para português aqui
    },
  };

  const toggleLanguage = () => {
    setIsPortuguese(!isPortuguese);
  };

  const currentLanguage = isPortuguese ? "ptBR" : "en";

  return (
    <main className="bg-transparent flex items-center justify-center p-4 gap-4 z-30 relative mt-20 mb-20">
      <div>
        <section className="flex items-center justify-between">
          <div className="flex gap-4">
            <button>{translations[currentLanguage].toggleTheme}</button>
            <button onClick={toggleLanguage}>
              {translations[currentLanguage].viewButton}
            </button>
          </div>
          <button>icon</button>
        </section>

        <section>
          <CurriculumCard isPortuguese={isPortuguese}></CurriculumCard>
        </section>
      </div>
    </main>
  );
}
