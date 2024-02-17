const StartScreen = ({ dispatch }) => {
  return (
    <div className="flex flex-col text-white items-center gap-4">
      <h3 className="capitalize text-3xl">welcome to the react quiz!</h3>
      <p className="text-xl">15 question to test your React mastery</p>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="bg-[#495057] px-6 py-2 rounded-full"
      >
        Let's start
      </button>
    </div>
  );
};

export default StartScreen;
