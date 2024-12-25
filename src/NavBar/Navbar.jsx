import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light">
      <div className="container">
        <div className="">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/accordian">
                Accordian
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dropdown">
                CountryChange
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dropdown">
                CountryChangeTwo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fetchdropdown">
                FetchDropdown
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/canvas">
                Canvas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pdf">
                Pdf
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/carosel">
                Carosel
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">
                FetchUsers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
