import React, { useReducer, useRef, useState } from "react";
import Todo from "../Components/todo";
export const TODO_ACTION = {
  ADD: "Add",
  COMPLETED: "Completed",
  DELETE: "Delete",
};

const reducer = (state, action) => {
  switch (action.type) {
    case TODO_ACTION.ADD:
      return [...state, action.payload];
    case TODO_ACTION.DELETE:
      return state.filter((c) => c.id !== action.payload.id);
    case TODO_ACTION.COMPLETED:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
};

const TodoUseReduce = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const inputRef = useRef(null);
  //   const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(Date.now(), inputRef.current.value);
    dispatch({
      type: TODO_ACTION.ADD,
      payload: {
        id: Date.now(),
        title: inputRef.current.value,
        completed: false,
      },
    });
    inputRef.current.value = "";
  };

  console.log(state);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" ref={inputRef} placeholder="Title" />
        <button>Add</button>
      </form>
      {state?.map((value) => (
        <Todo dispatch={dispatch} todo={value} />
      ))}
    </div>
  );
};
export default TodoUseReduce;
