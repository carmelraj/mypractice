import React, { useState, useEffect } from "react";
import "./PaginationTwo.css";
import axios from "axios";
import ProductTwo from "../../../Components/Pagination/PaginationTwo/product";
import Pagination from "../../../Components/Pagination/PaginationTwo/paginaiton";
const PaginationTwo = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);
  useEffect(() => {
    paginate();
  }, []);

  const paginate = (page) => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?&_size=${rowsPerPage}&_page=${page}`
      )
      .then((response) => {
        console.log("response2", response.data);
        setData(response.data);
      })
      .catch((error) => console.error(error));
    const test = () => {
      alert("its working");
    };

    // axios
    //   .get(
    //     `https://jsonplaceholder.typicode.com/posts?&_size=${rowsPerPage}&_page=${pageNumber}`
    //   )
    //   .then((response) => {
    //     console.log("response2", response.data);
    //     setData(response.data);
    //   })
    //   .catch((error) => console.error(error));
  };

  return (
    <div className="PaginationTwo" data-testid="PaginationTwo">
      <ProductTwo data={data} />
      <Pagination
        page={page}
        setPage={setPage}
        length={data.length}
        rowsPerPage={rowsPerPage}
        paginate={paginate}
      />
    </div>
  );
};
export default PaginationTwo;
