import React from "react";
import { Link } from "react-router-dom";
import { Data4 } from "./Images";
import "./Browser.scss";
import { RiH1 } from "react-icons/ri";
const Browser = () => {
  return (
    <div className="browser-item">
      {Data4.map((props) => {
        return (
          <div className="item">
            <div className="inline">
              <div className="logo" style={{ content: `url(${props.logo})` }}>
                <h6>{props.name}</h6>
              </div>
              <p>{props.description}</p>
              <Link to={props.to}>{props.link}</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Browser;
