import SideBar from "../components/SideBar"; // Importing the SideBar component
import LineChart from "../components/LineChat"; // Importing the LineChart component
import { UserContext } from "../context/UserContext"; // Importing the UserContext
import { useEffect, useState, useContext } from "react"; // Importing useEffect, useState, and useContext from React
import Goals from "../components/DisplayGoals"; // Importing the Goals component
import DisplayNotes from "../components/DisplayNotes"; // Importing the DisplayNotes component
import NotesPage from "./NotesPage"; // Importing the NotesPage component
// This is the users dashboard page

export default function UserPage({ goals, setGoals }) { // Exporting the UserPage component with goals and setGoals as props
  const { userCurrent } = useContext(UserContext); // Getting the userCurrent value from the UserContext

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
