import { Link } from "react-router-dom";

interface ButtonProps {
  icon: string;
  label: string;
  path: string;
}

const Button = ({ icon, label, path }: ButtonProps) => {
  return (
    <Link
      to={`${path}`}
      className="rounded-xl text-primary-dark  px-6 py-2 flex justify-center items-center gap-2 bg-button font-medium max-w-90 w-full hover:scale-105 transition-transform duration-300"
    >
      <i className={`${icon} text-xl`} /> {label}
    </Link>
  );
};

export default Button;
