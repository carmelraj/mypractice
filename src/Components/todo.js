import { forwardRef } from "react";
import { TODO_ACTION } from "../Hookes/todoUseReduce";
const Todo = ({ todo, dispatch, setEditId }, ref) => {
  const remove = (id) => {
    // console.log("delete", id);
    dispatch({ type: TODO_ACTION.DELETE, payload: { id: id } });
  };

  const todoCompleted = (completed) => {
    // console.log(completed.id);
    dispatch({ type: TODO_ACTION.COMPLETED, payload: { id: completed.id } });
  };

  const edit = (todo) => {
    ref.current.value = todo.title;
    setEditId(todo.id);
    // useImperativeHandle()
    // console.log("", ref);
  };
  return (
    <>
      <p key={todo.id} style={{ color: todo.completed ? "green" : "red" }}>
        {todo.title}&nbsp;
        <span onClick={() => remove(todo.id)}>x</span>&nbsp;
        <button onClick={() => todoCompleted(todo)}>Completed</button>
        <button onClick={() => edit(todo)}>Edit</button>
      </p>
    </>
  );
};
export default forwardRef(Todo);
