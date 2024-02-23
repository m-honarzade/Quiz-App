import { useEffect } from "react";

const Timer = ({ dispatch, secondsRemaining }) => {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  useEffect(() => {
    const id = setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <div className="flex justify-center border border-[#495057] px-6 py-2 rounded-full text-white">
      {mins < 10 && "0"} {mins} : {secs < 10 && "0"}
      {secs}
    </div>
  );
};

export default Timer;
