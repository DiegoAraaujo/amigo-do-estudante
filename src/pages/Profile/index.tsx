import ProfileCard from "./components/ProfileCard";
import ProfileForm from "./components/ProfileForm";

const Profile = () => {
  return (
    <section className="max-w-6xl w-full gap-6 m-auto p-6 grid lg:grid-cols-2">
      <ProfileCard />
      <ProfileForm />
    </section>
  );
};

export default Profile;
