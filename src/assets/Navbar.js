import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../imgs/logo.png";

function List() {
  return (
    <header>
      <div className="containment container-flex">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <nav>
          <div className="list">
            <Link to="/" className="listItem" >
              Home
            </Link>
            <Link to="/about" className="listItem" >
              About Us
            </Link>
            <Link
              to="/gallery"
              className="listItem"
              
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="listItem"
              
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default List;
