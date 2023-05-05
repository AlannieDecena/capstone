import React from "react";
import { NavLink, Link } from "react-router-dom";

// This component represents the navbar for the abouts page.
// It displays a logo and a login link.

export default function () {
  return (
    <div>
      <div className="navBar">
        <div className="nav justify-content-start">
          <h6>Feeling Lavender</h6> {/* Title */}
        </div>
        <ul className="nav justify-content-end">
          <li className="nav-item ">
            <a className="nav-link active" aria-current="page">

            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <li>
                <NavLink to="/">Login</NavLink> {/* Login link */}
              </li>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
