import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
import Error from "./components/Error";
import Questions from "./components/quiz/Questions";
import Loader from "./components/Loader";
import NextButton from "./components/NextButton";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  point: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "dataRecieved":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        point:
          question.correctOption === action.payload
            ? state.point + question.points
            : state.point,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };

    default:
      throw new Error("Unknown Error.");
  }
};
function App() {
  const [{ questions, status, index, answer, point }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const questions = async () => {
      try {
        const res = await fetch("http://localhost:9000/questions");
        const data = await res.json();
        console.log(data);
        dispatch({ type: "dataRecieved", payload: data });
      } catch (error) {
        console.log(error);
        dispatch({ type: "dataFailed" });
      }
    };
    questions();
  }, []);
  return (
    <>
      <div className="w-full h-screen bg-[#343a40] flex flex-col align-middle pt-16 gap-4">
        <Header />

        <Main
        // status={status}
        // questions={questions}
        // index={index}
        // dispatch={dispatch}
        >
          {status === "loading" && <Loader />};
          {status === "ready" && <StartScreen dispatch={dispatch} />};
          {status === "error" && <Error />};
          {status === "active" && (
            <>
              {/* <p>{point}</p> */}
              <Questions
                question={questions[index]}
                dispatch={dispatch}
                answer={answer}
              />
              <NextButton dispatch={dispatch} answer={answer} />
            </>
          )}
        </Main>
      </div>
    </>
  );
}

export default App;
