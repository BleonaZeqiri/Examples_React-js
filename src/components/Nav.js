import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import { AiFillApple } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import ProductsMegemenu from "./ProductsMegemenu";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav">
      <div className="title">
        <Link to="/">
          <AiFillApple />
          Bleona
        </Link>
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      <div className={`links ${menuOpen ? "active" : ""}`}>
        <div className="nav-link">
          <Link to="/" className="inner-link">
            Products <MdKeyboardArrowDown />
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

        <div className="auth">
          <Link to="/">Log in</Link>
          <Link to="/" className="sign-up">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
