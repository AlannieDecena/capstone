import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import LogOut from "../components/LogOut";
import capLogo from "../images/capLogo.png"

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
        <NavLink to="/displaynotes">Notes</NavLink>
        </li>
        <li>
          <NavLink to="/displaymoods">Moods</NavLink>
        </li>
        <li>
          <NavLink to="/">sign out</NavLink>
        </li>
        <img className="sideLogo" src={capLogo} alt="capLogo" />
      </ul>
      
    </div>

{/* <div className="contentUser">
<section>
  <h1>User Page</h1>

  
</section>

<LogOut/>
</div>  */}
</>
  );
}
