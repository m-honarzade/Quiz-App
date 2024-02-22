const NextButton = ({ dispatch, answer, numOfQuestions, index }) => {
  if (index < numOfQuestions - 1)
    return (
      <div className="text-right mr-52 mt-4 w-full">
        {answer === null ? null : (
          <button
            onClick={() => dispatch({ type: "nextQuestion" })}
            className="bg-[#3e444b] px-4 py-2 rounded-full text-white"
          >
            Next
          </button>
        )}
      </div>
    );
  if (index === numOfQuestions - 1)
    return (
      <div className="text-right mr-52 mt-4 w-full">
        {answer === null ? null : (
          <button
            onClick={() => dispatch({ type: "finish" })}
            className="bg-[#3e444b] px-4 py-2 rounded-full text-white"
          >
            Finish
          </button>
        )}
      </div>
    );
};

export default NextButton;
