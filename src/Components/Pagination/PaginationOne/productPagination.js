import "./productPagination.css";
const ProductPagination = ({
  length,
  postPerPage,
  paginate,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(length / postPerPage); i++) {
    pageNumber.push(i);
  }
  console.log("pg", currentPage);
  return (
    <div className="productPagination">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>
      <ul>
        {pageNumber?.map((value) => {
          return (
            <li
              key={value}
              className={currentPage === value ? "active" : ""}
              onClick={() => paginate(value)}
            >
              {value}
            </li>
          );
        })}
      </ul>
      <button
        disabled={currentPage === length / currentPage}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};
export default ProductPagination;
