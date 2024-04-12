import React from "react";
import HOCComponent from "../../../Components/HOC/HOCComponents";
import "./HOC.css";

const Hoc = ({ value }) => {
  return (
    <div className="HOC" data-testid="Hoc">
      <h1>My name is :{value.name}</h1>
      <h2>My age is : {value.age}</h2>
      <h3>My city is : {value.city}</h3>
      <h4>My state is : {value.state}</h4>
    </div>
  );
};
export default HOCComponent(Hoc);
