import React, { useState, useContext } from "react"; //importing React and other necessary modules
import { UserContext } from "../context/UserContext"; //importing the UserContext from the UserContext file
import useFormInput from "../hooks/useFormInput"; //importing the useFormInput hook
import axios from "axios"; //importing axios for making HTTP requests
import { NavLink } from "react-router-dom"; //importing NavLink from react-router-dom for navigation
import { useNavigate } from "react-router-dom"; //importing useNavigate from react-router-dom for navigation

/* A component for logging in a user, which takes a props parameter */
export default function LogIn(props) {
  const userEmailProps = useFormInput(""); //creating a hook for user email
  const passwordProps = useFormInput(""); //creating a hook for user password
  const { userCurrent, handleUser } = useContext(UserContext); //using the useContext hook to access the userCurrent and handleUser values from UserContext

  const [loggedIn, setLoggedIn] = React.useState(userCurrent.id); //using the useState hook to set the loggedIn state as the userCurrent.id
  const [errMsg, setErrMsg] = React.useState(""); //using the useState hook to set the errMsg state as an empty string
  const [loginAttempts, setLoginAttempts] = React.useState(0); //using the useState hook to set the loginAttempts state as 0
  const nav = useNavigate(); //calling the useNavigate hook

  /* A function for handling a user login */
  const handleLogin = (e) => {
    e.preventDefault(); //preventing the default behavior of the form submission

    let email = userEmailProps.value; //getting the value of the user email
    let password = passwordProps.value; //getting the value of the user password

    console.log(email + " " + password); //logging the user email and password

    //sending a post request to the server to check if the user exists and the password matches
    axios
      .post("http://localhost:8001/user/login", { email, password })
      .then((response) => {
        let isLoggedIn = response.data.data.id; //getting the user id from the response

        console.log(response.data.data); //logging the response data

        //if the user is not logged in, increment the loginAttempts and set the errMsg accordingly
        if (!isLoggedIn) {
          let newAttempts = loginAttempts + 1;

          if (newAttempts === 5) {
            setErrMsg("Maximum login attempts exceeded. Please try again");
          } else {
            setErrMsg("Unsuccessful login attempt #" + newAttempts + " of 5");
          }
          setLoginAttempts(newAttempts);
        } else {
          setErrMsg(""); //if the user is logged in, set the errMsg to an empty string

          handleUser(response.data.data); //calling the handleUser function with the user data
          console.log(userCurrent); //logging the userCurrent data
        }

        setLoggedIn(isLoggedIn); //set the loggedIn state as the isLoggedIn value
        isLoggedIn ? nav("/entryMoods") : null; //if the user is logged in, navigate to the /entryMoods path
      });
  };

  // This is a React component that returns a login form.
// It renders different elements depending on the state of the user login status.
return (
  <div className="LogInBox">
    <h1>LOG IN</h1>
    <br/>
    {loggedIn ? <p>logging In</p> : null}
    {/* If user is not logged in and has less than 5 login attempts: */}
    {!loggedIn && loginAttempts < 5 && (
      <form onSubmit={handleLogin}>
        {/* Input field for user email */}
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
        {/* Input field for user password */}
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
        {/* Button to submit login form */}
        <button className="btn-primary" type="submit">
          LogIn
        </button>
      </form>
    )}
    {/* Error message displayed when there is an error */}
    <p>{errMsg}</p>
    {/* Link to sign up page */}
    <a onClick={() => props.onPageSwitch("signup")}>
      Don't have an account? SignUp here
    </a>
  </div>
);
}
