import { useDarkTheme } from "../../../hooks/UseDarkTheme";
import ProfileContact from "./ProfileContact";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";

const ProfileCard = () => {
  const { darkTheme, setDarkTheme } = useDarkTheme();

  return (
    <div
      className={`${
        darkTheme ? "bg-surface-dark" : "bg-surface-light"
      } p-6 rounded-xl`}
    >
      <div className="flex justify-end">
        <div
          className={` text-3xl cursor-pointer ${
            darkTheme ? "text-muted-dark" : "text-muted-light"
          }`}
          onClick={() => {
            setDarkTheme(!darkTheme);
          }}
        >
          {darkTheme ? (
            <i className={`bi bi-brightness-high`} />
          ) : (
            <i className={`bi bi-moon`} />
          )}
        </div>
      </div>
      <div className="flex items-center flex-col mb-3">
        <ProfileImage />
        <ProfileInfo />
      </div>
      <ProfileContact />
    </div>
  );
};

export default ProfileCard;
