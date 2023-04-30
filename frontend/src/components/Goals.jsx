import axios from "axios";
import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Goals() {
  const { userCurrent } = useContext(UserContext);
  const [goal, setGoal] = useState("");
  const [goalList, setGoalList] = useState([])
  const nav = useNavigate();

  const handleGoalSubmit = () => {
    console.log(goal);

    const goalData = { goal: goal, dateStart: dateStart , dateEnd: dateEnd , userId: userCurrent.id };
    axios
      .post("http://localhost:8001/goal/create", goalData)
      .then((response) => {
        setGoalList([response.data])
        setGoal("")
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
      console.log(goalData)
  }; 

  return (
    <>
      <div>
      
      </div>
    </>
  );
}
