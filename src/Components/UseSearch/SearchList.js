import React from "react";
const SearchList = ({ data, search }) => {
  console.log("qqq", data.length);
  return (
    <>
      {data
        ?.filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item?.name?.toLowerCase().includes(search);
        })
        .map((data, index) => {
          console.log(">>", data);
          return !data !== null ? (
            <p key={index}>{data.name}</p>
          ) : (
            <p key={index}>No data</p>
          );
        })}
    </>
  );
};
export default SearchList;
