import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Excersieone.css";
import UseAxios from "../../../Components/CustomHookes/UseAxios";
const Excersieone = () => {
  const { data, loading, error, fetchData } = UseAxios();
  const [value, setValue] = useState("");
  const getCurrValue = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
    if (e.target.value === "user") getUserDate();
    else getPostDate();
  };
  // useEffect(() => {
  //   if (value === "user") getUserDate();
  //   else getPostDate();
  // }, []);

  const getUserDate = () => {
    fetchData({
      url: "/users",
      method: "GET",
    });
  };
  const getPostDate = () => {
    fetchData({
      url: "/posts",
      method: "GET",
    });
  };
  console.log("data", data);
  return (
    <div className="Excersieone" data-testid="Excersieone">
      <input
        type="radio"
        value="user"
        onChange={getCurrValue}
        checked={value === "user"}
      />{" "}
      User
      <input
        type="radio"
        value="post"
        onChange={getCurrValue}
        checked={value === "post"}
      />{" "}
      Post<br></br>
      {value}
      {value == "user" &&
        data?.map((value, inde) => {
          return <p key={inde}>{value.name}</p>;
        })}
      {value == "post" &&
        data?.map((value, inde) => {
          return <p key={inde}>{value.title}</p>;
        })}
    </div>
  );
};

Excersieone.propTypes = {};

Excersieone.defaultProps = {};

export default Excersieone;
