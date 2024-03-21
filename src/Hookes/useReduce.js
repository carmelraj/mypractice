import React, { useReducer } from "react";
const ACTION = {
  INCREMENT: "Increment",
  DECREMENT: "Decrement",
  RESET: "Reset",
};
const counterReducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 };
    case ACTION.DECREMENT:
      return { count: state.count - 1 };
    case ACTION.RESET:
      return { count: 0 };
    default:
      throw Error("Invalid action");
  }
};
const UseReduce = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
};
export default UseReduce;
