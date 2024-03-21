import React from "react";
import "./params.css";
import { Link, useParams } from "react-router-dom";
const Params = () => {
  const { category } = useParams();
  // console.log(category);
  return (
    <div className="params" data-testid="Params">
      <Link to={"/params/catrgory1"}>params1</Link>&nbsp;&nbsp;
      <Link to={"/params/catrgory2"}>params2</Link>&nbsp;&nbsp;
      <Link to={"/params/catrgory3"}>params3</Link>
      <h2>{category}</h2>
    </div>
  );
};

Params.propTypes = {};

Params.defaultProps = {};

export default Params;
