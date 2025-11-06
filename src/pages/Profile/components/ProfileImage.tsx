const ProfileImage = () => {
  return (
    <div className="relative mb-5">
      <div className="h-30 w-30 rounded-full bg-red-500">
        <img
          src="https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?semt=ais_hybrid&w=740&q=80"
          alt=""
          className="w-full h-full object-cover rounded-full "
        />
      </div>
      <div className="h-10 w-10 rounded-full bg-blue-500 flex justify-center items-center absolute -bottom-2 -right-2">
        <i className="bi bi-camera text-xl " />
      </div>
    </div>
  );
};

export default ProfileImage;
