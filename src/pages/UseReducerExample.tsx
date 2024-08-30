import { useReducer } from "react";

type TAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "incrementBySetAmount"; payload: number };

const initialState = {
  count: 0,
};

const reducer = (currentState: typeof initialState, action: TAction) => {
  console.log("Current State =>", currentState);
  console.log("Action =>", action);
  switch (action.type) {
    case "increment":
      return { count: currentState.count + 1 };
    case "decrement":
      return { count: currentState.count - 1 };
    case "incrementBySetAmount":
      return { count: currentState.count + action.payload };

    default:
      return currentState;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="btn btn-primary"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "incrementBySetAmount", payload: 3 })}
        className="btn btn-primary"
      >
        Increment By 3
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="btn btn-secondary"
      >
        Decrement
      </button>
    </div>
  );
};

export default UseReducerExample;
