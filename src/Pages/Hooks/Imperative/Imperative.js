import React, { useRef } from "react";
import "./Imperative.css";
import UseImperatives from "../../../Components/UseImperative/Imperative";
const Imperative = () => {
  const inputRef = useRef(null);
  return (
    <div className="Imperative" data-testid="Imperative">
      <h2>use imerative hooks</h2>
      <button onClick={() => inputRef.current.test()}>Click</button>
      <UseImperatives ref={inputRef} />
    </div>
  );
};
export default Imperative;
