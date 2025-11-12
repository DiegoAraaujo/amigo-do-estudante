interface ButtonProps {
  icon?: string;
  label: string;
  onClick?: () => void;
}

const ActionButton = ({ icon, label, onClick }: ButtonProps) => {
  return (
    <button
      className="rounded-xl text-primary-dark  px-6 py-2 flex justify-center items-center gap-2 bg-button font-medium max-w-90 w-full cursor-pointer hover:scale-105 transition-transform duration-300"
      onClick={onClick}
    >
      {icon && <i className={`${icon} text-xl`} />} {label}
    </button>
  );
};

export default ActionButton;
