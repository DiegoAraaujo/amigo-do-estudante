import React from "react";
import type { Factor } from "../../interfaces";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface FactorSelectorProps {
  factor: Factor;
  selectedFactors: Factor[];
  setSelectedFactors: React.Dispatch<React.SetStateAction<Factor[]>>;
}

const FactorSelector = ({
  factor,
  selectedFactors,
  setSelectedFactors,
}: FactorSelectorProps) => {
  const { darkTheme } = useDarkTheme();

  const isSelected = selectedFactors.some(
    (selectedFactor) => selectedFactor.id === factor.id
  );

  const handleClick = () => {
    setSelectedFactors((prev) =>
      prev.some((selectedFactor) => selectedFactor.id === factor.id)
        ? prev.filter((selectedFactor) => selectedFactor.id !== factor.id)
        : [...prev, factor]
    );
  };

  return (
    <div
      onClick={handleClick}
      className={`flex cursor-pointer flex-col items-center gap-1 rounded-xl p-6 ${
        darkTheme
          ? "bg-card-dark text-muted-dark shadow-purple-500"
          : "bg-card-light text-muted-light"
      } ${isSelected ? "border-2 border-[#875AF2] shadow-xs" : ""}`}
    >
      <i className={`${factor.icon} text-2xl sm:text-3xl`}></i>
      <p className="text-sm font-medium">{factor.label}</p>
    </div>
  );
};

export default FactorSelector;
