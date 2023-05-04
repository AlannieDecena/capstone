import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import capLogo from "../images/capLogo.png"
// This the sidebar for the users bashboard

export default function SideBar() {
    const nav = useNavigate()
  return (
    <>
    <div className="sideDiv" >
      <ul className="sideMenu">
      
        <li>
        <NavLink to="/user">My DashBoard</NavLink>
          
        </li>
        <li>
        <NavLink to="/notes">Journal</NavLink>
        </li>
        {/* <li>
          <NavLink to="/chart">Charts</NavLink>
        </li> */}
        <li>
          <NavLink to="/goals">Goals</NavLink>
        </li>
        <li>
          <NavLink to="/changemood">Mood</NavLink>
        </li>
        <li>
          <NavLink to="/logout">sign out</NavLink>
        </li>
        <img className="sideLogo" src={capLogo} alt="capLogo" />
      </ul>
      
    </div>

</>
  );
}
