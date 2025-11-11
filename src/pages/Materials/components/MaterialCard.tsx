import { useDarkTheme } from "../../../hooks/UseDarkTheme";

const MaterialCard = () => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`border ${
        darkTheme
          ? "bg-card-dark border-outline-dark"
          : "border-outline-light bg-card-light"
      } flex justify-between rounded-xl p-6`}
    >
      <div className="flex items-center gap-6">
        <div>
          <i
            className={`${
              darkTheme ? "text-primary-dark" : "text-primary-light"
            } bi bi-link-45deg text-3xl`}
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
      <div className="flex items-center gap-6">
        <i
          className={`cursor-pointer bi bi-box-arrow-up-right ${
            darkTheme ? "text-primary-dark" : "text-primary-light"
          }`}
        />
        <i
          className={`cursor-pointer bi bi-trash3 ${
            darkTheme ? "text-primary-dark" : "text-primary-light"
          }`}
        />
      </div>
    </div>
  );
};

export default MaterialCard;
