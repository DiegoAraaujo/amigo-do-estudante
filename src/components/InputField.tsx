export interface InputFieldData {
  id: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  id,
  type,
  placeholder,
  value,
  onChange,
}: InputFieldData) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      name={id}
      value={value}
      className="flex-1 px-4 focus:outline-none"
      onChange={onChange}
      min={0}
    />
  );
};

export default InputField;
