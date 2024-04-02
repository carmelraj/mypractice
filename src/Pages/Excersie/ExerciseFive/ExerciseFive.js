import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ExerciseFive.css";

const ExerciseFive = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(10);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setItems(response.data))
      .catch((error) => console.error(error));
  };
  const showMoreItems = () => {
    setVisible((pevValue) => pevValue + 10);
  };
  return (
    <div className="ExerciseFive" data-testid="ExerciseFive">
      {items.slice(0, visible).map((item, index) => (
        <div className="card">
          <div className="id">{item.id}</div>
        </div>
      ))}
      {visible !== items.length && (
        <button onClick={showMoreItems}>Add More</button>
      )}
    </div>
  );
};
export default ExerciseFive;
