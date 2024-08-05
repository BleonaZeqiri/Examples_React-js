import React from "react";
import { Data } from "./data";
import "./User.scss";
import Item from "./Item";

const User = () => {
  return (
    <div className="user">
      {Data.map((d, i) => {
        return <Item key={i} {...d} />;
      })}
    </div>
  );
};

export default User;
