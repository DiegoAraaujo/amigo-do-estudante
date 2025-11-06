const GamificationButton = () => {
  return (
    <div className="fixed top-[90vh] left-6 flex h-15 w-15 animate-bounce items-center justify-center rounded-full bg-linear-to-bl from-[#F4D35D] to-[#D29816] lg:left-10 ">
      <div className="relative">
        <div className="flex items-center justify-center rounded-full bg-[#C1175A] text-white absolute text-xs w-5 h-5 -right-3 -top-2 animate-bounce">
          3
        </div>
        <i className="bi bi-trophy text-xl text-white"></i>
      </div>
    </div>
  );
};

export default GamificationButton;
