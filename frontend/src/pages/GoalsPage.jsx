// Import React and necessary components
import React from "react";
import DisplayGoals from "../components/DisplayGoals";
import SideBar from "../components/SideBar";
import AddGoal from "../components/AddGoal";


// Define GoalsPage component
export default function GoalsPage({ goals, setGoals }) {

  // Render the following components with their respective props
  return (
    <>
      <SideBar />

      <div className="goalsPage">
        <div id="goalHeader">
          <h1>Goals</h1>
        </div>
        <div id="goalWrapper">
          <DisplayGoals goals={goals} setGoals={setGoals}/>
        </div> 
        <div className="goalInput">
          <AddGoal goals={goals} setGoals={setGoals}/>
        </div>
      </div> 
    </>
  );
}
