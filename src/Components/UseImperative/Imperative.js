import { useImperativeHandle, forwardRef } from "react";

const UseImperatives = forwardRef((_, ref) => {
  useImperativeHandle(ref, () => ({
    test() {
      alert("I am from child component");
    },
  }));

  return <div></div>;
});

export default UseImperatives;
