import { useDarkTheme } from "../../../hooks/UseDarkTheme";

const MaterialCard = () => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`border ${
        darkTheme
          ? "bg-card-dark border-outline-dark"
          : "border-outline-light bg-card-light"
      } flex md:justify-between rounded-xl p-6 md:flex-row flex-col gap-4`}
    >
      <div className="flex items-center gap-6">
        <div className="hidden md:block">
          <i
            className={`${
              darkTheme ? "text-primary-dark" : "text-primary-light"
            } bi bi-link-45deg md:text-3xl text-2xl`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p
            className={`font-semibold ${
              darkTheme ? "text-primary-dark" : "text-primary-light"
            }`}
          >
            Apostila de Matemática
          </p>
          <p
            className={` text-sm ${
              darkTheme ? "text-muted-dark" : "text-muted-light"
            }`}
          >
            Material completo de cálculo diferencial e integral
          </p>
          <p
            className={`text-sm ${
              darkTheme ? "text-muted-dark" : "text-muted-light"
            }`}
          >
            Adicionado em 15/01/2024
          </p>
        </div>
      </div>
      <div className="flex items-center gap-6 md:justify-start justify-end">
        <button>
          <i
            className={`cursor-pointer bi bi-box-arrow-up-right ${
              darkTheme ? "text-primary-dark" : "text-primary-light"
            }`}
          />
        </button>
        <button>
          <i
            className={`cursor-pointer bi bi-trash3 ${
              darkTheme ? "text-primary-dark" : "text-primary-light"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default MaterialCard;
