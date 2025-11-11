import { useState } from "react";
import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import ProfileInput from "./ProfileFormInput";
import ProfileFormActions from "./ProfileFormActions";

const ProfileForm = () => {
  const { darkTheme } = useDarkTheme();
  const [editMode, setEditMode] = useState(false);
  const [fullName, setFullName] = useState("Ana Silva Santos");
  const [email, setEmail] = useState("anasilva@email.com");
  const [age, setAge] = useState(22);
  const [phone, setPhone] = useState("(88) 99999-9999");
  const [address, setAddress] = useState(
    "Rua das Flores, 123 - Centro, São Paulo - SP"
  );
  const [course, setCourse] = useState("Engenharia de Software");
  const [university, setUniversity] = useState(
    "Universidade Federal de São Paulo"
  );
  const [biography, setBiography] = useState(
    "Estudante apaixonada por tecnologia e inovação. Sempre em busca de novos conhecimentos e desafios."
  );

  return (
    <form
      className={`${
        darkTheme ? "bg-surface-dark" : "bg-surface-light"
      } p-6 flex flex-col gap-3 rounded-xl`}
    >
      <h2
        className={`font-semibold text-xl ${
          darkTheme ? "text-primary-dark" : "text-primary-light"
        }`}
      >
        Informações Pessoais
      </h2>

      <div className="grid sm:grid-cols-2 gap-3">
        <ProfileInput
          label="Nome Completo"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          disabled={!editMode}
        />
        <ProfileInput
          label="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!editMode}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <ProfileInput
          label="Idade"
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          disabled={!editMode}
        />
        <ProfileInput
          label="Telefone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={!editMode}
        />
      </div>

      <ProfileInput
        label="Endereço"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        disabled={!editMode}
      />

      <div className="grid sm:grid-cols-2 gap-3">
        <ProfileInput
          label="Curso"
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          disabled={!editMode}
        />
        <ProfileInput
          label="Universidade"
          type="text"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          disabled={!editMode}
        />
      </div>

      <ProfileInput
        label="Biografia"
        type="text"
        value={biography}
        onChange={(e) => setBiography(e.target.value)}
        disabled={!editMode}
      />
      <div className="flex justify-end mt-3">
        <ProfileFormActions editMode={editMode} setEditMode={setEditMode} />
      </div>
    </form>
  );
};

export default ProfileForm;
