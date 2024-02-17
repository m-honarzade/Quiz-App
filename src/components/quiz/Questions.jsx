import React from "react";
import QuestionItem from "./QuestionItem";

const Questions = ({ question }) => {
  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      <h4 className="text-white text-lg font-bold mb-4">{question.question}</h4>
      {question.options.map((item, index) => (
        <QuestionItem key={index}>{item}</QuestionItem>
      ))}
    </div>
  );
};

export default Questions;
