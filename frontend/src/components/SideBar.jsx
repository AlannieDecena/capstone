import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import LogOut from "../components/LogOut";

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
        <NavLink to="/notes">Notes</NavLink>
        </li>
        <li>
          <NavLink to="/rating">Moods</NavLink>
        </li>
        <li>
          <NavLink to="/">sign out</NavLink>
        </li>
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
