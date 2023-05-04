import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

// This component is for adding displaying the Goals list

export default function DisplayGoals({ goals, setGoals }) {
  const { userCurrent, handleUser } = useContext(UserContext);

  useEffect(() => {
    console.log(userCurrent.id);
    axios
      .get(`http://localhost:8001/goal/user/${userCurrent.id}`)
      .then((response) => {
        setGoals(response.data.data);
      });
  }, []);

  const handleDate = (id) => {

    const now = new Date();
    const newGoalState = !goals.find((goal) => goal.id === id).checked;
    const updateUser = {
      checked: newGoalState,
      completed: now,
    };
    console.log(updateUser);
    const axUsers = `http://localhost:8001/goal/put/${id}`;
    axios
      .put(axUsers, updateUser)
      .then((response) => {
        console.log("updated goal");
        setGoals((prevGoals) =>
          prevGoals.map((goal) =>
            goal.id !== id
              ? goal
              : { ...goal, completed: now, checked: newGoalState }
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDelete = (e, id) => {
    e.preventDefault();

    axios
      .delete(`http://localhost:8001/goal/delete/${id}`)
      .then((response) => {
        const updatedGoals =goals.filter((goal) => goal.id !== id);

        console.log(response);
     setGoals(updatedGoals);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Goal</th>
            <th scope="col">Date Started</th>
            <th scope="col">Date Completed</th>
          </tr>
        </thead>
        <tbody>
          {goals.map((goal, index) => (
            <tr key={index}>
              <th scope="row">
                <input
                  type="checkbox"
                  value={""}
                  id="flexCheckChecked"
                  checked={goal.checked}
                  onChange={() => handleDate(goal.id)}
                />
                {index + 1}
              </th>
              <td htmlFor="flexCheckChecked">{goal.goal}</td>
              <td>{new Date(goal.createdAt).toLocaleString()}</td>

              <td>
                {goal.completed
                  ? new Date(goal.completed).toLocaleString()
                  : ""}
                <a id="deleteBtn" onClick={(e) => handleDelete(e, goal.id)}>
                  delete
                </a>
              </td>
            </tr>
          ))}
          {/*  */}
        </tbody>
      </table>
    </div>
  );
}
