import { TODO_ACTION } from "../Hookes/todoUseReduce";
const Todo = ({ todo, dispatch }) => {
  const remove = (id) => {
    // console.log("delete", id);
    dispatch({ type: TODO_ACTION.DELETE, payload: { id: id } });
  };

  const todoCompleted = (completed) => {
    // console.log(completed.id);
    dispatch({ type: TODO_ACTION.COMPLETED, payload: { id: completed.id } });
  };
  return (
    <>
      <p key={todo.id} style={{ color: todo.completed ? "green" : "red" }}>
        {todo.title}&nbsp;
        <span onClick={() => remove(todo.id)}>x</span>&nbsp;
        <button onClick={() => todoCompleted(todo)}>Completed</button>
      </p>
    </>
  );
};
export default Todo;
