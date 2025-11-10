import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface ProfileFormActionsProps {
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileFormActions = ({
  editMode,
  setEditMode,
}: ProfileFormActionsProps) => {
  const { darkTheme } = useDarkTheme();
  return (
    <div>
      {editMode ? (
        <div className="flex gap-3">
          <button
            className={`px-8 py-1 rounded-lg cursor-pointer ${
              darkTheme
                ? "bg-dark text-primary-dark"
                : "bg-light text-primary-light"
            }`}
            onClick={(e) => {
              e.preventDefault();
              setEditMode(false);
            }}
          >
            Cancelar
          </button>
          <button
            className={`px-8 py-1 rounded-lg cursor-pointer bg-blue-600 text-primary-dark font-medium`}
          >
            Salvar
          </button>
        </div>
      ) : (
        <button
          className={`px-8 py-1 rounded-lg cursor-pointer font-medium ${
            darkTheme
              ? "bg-dark text-primary-dark"
              : "bg-light text-primary-light"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setEditMode(true);
          }}
        >
          Editar
        </button>
      )}
    </div>
  );
};

export default ProfileFormActions;
