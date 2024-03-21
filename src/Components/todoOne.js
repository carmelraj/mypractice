import React, { forwardRef } from "react";
const TodoOne = ({ data, setData, remove, edit }, ref) => {
  console.log("<>", data);
  //   const remove = (id) => {
  //     const remove = data?.filter((c) => c.id !== id);
  //     setData(remove);
  //   };
  return (
    <div>
      {data.title}
      <button onClick={() => edit(data.id)}>Edit</button>
      <button onClick={() => remove(data.id)}>Delete</button>
    </div>
  );
};
export default forwardRef(TodoOne);
