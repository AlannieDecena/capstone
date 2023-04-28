import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import useFormInput from "../hooks/useFormInput";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function LogIn(props) {
  const userEmailProps = useFormInput("");
  const passwordProps = useFormInput("");
  const { userCurrent, handleUser } = useContext(UserContext);

  const [loggedIn, setLoggedIn] = React.useState(userCurrent.id);
  const [errMsg, setErrMsg] = React.useState("");
  const [loginAttempts, setLoginAttempts] = React.useState(0);
  const nav = useNavigate();

  
  const handleLogin = (e) => {
    e.preventDefault();

    let email = userEmailProps.value;
    let password = passwordProps.value;

    console.log(email + " " + password);

    //login successful/true if both values exist and match
    axios
      .post("http://localhost:8001/user/login", { email, password })
      .then((response) => {
        let isLoggedIn = response.data.data.id;
        console.log(userCurrent)
        
        if (!isLoggedIn) {
          let newAttempts = loginAttempts + 1;

          if (newAttempts === 5) {
            setErrMsg("Maximum login attempts exceeded. Please try again");
          } else {
            setErrMsg("Unsuccessful login attempt #" + newAttempts + " of 5");
          }
          setLoginAttempts(newAttempts);
        } else {
          setErrMsg("");
          handleUser(response.data.data);
          
        }


        setLoggedIn(isLoggedIn);
        isLoggedIn ? nav('/rating') : null
      });
   
    
  };

  return (
    <div className="LogInBox">
      {loggedIn ? <p>logging In</p> : null}
      {!loggedIn && loginAttempts < 5 && (
        <form onSubmit={handleLogin}>
          <div className="row mb-3">
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="email"
                {...userEmailProps}
                placeholder="email"
              />
            </div>
          </div>

          <div className="row mb-3 ">
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="password"
                {...passwordProps}
                placeholder="password"
              />
            </div>
          </div>
          <button type="submit">login</button>
        </form>
      )}
      <p>{errMsg}</p>
      
      <a
        onClick={() => props.onPageSwitch("signup")}
        className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        href="#"
      >
        Don't have an account? SignUp here
      </a>
    </div>
  );
}
