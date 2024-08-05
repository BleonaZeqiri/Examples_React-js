import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { FooterData } from "../components/data";

const Footer = () => {
  return (
    <div className="footer">
      {FooterData.map((props, index) => {
        return (
          <div key={index} className="col">
            <h6>{props.category}</h6>
            <div className="links">
              {props.links.map((l, linkIndex) => {
                return (
                  <Link key={linkIndex} to={l.to}>
                    {l.link}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
