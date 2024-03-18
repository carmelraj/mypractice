import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ExcersieThree.css";
const ExcersieThree = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(20);
  const [offset, setOffset] = useState(0);

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
        console.log("Executed");
        setData([...data, ...response.data]);
        // setPage((prevPage) => prevPage + 1);
      })
      .catch((error) => console.error(error));
  };

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop ===
  //     document.documentElement.offsetHeight
  //   ) {
  //     return;
  //   }
  //   loadData();
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 >= scrollHeight) {
        setPage(page + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  return (
    <div className="ExcersieThree" data-testid="ExcersieThree">
      {/* <div className="dummyData"> */}
      {data?.map((value, index) => {
        return (
          <p key={index}>
            {value.id} . {value.title}
          </p>
        );
      })}
      {/* </div> */}
    </div>
  );
};
export default ExcersieThree;
