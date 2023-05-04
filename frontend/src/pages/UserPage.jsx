import SideBar from "../components/SideBar";
import LineChart from "../components/LineChat";
import { UserContext } from "../context/UserContext";
import { useEffect, useState, useContext } from "react";
import Goals from "../components/DisplayGoals";
import DisplayNotes from "../components/DisplayNotes";
import NotesPage from "./NotesPage";
// This is the users dashboard page

export default function UserPage({ goals, setGoals }) {
  const { userCurrent } = useContext(UserContext);

  return (
    <>
      <SideBar />
      <div id="UserPage">
        <div id="userNameBox">
          <h1>Hey {userCurrent.name}!</h1>
   
        </div>
       
        <div id="contentWrapper">
         
          <div  id="goalBox" >
            <Goals goals={goals} setGoals={setGoals}/>
          </div>
           <div id="dashChartBox">
            <LineChart />
          </div> 
           
         
         <div id="noteBox" >
            <NotesPage />
          </div>
        </div>
      </div>
    </>
  );
}
