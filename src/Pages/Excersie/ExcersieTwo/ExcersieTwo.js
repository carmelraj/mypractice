import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ExcersieTwo.css";
const ExcersieTwo = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(10);

  useEffect(() => {
    loadData();
  }, [page]);

  const loadData = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${rowPerPage}`
      )
      .then((response) => {
        // setData((pre) => [...pre, ...response.data]);
        setData([...data, ...response.data]);
      })
      .catch((error) => console.error(error));
  };

  const loadMoreData = () => {
    setPage(page + 1);
  };

  return (
    <div className="ExcersieTwo" data-testid="ExcersieTwo">
      {data?.map((value, index) => {
        return (
          <p key={index}>
            {value.id} . {value.title}
          </p>
        );
      })}
      <button onClick={() => loadMoreData()}>Load More</button>
    </div>
  );
};

ExcersieTwo.propTypes = {};

ExcersieTwo.defaultProps = {};

export default ExcersieTwo;
