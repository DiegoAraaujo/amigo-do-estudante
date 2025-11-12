import type React from "react";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import ActionButton from "../../../components/ActionButton";

interface AddMaterialModalProps {
  setIsAddMaterialModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddMaterialModal = ({
  setIsAddMaterialModalOpen,
}: AddMaterialModalProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className="bg-black/30 fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 p-6"
      onClick={() => setIsAddMaterialModalOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={` ${
          darkTheme ? "bg-surface-dark" : "bg-surface-light"
        } rounded-xl p-6 max-w-[500px] w-full`}
      >
        <div className="flex justify-between">
          <div className="mb-6">
            <p
              className={`${
                darkTheme ? "text-primary-dark" : "text-primary-light"
              }  font-semibold text-xl md:text-2xl`}
            >
              Novo Material
            </p>
            <p
              className={`${
                darkTheme ? "text-muted-dark" : "text-muted-light"
              } text-sm`}
            >
              Adicione um novo material de estudo
            </p>
          </div>
          <i
            className={`text-sm cursor-pointer ${
              darkTheme ? "text-muted-dark" : "text-muted-light"
            } bi bi-x-lg`}
            onClick={() => setIsAddMaterialModalOpen(false)}
          />
        </div>
        <form
          className={`flex flex-col gap-3 ${
            darkTheme ? "bg-surface-dark" : "bg-surface-light "
          }`}
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className={`font-medium text-sm ${
                darkTheme ? "text-primary-dark" : "text-primary-light"
              }`}
            >
              Título
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className={`border ${
                darkTheme
                  ? "bg-dark placeholder:text-muted-dark text-primary-dark border-outline-dark"
                  : "bg-light placeholder:text-muted-light text-primary-light border-outline-light"
              } rounded-lg px-6 py-2 focus:outline-none`}
              placeholder="Nome do Material"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="category"
              className={`font-medium text-sm ${
                darkTheme ? "text-primary-dark" : "text-primary-light"
              }`}
            >
              Categoria
            </label>
            <input
              type="text"
              name="category"
              id="category"
              className={`border focus:outline-none ${
                darkTheme
                  ? "bg-dark placeholder:text-muted-dark text-primary-dark border-outline-dark"
                  : "bg-light placeholder:text-muted-light text-primary-light border-outline-light"
              } rounded-lg px-6 py-2`}
              placeholder="Ex: Matemática, História"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="url"
              className={`font-medium text-sm ${
                darkTheme ? "text-primary-dark" : "text-primary-light"
              }`}
            >
              URL do Aquivo
            </label>
            <input
              type="text"
              name="url"
              id="url"
              className={`focus:outline-none ${
                darkTheme
                  ? "bg-dark placeholder:text-muted-dark text-primary-dark border-outline-dark"
                  : "bg-light placeholder:text-muted-light text-primary-light border-outline-light"
              } rounded-lg px-6 py-2 border`}
              placeholder="Cole  o link ou URL do arquivo"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="description"
              className={`font-medium text-sm ${
                darkTheme ? "text-primary-dark" : "text-primary-light"
              }`}
            >
              Descrição
            </label>
            <textarea
              name="description"
              id="description"
              className={`${
                darkTheme
                  ? "bg-dark placeholder:text-muted-dark text-primary-dark border-outline-dark"
                  : "bg-light placeholder:text-muted-light text-primary-light border-outline-light"
              } rounded-lg px-6 py-2 border h-24 focus:outline-none`}
              placeholder="Descreva o conteúdo do material"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <ActionButton label="Adicionar Material" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMaterialModal;
