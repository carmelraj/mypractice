import axios from "axios";
import React, { useState, useEffect } from "react";
import "./PaginationOne.css";
import ShowProduct from "../../../Components/Pagination/PaginationOne/showProducts";
import ProductPagination from "../../../Components/Pagination/PaginationOne/productPagination";
const PaginationOne = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const IndexOfLastPost = currentPage * rowsPerPage;
  const IndexOfFirstPost = IndexOfLastPost - rowsPerPage;
  const finalData = data.slice(IndexOfFirstPost, IndexOfLastPost);

  const paginate = (pageNmber) => setCurrentPage(pageNmber);
  return (
    <div className="PaginationOne" data-testid="PaginationOne">
      <ShowProduct data={finalData} />
      <ProductPagination
        paginate={paginate}
        length={data?.length}
        postPerPage={rowsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
export default PaginationOne;
