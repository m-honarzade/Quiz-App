const ProgressBar = ({
  numOfQuestions,
  maxPossiblePoints,
  index,
  point,
  answer,
}) => {
  return (
    <header className="flex flex-col w-full items-center mb-4">
      <div className="rounded-md ">
        <progress
          max={numOfQuestions}
          value={index + Number(answer !== null)}
          className="w-96 rounded-full"
        />
      </div>
      <div className="flex flex-row justify-between w-96 text-white">
        <p>
          Qusetion
          <strong> {index + 1}</strong> /{numOfQuestions}
        </p>
        <p>
          <strong>{point}</strong> / {maxPossiblePoints}
        </p>
      </div>
    </header>
  );
};

export default ProgressBar;
