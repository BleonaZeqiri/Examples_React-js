import React, { useState } from "react";
import "./User.scss";

const State = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    setColor(!color);
  };
  return (
    <div className="state">
      <button type="button" onClick={changeColor}>
        Change{" "}
      </button>
      <h1 className={color ? "green" : ""}>Hello world!</h1>
    </div>
  );
};

export default State;
