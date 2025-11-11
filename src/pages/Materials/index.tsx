import { useState } from "react";
import { useDarkTheme } from "../../hooks/UseDarkTheme";
import MaterialCard from "./components/MaterialCard";
import AddMaterialModal from "./components/AddMaterialModal";

const Materials = () => {
  const { darkTheme } = useDarkTheme();
  const [isAddMaterialModalOpen, setIsAddMaterialModalOpen] =
    useState<boolean>(false);

  return (
    <section>
      {isAddMaterialModalOpen && (
        <AddMaterialModal
          setIsAddMaterialModalOpen={setIsAddMaterialModalOpen}
        />
      )}
      <div className="flex justify-end mb-6">
        <button
          className="bg-blue-500 text-primary-dark max-w-50 w-full px-6 py-2 rounded-lg font-semibold cursor-pointer"
          onClick={() => setIsAddMaterialModalOpen(true)}
        >
          Adicionar Material
        </button>
      </div>
      <div
        className={`gap-4 grid lg:grid-cols-2 p-6 rounded-xl ${
          darkTheme ? "bg-surface-dark" : "bg-surface-light rounded-xl"
        }`}
      >
        <MaterialCard />
        <MaterialCard />
      </div>
    </section>
  );
};

export default Materials;
