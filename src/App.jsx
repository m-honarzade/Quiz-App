import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
import Error from "./components/Error";
import Questions from "./components/quiz/Questions";
import Loader from "./components/Loader";

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
              <Questions
                question={questions[index]}
                dispatch={dispatch}
                answer={answer}
              />
              <p>{point}</p>
            </>
          )}
        </Main>
      </div>
    </>
  );
}

export default App;
