import { useDarkTheme } from "../../../hooks/UseDarkTheme";

const SearchBar = () => {
  const { darkTheme } = useDarkTheme();
  return (
    <div className="mb-6 flex flex-col gap-3 lg:flex-row">
      <div
        className={` ${
          darkTheme
            ? "bg-surface-dark border-outline-dark text-muted-dark"
            : "bg-surface-light border-outline-light text-muted-light"
        } flex gap-3 rounded-xl border py-2 px-6 lg:flex-1`}
      >
        <i className="bi bi-search text-muted-dark" />
        <input
          type="text"
          name=""
          id=""
          className={`flex-1 focus:outline-none`}
          placeholder="Buscar Peguntas"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <select
          className={`${
            darkTheme
              ? "text-primary-dark bg-surface-dark border-outline-dark"
              : "text-primary-light bg-surface-light border-outline-light"
          } rounded-xl border px-6 py-2 focus:outline-none`}
        >
          <option value="matematica">Matématica</option>
          <option value="matematica">Matématica</option>
          <option value="matematica">Matématica</option>
          <option value="matematica">Matématica</option>
          <option value="matematica">Matématica</option>
          <option value="matematica">Matématica</option>
          <option value="matematica">Matématica</option>
        </select>
        <select
          className={`${
            darkTheme
              ? "text-primary-dark bg-surface-dark border-outline-dark"
              : "text-primary-light bg-surface-light border-outline-light"
          } rounded-xl border px-6 py-2 focus:outline-none`}
        >
          <option value="matematica">Mais Recentes</option>
          <option value="matematica">Mais Curtidas</option>
          <option value="matematica">Mais Respostas</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
