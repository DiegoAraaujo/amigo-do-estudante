import { useState } from "react";

import type { MoodOption } from "../interfaces";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import type { Factor } from "../interfaces";
import EnergyLevelSelector from "./EnergyLevelSelector";
import FactorsSelection from "./FactorsSelection";
import MoodSelection from "./MoodSelection";
import PersonalNotes from "./PersonalNotes";

const MoodRegisterForm = () => {
  const { darkTheme } = useDarkTheme();
  const [selectedMood, setSelectedMood] = useState<MoodOption | null>(null);
  const [selectedFactors, setSelectedFactors] = useState<Factor[]>([]);
  const [energyLevel, setEnergyLevel] = useState(5);
  const [personalNotes, setPersonalNotes] = useState("");

  return (
    <section
      className={`w-full p-6 ${
        darkTheme ? "bg-surface-dark" : "bg-surface-light"
      } rounded-xl`}
    >
      <div className="mb-3">
        <h1
          className={`text-lg font-semibold sm:text-2xl ${
            darkTheme ? "text-primary-dark" : "text-primary-light"
          }`}
        >
          Como você está se sentindo hoje?
        </h1>
        <p
          className={`${
            darkTheme ? "text-muted-dark" : "text-muted-light"
          } text-sm`}
        >
          Registre seu humor e fatores que influenciam seu bem-estar
        </p>
      </div>

      <MoodSelection
        selectedMood={selectedMood}
        setSelectedMood={setSelectedMood}
      />
      <EnergyLevelSelector
        energyLevel={energyLevel}
        setEnergyLevel={setEnergyLevel}
      />
      <FactorsSelection
        selectedFactors={selectedFactors}
        setSelectedFactors={setSelectedFactors}
      />
      <PersonalNotes
        personalNotes={personalNotes}
        setPersonalNotes={setPersonalNotes}
      />

      <div className="flex justify-center">
        <button className="text-primary-dark w-full max-w-2xl cursor-pointer rounded-xl bg-blue-500 px-5 py-2 font-medium">
          Salvar Registro do Dia
        </button>
      </div>
    </section>
  );
};

export default MoodRegisterForm;
