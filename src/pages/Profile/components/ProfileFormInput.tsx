import { useDarkTheme } from "../../../hooks/UseDarkTheme";

interface ProfileInputProps {
  label: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const ProfileInput = ({
  label,
  type,
  value,
  onChange,
  disabled,
}: ProfileInputProps) => {
  const { darkTheme } = useDarkTheme();

  return (
    <div className="flex flex-col gap-2">
      <label
        className={`${
          darkTheme ? "text-primary-dark" : "text-primary-light"
        } font-medium`}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`${
          darkTheme
            ? "bg-dark text-primary-dark placeholder:text-muted-dark"
            : "bg-light text-primary-light placeholder:text-muted-light"
        } py-2 rounded-lg px-6 border outline-none transition ${
          disabled
            ? "opacity-70 cursor-not-allowed"
            : "focus:ring-2 ring-accent"
        }`}
      />
    </div>
  );
};

export default ProfileInput;
