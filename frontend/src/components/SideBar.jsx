// Importing React library and react-router-dom module
import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
// Importing the capLogo image
import capLogo from "../images/capLogo.png"

// This component represents the sidebar for the user's dashboard
export default function SideBar() {
    // Declaring a constant that allows for navigation between pages
    const nav = useNavigate()

    // Rendering the sidebar component
    return (
        <>
            {/* Sidebar HTML */}
            <div className="sideDiv" >
                <ul className="sideMenu">
                    {/* Navigation links */}
                    <li>
                        <NavLink to="/user">My DashBoard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/notes">Journal</NavLink>
                    </li>
                    <li>
                        <NavLink to="/goals">Goals</NavLink>
                    </li>
                    <li>
                        <NavLink to="/changemood">Mood</NavLink>
                    </li>
                    <li>
                        <NavLink to="/logout">sign out</NavLink>
                    </li>
                    {/* Displaying the capLogo image */}
                    <img className="sideLogo" src={capLogo} alt="capLogo" />
                </ul>
            </div>
        </>
    );
}
