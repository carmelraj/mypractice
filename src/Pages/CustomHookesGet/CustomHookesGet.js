import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CustomHookesGet.css";
import UseFetch from "../../Components/CustomHookes/CustomHookes";
const CustomHookesGet = () => {
  const { data, error, loading } = UseFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <div className="CustomHookesGet" data-testid="CustomHookesGet">
      <table>
        <tr>
          <th>Name</th>
          <th>Username</th>
        </tr>
        {data?.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.username}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

CustomHookesGet.propTypes = {};

CustomHookesGet.defaultProps = {};

export default CustomHookesGet;
