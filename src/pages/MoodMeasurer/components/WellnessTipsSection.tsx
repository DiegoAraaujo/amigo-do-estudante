import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import WellnessTipItem from "./WellnessTipItem";

const WellnessTipsSection = () => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`${
        darkTheme ? "bg-surface-dark" : "bg-surface-light"
      } rounded-xl p-6`}
    >
      <div className="mb-3">
        <h2
          className={` ${
            darkTheme ? "text-primary-dark" : "text-primary-light"
          } text-xl font-semibold sm:text-2xl`}
        >
          Dicas de Bem-Estar
        </h2>
        <p
          className={`${
            darkTheme ? "text-muted-dark" : "text-muted-light"
          } tetx-sm`}
        >
          Esteja sempre cuidando de você
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <WellnessTipItem text="Registre seu humor diariamente para acompanhar sua evolução" />
        <WellnessTipItem text="Mantenha uma rotina de sono regular para mais energia" />
        <WellnessTipItem text="Pratique pausas durante os estudos para melhor concentração" />
      </div>
    </div>
  );
};

export default WellnessTipsSection;
