import ProfileCard from "./components/ProfileCard";
import ProfileForm from "./components/ProfileForm";

const Profile = () => {
  return (
    <section className=" gap-6 grid lg:grid-cols-2">
      <ProfileCard />
      <ProfileForm />
    </section>
  );
};

export default Profile;
