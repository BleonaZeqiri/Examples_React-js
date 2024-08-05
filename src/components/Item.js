import React from "react";

const Item = ({ title, description }) => {
  return (
    <div className="item">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Item;
