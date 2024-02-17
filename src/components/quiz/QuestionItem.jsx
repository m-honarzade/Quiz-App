const QuestionItem = ({ children }) => {
  return (
    <div>
      <button className="bg-[#495057] px-6 py-2 rounded-full w-96 text-left text-white hover:cursor-pointer hover:translate-x-2 hover:duration-150 hover:bg-[#3e444b] hover:border hover:border-[#495057]">
        {children}
      </button>
    </div>
  );
};

export default QuestionItem;
