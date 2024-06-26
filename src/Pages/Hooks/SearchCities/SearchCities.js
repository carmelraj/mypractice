import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./SearchCities.css";
import Debouncing from "../../../Hookes/debouncing";
import cities from "../../../Utils/cities.json";
const SearchCities = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [citiesName, setCitiesName] = useState("");
  const result = Debouncing(search);

  useEffect(() => {
    const fresult = cities?.cities?.filter((city) =>
      city.denominazione_ita_altra.toLowerCase().includes(result.toLowerCase())
    );
    setData(fresult);
  }, [result]);

  const selectCity = (item) => {
    setCitiesName(item);
    setData(null);
    setSearch("");
  };
  return (
    <div className="SearchCities" data-testid="SearchCities">
      <input
        type="text"
        placeholder="Search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {result && (
        <ul>
          {data?.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => selectCity(item?.denominazione_ita_altra)}
              >
                {item?.denominazione_ita_altra}
              </li>
            );
          })}
        </ul>
      )}
      <h1>{citiesName}</h1>
      {/* <ul>
    {cities.filter((data,index)=>{
        return <li key={index}>{}</li>
        // data.denominazione_ita_altra==result?
    })}
    </ul> */}
    </div>
  );
};

SearchCities.propTypes = {};

SearchCities.defaultProps = {};

export default SearchCities;
