const FinishedScreen = ({ point, maxPossiblePoints, dispatch }) => {
  const percentage = (point / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇 ";
  if (percentage >= 80 && percentage < 100) emoji = "💐 ";
  if (percentage >= 50 && percentage < 80) emoji = "😊 ";
  if (percentage >= 0 && percentage < 50) emoji = "🤔 ";
  if (percentage === 0) emoji = "🤦‍♂️ ";

  return (
    <>
      <div className="w-96 bg-[#1098ad] rounded-full text-center px-6 py-4 mb-6">
        <p className="text-white">
          {emoji}
          You scored <strong>{point}</strong> out of{" "}
          <strong>{maxPossiblePoints}</strong> ({" "}
          <strong>{Math.ceil(percentage)}%</strong>)
        </p>
      </div>
      <button
        onClick={() => dispatch({ type: "restart" })}
        className="bg-[#3e444b] px-6 py-2 rounded-full text-white"
      >
        Restart Quiz
      </button>
    </>
  );
};

export default FinishedScreen;
