const FinishedScreen = ({ point, maxPossiblePoints }) => {
  const percentage = (point / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇 ";
  if (percentage >= 80 && percentage < 100) emoji = "💐 ";
  if (percentage >= 50 && percentage < 80) emoji = "😊 ";
  if (percentage >= 0 && percentage < 50) emoji = "🤔 ";
  if (percentage === 0) emoji = "🤦‍♂️ ";

  return (
    <div className="w-96 bg-[#1098ad] rounded-full text-center px-6 py-4">
      <p className="text-white">
        {emoji}
        You scored <strong>{point}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
    </div>
  );
};

export default FinishedScreen;
