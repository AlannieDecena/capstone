import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { NavLink, Link } from "react-router-dom";
// This component is for loging out the user

export default function LogOut() {
    const {handleUser} = useContext(UserContext);
   
    const handleLogOut = () => {
        handleUser({}) ;
 
    }

  return (
    <div>
        <NavLink to="/" onClick={handleLogOut}>LogOut</NavLink>
    </div>
  )
}
