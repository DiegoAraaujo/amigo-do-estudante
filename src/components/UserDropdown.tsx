import { Link } from "react-router-dom";
import { useDarkTheme } from "../hooks/UseDarkTheme";


const UserDropdown = () => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`${
        darkTheme ? "bg-dark" : "bg-light"
      } flex flex-col rounded-xl p-3 w-60 absolute right-0 gap-2`}
    >
      <div
        className={`border-b pb-2 flex flex-col gap-0.5 ${
          darkTheme ? "text-muted-dark" : "text-muted-light"
        }`}
      >
        <p
          className={`text-sm font-medium ${
            darkTheme ? "text-primary-dark" : "text-primary-light"
          }`}
        >
          Ana Silva
        </p>
        <p
          className={`text-xs ${
            darkTheme ? "text-muted-dark" : "text-muted-light"
          }`}
        >
          ana@exemplo.com
        </p>
      </div>
      <Link
        to="/profile"
        className={`cursor-pointer text-sm  flex gap-3 ${
          darkTheme ? "text-primary-dark" : "text-primary-light"
        }`}
      >
        <i className="bi bi-person" />
        Perfil
      </Link>
      <button className={`cursor-pointer text-sm flex gap-3 text-red-500`}>
        <i className="bi bi-box-arrow-right" />
        Sair
      </button>
    </div>
  );
};

export default UserDropdown;
