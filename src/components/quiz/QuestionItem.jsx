const QuestionItem = ({
  children,
  dispatch,
  answer,
  optionIndex,
  correctAnswer,
}) => {
  console.log(answer, correctAnswer);
  return (
    <div>
      <button
        onClick={() => dispatch({ type: "newAnswer", payload: optionIndex })}
        disabled={answer !== null}
        className={`text-sm md:text-md bg-[#495057] px-6 py-2 rounded-full w-96 text-left text-white 
        ${
          answer === null
            ? "hover:cursor-pointer hover:translate-x-2 hover:duration-150 hover:bg-[#3e444b] hover:border hover:border-[#495057]"
            : ""
        } 
        ${
          answer !== null && optionIndex !== correctAnswer
            ? "bg-orange-300"
            : ""
        } 
        hover:border hover:border-[#495057] ${
          answer !== null && optionIndex === answer ? "translate-x-3" : ""
        } 
        ${
          answer !== null && optionIndex === correctAnswer ? "bg-green-400" : ""
        }`}
      >
        {children}
      </button>
    </div>
  );
};

export default QuestionItem;
