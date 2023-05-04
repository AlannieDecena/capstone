import React from "react";
import DisplayGoals from "../components/DisplayGoals";
import SideBar from "../components/SideBar";
import AddGoal from "../components/AddGoal";
import { useState } from "react";
// This is users goals page

export default function GoalsPage({ goals, setGoals }) {
    
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
        <AddGoal goals={goals} setGoals={setGoals}/></div>
      </div> 
    </>
  );
}
