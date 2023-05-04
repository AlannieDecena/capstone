import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { NavLink, Link } from "react-router-dom";
// This component is for loging out the user

export default function LogOut() {
  const { userCurrent, handleUser } = useContext(UserContext);
  const nav = useNavigate();
  // const handleLogOut = () => {
  useEffect(() => {
    handleUser({});

    nav("/");
  }, []);
  // }

  return <div>{/* <a onClick={handleLogOut}>LogOut</a> */}</div>;
}
