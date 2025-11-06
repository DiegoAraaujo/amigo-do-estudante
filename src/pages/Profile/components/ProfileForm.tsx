import { useState } from "react";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import ProfileFormInput from "./ProfileFormInput";
import ProfileFormActions from "./ProfileFormActions";

const ProfileForm = () => {
  const { darkTheme } = useDarkTheme();
  const [editMode, setEditMode] = useState<boolean>(false);

  return (
    <form
      className={`${
        darkTheme ? "bg-surface-dark" : "bg-surface-light"
      } p-6 flex flex-col gap-3 rounded-xl`}
    >
      <div className="flex justify-between ">
        <h2
          className={`font-semibold text-xl md:text-2xl ${
            darkTheme ? "text-primary-dark" : "text-primary-light"
          }`}
        >
          Informações Pessoais
        </h2>
        <ProfileFormActions editMode={editMode} setEditMode={setEditMode} />
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <ProfileFormInput label="Nome Completo" type="text" />
        <ProfileFormInput label="Email" type="text" />
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <ProfileFormInput label="Idade" type="number" />
        <ProfileFormInput label="Telefone" type="tel" />
      </div>

      <ProfileFormInput label="Endereço" type="text" />

      <div className="grid sm:grid-cols-2 gap-3">
        <ProfileFormInput label="Curso" type="text" />
        <ProfileFormInput label="Universidade" type="text" />
      </div>

      <ProfileFormInput label="Biografia" type="text" />
    </form>
  );
};

export default ProfileForm;
