import React, { useState, useEffect } from "react";
import "./ExcersieFour.css";
import UseSearch from "../../../Components/CustomHookes/UseSearch";
const ExcersieFour = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  return (
    <div className="ExcersieFour" data-testid="ExcersieFour">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <UseSearch />
    </div>
  );
};
export default ExcersieFour;
