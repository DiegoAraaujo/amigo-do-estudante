import { useState } from "react";
import InputField from "../../../components/InputField";

const PasswordUpdate = () => {
  const [newPassword, setNewPassword] = useState("");
  const [isNewPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState<boolean>(false);

  return (
    <section className="bg-surface-light rounded-xl p-6 max-w-md w-full flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-3">
        <div className="mb-3 rounded-full bg-linear-to-r from-[#5611F7] to-[#3D7EF6] p-3">
          <i className="bi bi-mortarboard text-4xl text-primary-dark" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-primary-light text-2xl font-bold">
            Redefinir Senha
          </p>
          <p className="text-muted-light text-sm text-center">
            Digite sua nova senha abaixo
          </p>
        </div>
      </div>
      <form className="w-full flex gap-4 flex-col">
        <div className="flex flex-col gap-3">
          <label
            htmlFor="password"
            className="text-sm font-medium text-primary-light"
          >
            Nova Senha
          </label>
          <div className="flex w-full items-center rounded-xl border border-outline-light p-2">
            <InputField
              id="password"
              type={isNewPasswordVisible ? "text" : "password"}
              placeholder="********"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {isNewPasswordVisible ? (
              <i
                className="bi bi-eye text-muted-dark cursor-pointer"
                onClick={() => setIsPasswordVisible(!isNewPasswordVisible)}
              ></i>
            ) : (
              <i
                className="bi bi-eye-slash cursor-pointer text-muted-dark"
                onClick={() => setIsPasswordVisible(!isNewPasswordVisible)}
              ></i>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="password"
            className="text-sm font-medium text-primary-light"
          >
            Confirmar Nova Senha
          </label>
          <div className="flex w-full items-center rounded-xl border border-outline-light p-2">
            <InputField
              id="password"
              type={isConfirmPasswordVisible ? "text" : "password"}
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {isConfirmPasswordVisible ? (
              <i
                className="bi bi-eye text-muted-dark cursor-pointer"
                onClick={() =>
                  setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                }
              ></i>
            ) : (
              <i
                className="bi bi-eye-slash cursor-pointer text-muted-dark"
                onClick={() =>
                  setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                }
              ></i>
            )}
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <button className="bg-linear-to-r from-[#5611F7] to-[#3D7EF6] px-6 py-2 rounded-xl font-medium text-primary-dark">
            Reedefinir senha
          </button>
        </div>
      </form>
    </section>
  );
};

export default PasswordUpdate;
