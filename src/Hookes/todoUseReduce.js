import React, { useReducer, useRef, useState } from "react";
import Todo from "../Components/todo";
export const TODO_ACTION = {
  ADD: "Add",
  COMPLETED: "Completed",
  DELETE: "Delete",
  EDIT: "Edit",
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
    case TODO_ACTION.EDIT:
      console.log("action.payload.value", action.payload.value);
      return state.map((c) => {
        if (c.id === action.payload.value.updateTodo[0].id) {
          return {
            ...c,
            id: action.payload.value.updateTodo[0].id,
            title: action.payload.value.updateTodo[0].title,
            completed: action.payload.value.updateTodo[0].completed,
          };
        }
        return c;
      });

    default:
      return state;
  }
};

const TodoUseReduce = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [editId, setEditId] = useState(0);
  const inputRef = useRef("");
  //   const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(Date.now(), inputRef.current.value);
    if (editId) {
      const editTodo = state.find((c) => c.id === editId);
      const updateTodo = state.map((c) =>
        c.id === editTodo.id
          ? (c = {
              id: c.id,
              title: inputRef.current.value,
              completed: c.completed,
            })
          : { id: c.id, title: c.title }
      );
      console.log("updateTodo", updateTodo);
      dispatch({ type: TODO_ACTION.EDIT, payload: { value: { updateTodo } } });
      setEditId(0);
      //   inputRef.current.value = "";
      return;
    }
    if (inputRef.current.value !== "") {
      dispatch({
        type: TODO_ACTION.ADD,
        payload: {
          id: Date.now(),
          title: inputRef.current.value,
          completed: false,
        },
      });
      inputRef.current.value = "";
    }
  };

  console.log(state);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" ref={inputRef} placeholder="Title" />
        <button>Add</button>
      </form>
      {state?.map((value) => (
        <Todo
          setEditId={setEditId}
          dispatch={dispatch}
          todo={value}
          ref={inputRef}
        />
      ))}
    </div>
  );
};
export default TodoUseReduce;
