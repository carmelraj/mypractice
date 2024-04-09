import axios from "axios";
import React, { useState, useEffect } from "react";
import "./PaginationThree.css";
import Product from "../../../Components/Pagination/PaginationThree/product";
const PaginationThree = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(4);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=100")
      .then((respose) => setData(respose.data.products))
      .catch((error) => console.error(error));
  }, []);

  const pagination = () => {};

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 >= scrollHeight) {
        setPage((prePgae) => prePgae + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  return (
    <div className="PaginationThree" data-testid="PaginationThree">
      <div className="container">
        {data
          .slice(page * rowsPerPage - rowsPerPage, page * rowsPerPage)
          .map((data) => (
            <Product data={data} />
          ))}
      </div>
    </div>
  );
};
export default PaginationThree;
