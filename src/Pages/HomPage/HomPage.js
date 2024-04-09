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
    <br></br>
    <Link to={"/home-todos"}>Todos</Link> <br></br>
    <Link to={"/image-upload"}>Image Upload</Link>
    <br></br>
    <Link to={"/pagination-one"}>Pagination One</Link>
    <br></br>
    <Link to={"/pagination-two"}>Pagination Two</Link>
    <br></br>
    <Link to={"/pagination-three"}>Pagination Three</Link>
  </div>
);

HomPage.propTypes = {};

HomPage.defaultProps = {};

export default HomPage;
