import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
import Error from "./components/Error";
import Questions from "./components/quiz/Questions";
import Loader from "./components/Loader";
import NextButton from "./components/NextButton";
import ProgressBar from "./components/ProgressBar";
import FinishedScreen from "./components/FinishedScreen";

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
    case "finish":
      return {
        ...state,
        status: "finish",
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
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
  const numOfQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
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

        <Main>
          {status === "loading" && <Loader />}
          {status === "ready" && <StartScreen dispatch={dispatch} />}
          {status === "error" && <Error />}
          {status === "active" && (
            <>
              <ProgressBar
                numOfQuestions={numOfQuestions}
                maxPossiblePoints={maxPossiblePoints}
                index={index}
                point={point}
                answer={answer}
              />
              <Questions
                question={questions[index]}
                dispatch={dispatch}
                answer={answer}
              />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                numOfQuestions={numOfQuestions}
                index={index}
              />
            </>
          )}
          {status === "finish" && (
            <FinishedScreen
              maxPossiblePoints={maxPossiblePoints}
              point={point}
              dispatch={dispatch}
            />
          )}
        </Main>
      </div>
    </>
  );
}

export default App;
