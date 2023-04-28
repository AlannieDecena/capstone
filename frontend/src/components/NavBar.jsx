import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <div className="navBar">
        <div className="nav justify-content-start">
          <h6>Feeling Lavender</h6>
        </div>
        <ul className="nav justify-content-end">
          <li className="nav-item ">
            <a className="nav-link active" aria-current="page">
              <NavLink to="/about">About</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
