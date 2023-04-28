import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import LogIn from "./LogIn";
import { NavLink, Link } from "react-router-dom";

export default function LogOut() {
    const {handleUser} = useContext(UserContext);
    const navgate = useNavigate()
    const handleLogOut = () => {
        handleUser({}) ;
        // navgate('/login')
        <NavLink to="/"/>
    }

  return (
    <div>
        <button onClick={handleLogOut}>LogOut</button>
    </div>
  )
}
