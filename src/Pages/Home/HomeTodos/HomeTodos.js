import React, { useRef, useState } from "react";
import "./HomeTodos.css";
import TodoOne from "../../../Components/todoOne";
const HomeTodos = () => {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(0);
  const inputRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();

    if (editId) {
      const getId = data.find((c) => c.id === editId);
      const updateTodo = data.map((c) =>
        c.id === getId.id
          ? (c = { id: c.id, title: inputRef.current.value })
          : { id: c.id, title: c.title }
      );
      setData(updateTodo);
      setEditId(0);
      return;
    }

    if (inputRef.current.value !== "") {
      setData([
        ...data,
        { id: Date.now(), title: inputRef.current.value, isCompleted: false },
      ]);
    }
    inputRef.current.value = "";
  };

  const removeHandler = (id) => {
    // console.log("iddd", id);
    const remove = data.filter((c) => c.id !== id);
    setData(remove);
  };

  const editHandler = (id) => {
    setEditId(id);
    const edit = data.find((c) => c.id === id);
    inputRef.current.value = edit.title;
  };
  return (
    <div className="HomeTodos" data-testid="HomeTodos">
      <form onSubmit={submitHandler}>
        <input type="text" ref={inputRef} placeholder="Todos" />
        <button>Add</button>
      </form>

      {data?.map((value) => (
        <TodoOne
          data={value}
          setData={setData}
          ref={inputRef}
          remove={removeHandler}
          edit={editHandler}
        />
      ))}
    </div>
  );
};

HomeTodos.propTypes = {};

HomeTodos.defaultProps = {};

export default HomeTodos;
