import React, { useState, useContext } from "react"; //importing React and useState hook from react, and useContext hook from react
import axios from "axios"; //importing axios library for making HTTP requests
import { UserContext } from "../context/UserContext"; //importing UserContext from UserContext.js file

export default function AddGoal({goals, setGoals}) { //defining a functional component AddGoal with props goals and setGoals
  const { userCurrent, handleUser } = useContext(UserContext); //getting the current user and handleUser function from UserContext using useContext hook
  const [goal, setGoal] = useState(""); //defining goal state and setGoal function using useState hook, with initial value as empty string

  //defining a function to handle goal submission
  const handleGoalSubmit = () => {
    console.log(goal); //printing the goal to console
    const goalData = {
        checked : false, //adding checked property with value false to goalData object
      goal: goal, //adding goal property with value of goal state to goalData object
      userId: userCurrent.id, //adding userId property with value of current user's id to goalData object
    };
    console.log(goalData); //printing goalData to console
    axios
      .post(`http://localhost:8001/goal/create`, goalData) //making a post request to http://localhost:8001/goal/create endpoint with goalData as payload
      .then((response) => {
        console.log(response.data.data); //printing the response to console
        setGoals([...goals, response.data.data]); //updating goals array state with new goal obtained from response

      })
      .catch((error) => {
        console.log(error); //printing the error to console in case of any error
      });
  };

  //rendering a form for adding new goal
  return (
    <div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" onChange={(e) => setGoal(e.target.value)} /> 
        <button className="addBtn" type="button" id="button-addon2" onClick={handleGoalSubmit}> 
          Add
        </button>
      </div>
    </div>
  );
}
