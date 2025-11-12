import { useState } from "react";
import { useDarkTheme } from "../../hooks/UseDarkTheme";
import MaterialCard from "./components/MaterialCard";
import AddMaterialModal from "./components/AddMaterialModal";
import ActionButton from "../../components/ActionButton";

const Materials = () => {
  const { darkTheme } = useDarkTheme();
  const [isAddMaterialModalOpen, setIsAddMaterialModalOpen] =
    useState<boolean>(false);

  const toogleModal = () => {
    setIsAddMaterialModalOpen(!isAddMaterialModalOpen);
  };

  return (
    <section>
      {isAddMaterialModalOpen && (
        <AddMaterialModal
          setIsAddMaterialModalOpen={setIsAddMaterialModalOpen}
        />
      )}
      <div className="flex justify-end mb-6">
        <div className="w-60">
          <ActionButton label="Adicionar Material" onClick={toogleModal} />
        </div>
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
