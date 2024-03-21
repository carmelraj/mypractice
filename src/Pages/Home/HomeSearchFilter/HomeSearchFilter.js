import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomeSearchFilter.css";
import HomeUseSearch from "../../../Components/UseSearch/UseSearch";
import SearchList from "../../../Components/UseSearch/SearchList";
const HomeSearchFilter = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const setValue = (e) => {
    let value = e.target.value;
    setQuery(value);
  };
  const loadData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="HomeSearchFilter" data-testid="HomeSearchFilter">
      {/* <input
        placeholder="Search..."
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      /> */}
      <HomeUseSearch
        type="text"
        name="search"
        query={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />
      {query}
      <SearchList search={query} data={data} />
    </div>
  );
};

HomeSearchFilter.propTypes = {};

HomeSearchFilter.defaultProps = {};

export default HomeSearchFilter;
