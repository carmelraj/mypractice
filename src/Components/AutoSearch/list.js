import React from "react";
import { Link } from "react-router-dom";
const ShowAutoListResults = ({ data, item }) => {
  return (
    <div>
      <ul>
        {data?.map((value, index) => {
          return (
            <li key={index} className={item === index ? "active" : ""}>
              <Link to={value.show.url} target="_blank">
                {value.show.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ShowAutoListResults;
