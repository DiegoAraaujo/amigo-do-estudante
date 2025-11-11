import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface EnergyLevelSelectorProps {
  energyLevel: number;
  setEnergyLevel: React.Dispatch<React.SetStateAction<number>>;
}

const EnergyLevelSelector = ({
  energyLevel,
  setEnergyLevel,
}: EnergyLevelSelectorProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div className="mb-6 flex flex-col gap-3">
      <h2
        className={` text-base font-medium ${darkTheme ? "text-primary-dark" : "text-primary-light"}`}
      >
        Nivel de Energia {energyLevel}/10
      </h2>
      <div>
        <input
          type="range"
          min={1}
          max={10}
          value={energyLevel}
          className="w-full accent-blue-500"
          onChange={(e) => {
            setEnergyLevel(Number(e.target.value));
          }}
        />
        <div className="flex justify-between">
          <p
            className={`${darkTheme ? "text-muted-dark" : "text-muted-light"} text-sm`}
          >
            Muito baixa
          </p>
          <p
            className={`${darkTheme ? "text-muted-dark" : "text-muted-light"} text-sm`}
          >
            Muito alta
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnergyLevelSelector;
