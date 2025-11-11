import { useDarkTheme } from "../../../hooks/UseDarkTheme";

const StudySelector = () => {
  const { darkTheme } = useDarkTheme();
  return (
    <div className="flex w-full max-w-96 flex-col items-center gap-4">
      <p
        className={`${
          darkTheme ? "text-muted-dark" : "text-muted-light"
        } text-sm font-medium`}
      >
        Matéria de Estudo
      </p>
      <select
        name=""
        id=""
        className={`border focus:outline-none ${
          darkTheme
            ? "text-primary-dark bg-dark border-outline-dark"
            : "text-primary-light bg-light border-outline-light"
        }  w-full rounded-xl px-6 py-2 text-sm`}
      >
        <option value="" disabled selected hidden className="text-sm">
          Selecione uma Materia
        </option>
        <option value="" className="text-sm">
          Matematica
        </option>
        <option value="" className="text-sm">
          Matematica
        </option>
        <option value="" className="text-sm">
          Matematica
        </option>
        <option value="" className="text-sm">
          Matematica
        </option>
        <option value="" className="text-sm">
          Matematica
        </option>
        <option value="" className="text-sm">
          Matematica
        </option>
      </select>
    </div>
  );
};

export default StudySelector;
