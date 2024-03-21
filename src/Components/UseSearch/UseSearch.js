import React from "react";
const HomeUseSearch = ({ type, placeholder, name, query, onChange }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={query}
        onChange={onChange}
      />
    </>
  );
};
export default HomeUseSearch;
