import { useDarkTheme } from "../../../hooks/UseDarkTheme";

const SearchBar = () => {
  const { darkTheme } = useDarkTheme();
  return (
    <div className="mb-6 flex flex-col gap-3 lg:flex-row">
      <div className="border-muted-dark flex gap-3 rounded-xl border p-2 lg:flex-1">
        <i className="bi bi-search text-muted-dark" />
        <input
          type="text"
          name=""
          id=""
          className="text-muted-dark flex-1 focus:border-none"
          placeholder="Buscar Peguntas"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <select
          name=""
          id=""
          className={`${darkTheme ? "text-primary-dark bg-card-dark border-muted-dark" : "text-primary-light bg-card-light border-muted-light"} rounded-xl border px-6 py-2`}
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
          name=""
          id=""
          className={`${darkTheme ? "text-primary-dark bg-card-dark border-muted-dark" : "text-primary-light bg-card-light border-muted-light"} rounded-xl border px-6 py-2`}
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
