import ActionButton from "../../../components/ActionButton";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";

const ScheduleForm = () => {
  const { darkTheme } = useDarkTheme();
  return (
    <form
      className={`${
        darkTheme ? "bg-surface-dark" : "bg-surface-light"
      } p-6 rounded-xl flex flex-col gap-4`}
    >
      <div className=" flex flex-col gap-2">
        <label
          htmlFor="title"
          className={`${
            darkTheme ? "text-primary-dark" : "text-primary-light"
          } font-medium text-sm`}
        >
          Título
        </label>
        <input
          type="text"
          id="title"
          className={`px-6 py-2 rounded-lg focus:outline-none border ${
            darkTheme
              ? "placeholder:text-muted-dark bg-dark text-primary-dark border-outline-dark"
              : "placeholder:text-muted-light bg-light text-primary-light border-outline-light"
          }`}
          placeholder="ex: Consulta Médica"
        />
      </div>
      <div className=" flex flex-col gap-2">
        <label
          htmlFor="description"
          className={`${
            darkTheme ? "text-primary-dark" : "text-primary-light"
          } font-medium text-sm`}
        >
          Descrição (opcional)
        </label>
        <textarea
          id="description"
          placeholder="Detalhes sobre o evento..."
          className={`px-6 py-2 rounded-lg h-20 focus:outline-none border ${
            darkTheme
              ? "placeholder:text-muted-dark bg-dark text-primary-dark border-outline-dark"
              : "placeholder:text-muted-light bg-light text-primary-light border-outline-light"
          }`}
        />
      </div>
      <div className=" grid gap-4 sm:grid-cols-3">
        <div className=" flex flex-col gap-2">
          <label
            htmlFor="date"
            className={`${
              darkTheme ? "text-primary-dark" : "text-primary-light"
            } font-medium text-sm`}
          >
            Data
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className={`px-6 py-2 rounded-lg focus:outline-none border ${
              darkTheme
                ? "placeholder:text-muted-dark bg-dark text-primary-dark border-outline-dark"
                : "placeholder:text-muted-light bg-light text-primary-light border-outline-light"
            }`}
          />
        </div>
        <div className=" flex flex-col gap-2">
          <label
            htmlFor="time"
            className={`${
              darkTheme ? "text-primary-dark" : "text-primary-light"
            } font-medium text-sm`}
          >
            Horário
          </label>
          <input
            type="time"
            id="time"
            className={`px-6 py-2 rounded-lg focus:outline-none border ${
              darkTheme
                ? "placeholder:text-muted-dark bg-dark text-primary-dark border-outline-dark"
                : "placeholder:text-muted-light bg-light text-primary-light border-outline-light"
            }`}
          />
        </div>
        <div className=" flex flex-col gap-2">
          <label
            htmlFor="category"
            className={`${
              darkTheme ? "text-primary-dark" : "text-primary-light"
            } font-medium text-sm`}
          >
            Categoria
          </label>
          <select
            name="category"
            id="category"
            className={`px-6 py-2 rounded-lg border focus:outline-none ${
              darkTheme
                ? "placeholder:text-muted-dark bg-dark text-primary-dark border-outline-dark"
                : "placeholder:text-muted-light bg-light text-primary-light border-outline-light"
            }`}
          >
            <option value="">Pessoal</option>
            <option value="">Estudo</option>
            <option value="">Trabalho</option>
            <option value="">Saúde</option>
            <option value="">Lazer</option>
          </select>
        </div>
      </div>
      <div className="flex md:justify-start justify-center">
        <ActionButton label="Adicionar à Agenda" />
      </div>
    </form>
  );
};

export default ScheduleForm;
