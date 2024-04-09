import "./pagination.css";
const PaginationTwo = ({ length, page, setPage, rowsPerPage, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= length; i++) {
    pageNumber.push(i);
  }

  return (
    <div className="paginationTow">
      <ul>
        {pageNumber?.map((number) => {
          return (
            <li
              key={number}
              className={page === number ? "active" : ""}
              onClick={() => paginate(number)}
            >
              {number}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default PaginationTwo;
