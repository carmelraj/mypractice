import React, { useState, useRef, useCallback } from "react";
import "./ExcersieFour.css";
import UseSearch from "../../../Components/CustomHookes/UseSearch";
const ExcersieFour = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  // const [data, setData] = useState([]);
  const { data, error, loading, hadMore } = UseSearch(query, pageNumber);
  const observer = useRef();

  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hadMore) {
          setPageNumber((prevNumber) => prevNumber + 1);
        }
      });
      if (node) observer.current.observer(node);
    },
    [loading, hadMore]
  );
  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  return (
    <div className="ExcersieFour" data-testid="ExcersieFour">
      <input value={query} onChange={handleSearch} placeholder="Search..." />
      {data?.map((value, index) => {
        if (data.length === index + 1) {
          return (
            <p key={index} ref={lastElementRef}>
              {value}
            </p>
          );
        } else {
          return <p key={index}>{value}</p>;
        }
      })}
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error...</h2>}
    </div>
  );
};
export default ExcersieFour;
