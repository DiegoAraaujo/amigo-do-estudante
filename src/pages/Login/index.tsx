import { useState } from "react";
import { Link } from "react-router-dom";

import { validationEmail } from "../../utils/validation";
import InputField from "../../components/InputField";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validationEmail(email) || !password.trim()) {
      console.log("preencha todos os dados");
      return;
    }
  };

  return (
    <main className="flex min-h-dvh items-center justify-center bg-linear-to-r from-[#5611F7] to-[#3D7EF6] p-6">
      <div className="w-full max-w-md gap-4 rounded-2xl bg-white p-6">
        <div className="mb-4 flex flex-col items-center gap-1">
          <div className="mb-3 rounded-full bg-linear-to-r from-[#5611F7] to-[#3D7EF6] p-3">
            <i className="bi bi-mortarboard text-4xl text-white"></i>
          </div>
          <p className="text-2xl font-bold text-primary-light">
            Bem-vindo de volta!
          </p>
          <p className="text-sm text-muted-dark">
            Entre na sua conta para continuar estudando
          </p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
                  className="bi bi-eye text-muted-dark cursor-pointer"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                ></i>
              ) : (
                <i
                  className="bi bi-eye-slash cursor-pointer text-muted-dark"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                ></i>
              )}
            </div>
          </div>

          <p className="text-sm text-menuHighlightColor cursor-pointer">
            esqueci minha senha
          </p>

          <button className="w-full cursor-pointer rounded-xl bg-linear-to-r from-[#5611F7] to-[#3D7EF6] p-2 font-medium text-white">
            Entrar
          </button>
        </form>
        <p className="mt-3 text-center text-sm">
          Não tem uma conta?{" "}
          <Link to="/register" className="text-menuHighlightColor">
            Cadastre-se aqui
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
