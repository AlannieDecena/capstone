import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

export default function AddGoal({goals, setGoals}) {
  const { userCurrent, handleUser } = useContext(UserContext);
  const [goal, setGoal] = useState("");
 

  const handleGoalSubmit = () => {
    console.log(goal);
    const goalData = {
        checked : false,
      goal: goal,
      userId: userCurrent.id,
    };
    console.log(goalData);
    axios
      .post(`http://localhost:8001/goal/create`, goalData)
      .then((response) => {
        console.log(response.data.data);
        setGoals([...goals, response.data.data]);

      })
      .catch((error) => {
        console.log(error);
      });
  };

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
