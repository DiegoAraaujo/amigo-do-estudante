import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface PersonalNotesProps {
  personalNotes: string;
  setPersonalNotes: React.Dispatch<React.SetStateAction<string>>;
}

const PersonalNotes = ({
  personalNotes,
  setPersonalNotes,
}: PersonalNotesProps) => {
  const { darkTheme } = useDarkTheme();
  return (
    <div className="mb-6">
      <h2
        className={`text-sm mb-3 font-medium ${darkTheme ? "text-primary-dark" : "text-primary-light"}`}
      >
        Notas pessoais (opcional)
      </h2>
      <textarea
        className={`h-30 w-full rounded-xl border border-gray-300 p-6 focus:border-[#875AF2] ${darkTheme ? "bg-dark text-primary-dark" : "bg-light"} text-xs tracking-wider`}
        placeholder="Como foi o seu dia? Oque você aprendeu sobre si mesmo?"
        value={personalNotes}
        onChange={(e) => {
          setPersonalNotes(e.target.value);
        }}
      />
    </div>
  );
};

export default PersonalNotes;
