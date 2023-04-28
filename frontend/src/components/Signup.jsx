import React, { useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import useFormInput from "../hooks/useFormInput";
import axios from "axios";

export default function Signup(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    console.log(`Fetching users`);
    axios
      .get("http://localhost:8001/user/")
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [newUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: name,
      email: email,
      password: password,
      gender: null,
      age: null,
    };
    axios
      .post("http://localhost:8001/user/create", newUser)
      .then((response) => {
        console.log(response);
        setNewUser(response.data).catch((error) => {
          console.log(error);
        });
      });
  };

  return (
    <div className="LogInBox">
       <form onSubmit={handleSubmit}>
       <div className="row mb-3">
            {/* <label htmlFor="name" className="col-sm-2 col-form-label">
              Full Name
            </label> */}
            <div className="col-sm-10">
              <input
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
                id="name"
                placeholder="name"
              />
            </div>
          </div>
          <div className="row mb-3">
            {/* <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label> */}
            <div className="col-sm-10">
              <input
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                placeholder="email"
              />
            </div>
          </div>
          <div className="row mb-3">
            {/* <label htmlFor="password" className="col-sm-2 col-form-label">
              Password
            </label> */}
            <div className="col-sm-10">
              <input
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                placeholder="password"
              />
            </div>
          </div>
          <button type="submit" onClick={handleSubmit} className="btn btn-primary">
            Sign Up
          </button>
        </form>
      <a onClick={() => props.onPageSwitch("login")} className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#" >
        Already have an account? LogIn here
      </a>
    </div>
  );
}
