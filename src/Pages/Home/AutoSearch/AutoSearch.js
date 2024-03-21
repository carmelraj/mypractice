import React, { useState, useEffect } from "react";
import "./AutoSearch.css";
import AutoSearchInput from "../../../Components/AutoSearch/input";
import ShowAutoListResults from "../../../Components/AutoSearch/list";
import { Link } from "react-router-dom";
import axios from "axios";
const AutoSearch = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);
  useEffect(() => {
    if (query !== "") {
      axios({
        url: "http://api.tvmaze.com/search/shows",
        method: "GET",
        params: { q: query },
      })
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => console.error(error));
    } else {
      setData([]);
    }
  }, [query]);

  const handleKeyDown = (e) => {
    console.log(e.key);
    if (selectedItem < data.length) {
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem((prev) => prev - 1);
      } else if (e.key === "ArrowDown" && selectedItem < data.length - 1) {
        setSelectedItem((prev) => prev + 1);
      } else if (e.key === "Enter" && selectedItem >= 0) {
        window.open(data[selectedItem].show.url);
        setQuery(data[selectedItem]?.show?.name);
        setData([]);
      }
    } else {
      setSelectedItem(-1);
    }
  };
  return (
    <div className="AutoSearch" data-testid="AutoSearch">
      <AutoSearchInput
        type="text"
        name="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Auto Search"
        onKeyDown={handleKeyDown}
      />
      <ShowAutoListResults data={data} item={selectedItem} />
    </div>
  );
};
export default AutoSearch;
