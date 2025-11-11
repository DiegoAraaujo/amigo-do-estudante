import { useDarkTheme } from "../../../hooks/UseDarkTheme";

const ProductivityStats = () => {
  const { darkTheme } = useDarkTheme();

  return (
    <div
      className={`${darkTheme ? "bg-surface-dark" : "bg-surface-light shadow-sm"} rounded-xl p-6`}
    >
      <p
        className={`${darkTheme ? "text-primary-dark" : "text-primary-light"} mb-6 text-xl font-semibold`}
      >
        Produtividade
      </p>
      <div className="flex flex-col gap-3">
        <div className={`flex justify-between`}>
          <p
            className={` ${darkTheme ? "text-muted-dark" : "text-muted-light"} text-sm`}
          >
            Horas Totais
          </p>
          <p
            className={`${darkTheme ? "text-primary-dark" : "text-primary-light"} text-base font-bold`}
          >
            45.5h
          </p>
        </div>
        <div className={`flex justify-between`}>
          <p
            className={`${darkTheme ? "text-muted-dark" : "text-muted-light"} text-sm`}
          >
            Média Diária
          </p>
          <p
            className={`${darkTheme ? "text-primary-dark" : "text-primary-light"} text-base font-bold`}
          >
            4.2
          </p>
        </div>
        <div
          className={`flex justify-between ${darkTheme ? "text-muted-dark" : "text-muted-light"}`}
        >
          <p
            className={`${darkTheme ? "text-muted-dark" : "text-muted-light"} text-sm`}
          >
            Taxa de Conclusão
          </p>
          <p className={`text-base font-bold text-green-500`}>94%</p>
        </div>
      </div>
    </div>
  );
};

export default ProductivityStats;
