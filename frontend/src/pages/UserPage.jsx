import SideBar from "../components/SideBar";
import LineChart from "../components/LineChat";
import { UserContext} from "../context/UserContext";
import { useEffect, useState, useContext } from "react";
import Goals from "../components/DisplayGoals";
import DisplayNotes from "../components/DisplayNotes";
// This is the users dashboard page 


export default function UserPage() {
  const {userCurrent} = useContext(UserContext);


  return (
    <> 
    <SideBar />
    <div id="UserPage">
     
  
      <div id="contentUserBox">
        <div id="userNameBox">
        <h1>Hey {userCurrent.name}!</h1>
        </div>

        <div id="contentWrapper" >
          <div  id="noteBox" >
          <DisplayNotes/>
          </div>
          {/* <div id="goalBox" >
          <div >
          <Goals/></div>
          </div>
          
          <div  id="dashChartBox" >
            <LineChart/>
          </div> */}
         
        </div>
      </div>
    </div></>
  );
}
