import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface ProfileInputProps {
  label: string;
  type: string;
}
const ProfileInput = ({ label, type }: ProfileInputProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div className="flex flex-col gap-2">
      <label
        className={`${
          darkTheme ? "text-primary-dark" : "text-primary-light"
        } font-medium`}
        htmlFor=""
      >
        {label}
      </label>
      <input
        className={`${
          darkTheme
            ? "bg-dark text-primary-dark placeholder:text-muted-dark"
            : "bg-light text-primary-light placeholder:text-muted-light"
        } py-2 rounded-lg px-6`}
        type={`${type}`}
        name=""
        id=""
      />
    </div>
  );
};

export default ProfileInput;
