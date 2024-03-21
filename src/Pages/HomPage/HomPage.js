import React from "react";
import "./HomPage.css";
import { Link } from "react-router-dom";

const HomPage = () => (
  <div className="HomPage" data-testid="HomPage">
    <Link to={"/searchparams"}>Seach Params</Link> <br></br>
    <Link to={"/params/catrgory1"}>params</Link>
    <br></br>
    <Link to={"/home-search-filter"}>Search Filter</Link>
    <br></br>
    <Link to={"/auto-search"}>Auto Search</Link>
  </div>
);

HomPage.propTypes = {};

HomPage.defaultProps = {};

export default HomPage;
