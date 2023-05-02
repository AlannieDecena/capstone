import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

export default function AddGoal(props) {
  const { userCurrent, handleUser } = useContext(UserContext);
  const [goal, setGoal] = useState("");
//   const [dateStart, setDateStart] = useState("");
//   const [dateEnd, setDateEnd] = useState("");
  const [updateGoals, setUpdateGoals] = useState([]);

  const handleGoalSubmit = () => {
    console.log(goal);
    const goalData = {
      goal: goal,
      userId: userCurrent.id,
      dateStart: '2023-05-02 04:17:17',
      dateEnd: '2023-05-02 04:17:17',
    };
    console.log(goalData);
    axios
      .post(`http://localhost:8001/goal/create`, goalData)
      .then((response) => {
        console.log(response.data.data);
        // props.setUpdateGoals([...props.goals, response.data.data]);
        // console.log(updateGoals);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bottom">
      <div id="addGoalBox" className="input-group mb-3">
        <input type="text" className="form-control" onChange={(e) => setGoal(e.target.value)} />
        <button className="addBtn" type="button" id="button-addon2" onClick={handleGoalSubmit}>
          Add
        </button>
      </div>
    </div>
  );
}
