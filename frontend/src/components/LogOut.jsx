// Import React and necessary dependencies
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { NavLink, Link } from "react-router-dom";

// This component is for logging out the user
export default function LogOut() {
  // Retrieve userCurrent and handleUser from UserContext
  const { userCurrent, handleUser } = useContext(UserContext);

  // Navigate to a new location in the browser history
  const nav = useNavigate();

  // When the component mounts, clear userCurrent and navigate to the home page
  useEffect(() => {
    handleUser({});

    nav("/");
  }, []);

  // Log out the user
  return <div>{/* <a onClick={handleLogOut}>LogOut</a> */}</div>;
}

