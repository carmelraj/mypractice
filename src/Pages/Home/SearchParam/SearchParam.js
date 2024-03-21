import React from "react";
import "./SearchParam.css";
import { useSearchParams } from "react-router-dom";
const SearchParam = () => {
  const [searchparams, setSearchParams] = useSearchParams();
  const showActiveUser = searchparams.get("filter") === "active";
  return (
    <div className="SearchParam" data-testid="SearchParam">
      <h1>Search Params</h1>
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Active user{" "}
      </button>
      <button onClick={() => setSearchParams({})}>Reset Filter </button>
      <br></br>
      {showActiveUser ? <h2>Showing Active</h2> : <h2>Not Active User</h2>}
    </div>
  );
};

SearchParam.propTypes = {};

SearchParam.defaultProps = {};

export default SearchParam;
