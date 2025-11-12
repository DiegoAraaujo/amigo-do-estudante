import ActionButton from "../../../components/ActionButton";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";

const MyTasksForm = () => {
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
              ? "placeholder:text-muted-dark bg-dark text-primary-dark border-outline-dark "
              : "placeholder:text-muted-light bg-light text-primary-light border-outline-light"
          }`}
        />
      </div>
      <div className=" grid gap-4 sm:grid-cols-3">
        <div className=" flex flex-col gap-2">
          <label
            htmlFor="matter"
            className={`${
              darkTheme ? "text-primary-dark" : "text-primary-light"
            } font-medium text-sm`}
          >
            Matéria(opicional)
          </label>
          <input
            type="text"
            id="matter"
            placeholder="ex: Matemática"
            className={`px-6 py-2 rounded-lg focus:outline-none border ${
              darkTheme
                ? "placeholder:text-muted-dark bg-dark text-primary-dark border-outline-dark"
                : "placeholder:text-muted-light bg-light text-primary-light border-outline-light"
            }`}
          />
        </div>
        <div className=" flex flex-col gap-2">
          <label
            htmlFor="date"
            className={`${
              darkTheme ? "text-primary-dark" : "text-primary-light"
            } font-medium text-sm`}
          >
            Data de Entrega
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
            htmlFor="category"
            className={`${
              darkTheme ? "text-primary-dark" : "text-primary-light"
            } font-medium text-sm`}
          >
            Prioridade
          </label>
          <select
            name="category"
            id="category"
            className={`px-6 py-2 rounded-lg focus:outline-none border ${
              darkTheme
                ? "placeholder:text-muted-dark bg-dark text-primary-dark border-outline-dark"
                : "placeholder:text-muted-light bg-light text-primary-light border-outline-light"
            }`}
          >
            <option value="">Baixa</option>
            <option value="">Média</option>
            <option value="">Alta</option>
          </select>
        </div>
      </div>
      <div className="flex md:justify-start justify-center">
        <ActionButton label="Adicionar Tarefa" />
      </div>
    </form>
  );
};

export default MyTasksForm;
