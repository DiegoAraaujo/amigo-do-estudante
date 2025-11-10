import { useDarkTheme } from "../../../hooks/UseDarkTheme";

const TopUsers = () => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`${
        darkTheme ? "bg-surface-dark" : "bg-surface-light shadow-sm"
      } rounded-xl p-6 sm:flex-1 lg:flex-none`}
    >
      <h2
        className={`text-xl font-semibold sm:text-2xl md:text-2xl ${
          darkTheme ? "text-primary-dark" : "text-primary-light"
        } mb-6`}
      >
        Top Usuários
      </h2>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <p
            className={`${
              darkTheme ? "text-blue-600" : "text-primary-light"
            } text-lg font-bold`}
          >
            #1
          </p>
          <div
            className={`${
              darkTheme
                ? "bg-card-dark text-muted-dark"
                : "bg-card-light text-muted-light"
            } flex h-9 w-9 items-center justify-center rounded-full text-2xl`}
          >
            <i className="bi bi-person-circle"></i>
          </div>
          <div className="flex flex-col gap-0.5">
            <p
              className={`${
                darkTheme ? "text-primary-dark" : "text-primary-light"
              } text-sm font-medium`}
            >
              Prof. Carlos
            </p>
            <p
              className={`${
                darkTheme ? "text-muted-dark" : "text-muted-light"
              } text-xs`}
            >
              Nível 8 • 2450 pts
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p
            className={`${
              darkTheme ? "text-blue-600" : "text-primary-light"
            } text-lg font-bold`}
          >
            #1
          </p>{" "}
          <div
            className={`${
              darkTheme
                ? "bg-card-dark text-muted-dark"
                : "bg-card-light text-muted-light"
            } flex h-9 w-9 items-center justify-center rounded-full text-2xl`}
          >
            <i className="bi bi-person-circle"></i>
          </div>
          <div className="flex flex-col gap-0.5">
            <p
              className={`${
                darkTheme ? "text-primary-dark" : "text-primary-light"
              } text-sm font-medium`}
            >
              Prof. Carlos
            </p>
            <p
              className={`${
                darkTheme ? "text-muted-dark" : "text-muted-light"
              } text-xs`}
            >
              Nível 8 • 2450 pts
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p
            className={`${
              darkTheme ? "text-blue-600" : "text-primary-light"
            } text-lg font-bold`}
          >
            #1
          </p>{" "}
          <div
            className={`${
              darkTheme
                ? "bg-card-dark text-muted-dark"
                : "bg-card-light text-muted-light"
            } flex h-9 w-9 items-center justify-center rounded-full text-2xl`}
          >
            <i className="bi bi-person-circle"></i>
          </div>
          <div className="flex flex-col gap-0.5">
            <p
              className={`${
                darkTheme ? "text-primary-dark" : "text-primary-light"
              } text-sm font-medium`}
            >
              Prof. Carlos
            </p>
            <p
              className={`${
                darkTheme ? "text-muted-dark" : "text-muted-light"
              } text-xs`}
            >
              Nível 8 • 2450 pts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUsers;
