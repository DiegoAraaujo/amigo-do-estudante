import { useDarkTheme } from "../../../hooks/UseDarkTheme";

const ProfileContact = () => {
  const { darkTheme } = useDarkTheme();
  return (
    <div className="flex flex-col gap-2 text-sm">
      <p
        className={`${
          darkTheme ? "text-muted-dark" : "text-muted-light"
        } flex gap-3`}
      >
        <span className="text-blue-500">
          <i className="bi bi-envelope" />
        </span>
        ana.silva@email.com
      </p>
      <p
        className={`${
          darkTheme ? "text-muted-dark" : "text-muted-light"
        } flex gap-3`}
      >
        <span className="text-blue-500">
          <i className="bi bi-calendar-event" />
        </span>
        22 anos
      </p>
      <p
        className={`${
          darkTheme ? "text-muted-dark" : "text-muted-light"
        } flex gap-3`}
      >
        <span className="text-blue-600">
          <i className="bi bi-geo-fill" />
        </span>
        Rua das Flores, 123 - Centro, São Paulo - SP
      </p>
    </div>
  );
};

export default ProfileContact;
