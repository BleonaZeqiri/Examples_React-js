import React from "react";
import { Link } from "react-router-dom";
import { NavData } from "../components/NavData";
const ProductsMegemenu = () => {
  return (
    <div className="nav-megamenu">
      {NavData.map((props) => {
        return (
          <div className="menu-link">
            <Link to={props.to}>
              <div className="icon">{props.icon}</div>
              <div className="block">
                <h6>{props.title}</h6>
                <p>{props.description}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsMegemenu;
