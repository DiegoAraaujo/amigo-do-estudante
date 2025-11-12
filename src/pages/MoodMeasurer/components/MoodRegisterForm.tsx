import { useState } from "react";

import type { MoodOption } from "../interfaces";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import type { Factor } from "../interfaces";
import EnergyLevelSelector from "./EnergyLevelSelector";
import FactorsSelection from "./FactorsSelection";
import MoodSelection from "./MoodSelection";
import PersonalNotes from "./PersonalNotes";
import ActionButton from "../../../components/ActionButton";

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
        <h2
          className={`text-xl font-semibold ${
            darkTheme ? "text-primary-dark" : "text-primary-light"
          }`}
        >
          Como se sente hoje?
        </h2>
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

      <div className="flex md:justify-start justify-center">
        <ActionButton label="Salvar Registro do Dia" />
      </div>
    </section>
  );
};

export default MoodRegisterForm;
