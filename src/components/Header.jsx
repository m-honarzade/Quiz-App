const Header = () => {
  return (
    <div>
      <header className="flex flex-row justify-center items-center gap-8">
        <img
          src="../../public/img/logo512.png"
          alt="react logo"
          className="w-28  "
        />
        <h1 className="uppercase text-white text-5xl font-[Codystar]  ">
          the react quiz
        </h1>
      </header>
    </div>
  );
};

export default Header;
