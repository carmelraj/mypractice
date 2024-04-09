import { useImperativeHandle, forwardRef } from "react";

const UseImperatives = forwardRef((_, ref) => {
  useImperativeHandle(ref, () => ({
    test() {
      alert("I am from child component");
    },
  }));

  return <div>sdsd</div>;
});

export default UseImperatives;
