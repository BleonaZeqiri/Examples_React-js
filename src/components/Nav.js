import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import { AiFillApple } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProductsMegemenu from "./ProductsMegemenu";
import { BsTriangleFill } from "react-icons/bs";

const Nav = () => {
  return (
    <div className="nav">
      <div className="title">
        <Link to="/">
          <AiFillApple />
        </Link>
      </div>
      <div className="links">
        <div className="nav-link">
          <Link to="/" className="inner-link">
            Products <MdKeyboardArrowDown />
            <BsTriangleFill className="arrow" />
            <ProductsMegemenu />
          </Link>
        </div>
        <div className="nav-link">
          <Link to="/" className="inner-link">
            Home
          </Link>
        </div>
        <div className="nav-link">
          <Link to="/" className="inner-link">
            Blog
          </Link>
        </div>
        <div className="nav-link">
          <Link to="/" className="inner-link">
            About
          </Link>
        </div>
      </div>
      <div className="auth">
        <Link to="/login">Log in</Link>
        <Link to="/signup" className="sign-up">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Nav;
