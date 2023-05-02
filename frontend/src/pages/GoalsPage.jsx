import React from "react";
import DisplayGoals from "../components/DisplayGoals";
import SideBar from "../components/SideBar";
import AddGoal from "../components/AddGoal";
// This is users goals page

export default function GoalsPage() {
  return (
    <>
      <SideBar />

      <div className="goalsPage">
        <div id="goalHeader">
          <h1>Goals</h1>
        </div>
        <div id="goalWrapper">
          <DisplayGoals />
          <AddGoal/>
        </div>
      </div>
    </>
  );
}
