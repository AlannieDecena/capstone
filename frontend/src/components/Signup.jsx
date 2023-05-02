import React, { useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import useFormInput from "../hooks/useFormInput";
import axios from "axios";
// This component is for creating a new user and storing it in the database

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
      <h1>NEW ACCOUNT</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
         
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
        <button type="submit" onClick={handleSubmit} className="btn-primary">
          Sign Up
        </button>
      </form>
      <a onClick={() => props.onPageSwitch("login")}>
        Already have an account? LogIn here
      </a>
    </div>
  );
}
