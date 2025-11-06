import { useDarkTheme } from "../../../hooks/UseDarkTheme";

const ProfileInfo = () => {
  const { darkTheme } = useDarkTheme();
  return (
    <div
      className={`flex flex-col gap-2 p-3 items-center border-b w-full ${
        darkTheme ? "border-muted-dark" : "border-muted-light"
      }`}
    >
      <p
        className={`text-2xl font-bold ${
          darkTheme ? "text-primary-dark" : "text-primary-light"
        }`}
      >
        Ana Silva Santos
      </p>
      <p className={`${darkTheme ? "text-muted-dark" : "text-muted-light"}`}>
        Engenharia de Software
      </p>
      <p
        className={`${
          darkTheme ? "text-muted-dark" : "text-muted-light"
        } text-sm`}
      >
        Universidade Federal de São Paulo
      </p>
      <p
        className={`${
          darkTheme ? "text-muted-dark" : "text-muted-light"
        } text-sm text-center`}
      >
        Estudante apaixonada por tecnologia e inovação. Sempre em busca de novos
        conhecimentos e desafios.
      </p>
    </div>
  );
};

export default ProfileInfo;
