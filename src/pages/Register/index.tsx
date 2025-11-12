import { useState } from "react";

import { validatePassword, validationEmail } from "../../utils/validation";
import InputField from "../../components/InputField";
import { Link } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] =
    useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fullName.trim()) {
      console.log("nome invalido!");
      return;
    }

    if (!validationEmail(email)) {
      console.log("email invalido");
      return;
    }

    if (!validatePassword(password) || !validatePassword(passwordConfirm)) {
      console.log("senha invalida");
      return;
    }

    if (isNaN(parseInt(age))) {
      console.log("voce deve preencher a idade");
      return;
    }

    if (parseInt(age) < 13) {
      console.log("voce so pode acessar o site com permissao de seus pais");
      return;
    }

    if (!termsAccepted) {
      console.log("Voce deve aceitar os termos de uso antes de prosseguir");
      return;
    }

    if (password !== passwordConfirm) {
      console.log(" as senhas devm ser iguais");
      return;
    }

    try {
      const createdStudent = "teste";

      console.log(createdStudent);
    } catch (error) {
      console.log("cheguei no front", error);
    }
  };

  return (
    <main className="flex min-h-dvh items-center justify-center bg-linear-to-r from-[#5611F7] to-[#3D7EF6] p-6">
      <div className="flex w-full max-w-md flex-col gap-4 rounded-2xl bg-primary-dark p-6">
        <div className="mb-4 flex flex-col items-center gap-1">
          <div className="mb-3 rounded-full bg-linear-to-r from-[#5611F7] to-[#3D7EF6] p-3">
            <i className="bi bi-mortarboard text-4xl text-primary-dark"></i>
          </div>

          <p className="text-2xl font-bold text-primary-light">Criar conta</p>
          <p className="text-sm text-muted-light">
            Junte-se ao Amigo do Estudante e potencialize seus estudos
          </p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="name"
              className="text-sm font-medium text-primary-light"
            >
              Nome completo
            </label>
            <div className="flex w-full rounded-xl border border-outline-light py-2">
              <InputField
                id="name"
                type="text"
                placeholder="Seu nome"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="email"
              className="text-sm font-medium text-primary-light"
            >
              Email
            </label>
            <div className="flex w-full rounded-xl border border-outline-light py-2">
              <InputField
                id="email"
                type="email"
                placeholder="seu.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="age"
              className="text-sm font-medium text-primary-light"
            >
              Idade
            </label>
            <div className="flex w-full rounded-xl border border-outline-light py-2">
              <InputField
                id="age"
                type="number"
                placeholder="Sua idade"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="password"
              className="text-sm font-medium text-primary-light"
            >
              Senha
            </label>
            <div className="flex w-full items-center rounded-xl border border-outline-light p-2">
              <InputField
                id="password"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {isPasswordVisible ? (
                <i
                  className="bi bi-eye text-muted-dark"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                ></i>
              ) : (
                <i
                  className="bi bi-eye-slash"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                ></i>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="passwordConfirm"
              className="text-sm font-medium text-primary-light"
            >
              Confirmar senha
            </label>
            <div className="flex w-full items-center rounded-xl border border-outline-light p-2">
              <InputField
                id="passwordConfirm"
                type={isPasswordConfirmVisible ? "text" : "password"}
                placeholder="********"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
              {isPasswordConfirmVisible ? (
                <i
                  className="bi bi-eye text-muted-light"
                  onClick={() =>
                    setIsPasswordConfirmVisible(!isPasswordConfirmVisible)
                  }
                ></i>
              ) : (
                <i
                  className="bi bi-eye-slash"
                  onClick={() =>
                    setIsPasswordConfirmVisible(!isPasswordConfirmVisible)
                  }
                ></i>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium text-primary-light"
            >
              Aceito os{" "}
              <span className="cursor-pointer text-menuHighlightColor">
                termos de uso
              </span>{" "}
              e{" "}
              <span className="cursor-pointer text-menuHighlightColor">
                política de privacidade
              </span>
            </label>
          </div>

          <button className="w-full cursor-pointer rounded-xl bg-linear-to-r from-[#5611F7] to-[#3D7EF6] p-2 font-medium text-primary-dark">
            Criar conta
          </button>
        </form>

        <p className="text-center text-sm text-muted-light">
          Já tem uma conta?{" "}
          <Link
            to="/login"
            className="cursor-pointer font-medium text-menuHighlightColor"
          >
            Faça login aqui
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
