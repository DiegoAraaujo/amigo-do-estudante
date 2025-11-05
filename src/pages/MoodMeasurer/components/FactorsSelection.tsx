import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import factors from "../../../data/factors";
import FactorSelector from "./FactorSelector";
import type { Factor } from "../../interfaces";

interface FactorsSelectionProps {
  selectedFactors: Factor[];
  setSelectedFactors: React.Dispatch<React.SetStateAction<Factor[]>>;
}

const FactorsSelection = ({
  selectedFactors,
  setSelectedFactors,
}: FactorsSelectionProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div className="mb-6 flex flex-col">
      <h2
        className={`mb-3 text-sm font-medium ${
          darkTheme ? "text-primary-dark" : "text-primary-light"
        }`}
      >
        Fatores que influenciaram seu humor (opcional)
      </h2>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
        {factors.map((factor) => (
          <FactorSelector
            key={factor.id}
            factor={factor}
            selectedFactors={selectedFactors}
            setSelectedFactors={setSelectedFactors}
          />
        ))}
      </div>
    </div>
  );
};

export default FactorsSelection;
