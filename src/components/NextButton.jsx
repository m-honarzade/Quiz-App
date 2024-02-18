const NextButton = ({ dispatch, answer }) => {
  return (
    <div className="text-right mr-52 mt-4">
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
};

export default NextButton;
