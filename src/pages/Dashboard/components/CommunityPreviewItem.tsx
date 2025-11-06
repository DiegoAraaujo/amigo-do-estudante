import { useDarkTheme } from "../../../hooks/UseDarkTheme";

const CommunityPreviewItem = () => {
  const { darkTheme } = useDarkTheme();
  return (
    <div
      className={`flex flex-col gap-2 rounded-2xl px-5 py-2 ${
        darkTheme ? "bg-dark" : "bg-light"
      }`}
    >
      <div className="flex justify-between gap-2">
        <p
          className={`${
            darkTheme ? "text-primary-dark" : "text-primary-light"
          } text-sm font-medium`}
        >
          Como resolver integrais por substituição?
        </p>
        <div
          className={`py1 flex h-6 items-center justify-center rounded-2xl ${
            darkTheme
              ? "bg-card-dark text-muted-dark"
              : "bg-card-light text-muted-light"
          } px-3 text-xs font-medium`}
        >
          Matemática
        </div>
      </div>
      <div
        className={`flex gap-5 text-xs ${
          darkTheme ? "text-muted-dark" : "text-muted-light"
        }`}
      >
        <p>12 respostas</p>
        <p>31 curtidas</p>
        <p>4h atrás</p>
      </div>
    </div>
  );
};

export default CommunityPreviewItem;
