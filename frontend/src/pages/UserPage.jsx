import SideBar from "../components/SideBar";
import LineChart from "../components/LineChat";
import { UserContext} from "../context/UserContext";
import {useParams} from 'react-router-dom'
import { useEffect, useState, useContext } from "react";
import useFormInput from "../hooks/useFormInput";
import Note from "../components/Note";
import Goals from "../components/Goals";


export default function UserPage() {
  const {userCurrent} = useContext(UserContext);


  return (
    <div id="UserPage">
      <SideBar />
  
      <div id="contentUserBox">
        <div id="userNameBox">
        <h1>Hey {userCurrent.name}!</h1>
        </div>

        <div id="ContentWrapper" class="row">
          <div  id="noteBox" class="col-sm-8">
          {/* <Note/> */}
          </div>
          <div id="goalBox" class="col-sm-4">
          <Goals/>
          </div>
          
          <div  id="dashChartBox"class="col-sm-8" >
            <h5>Mood Overview</h5>
            <LineChart/>
          </div>
          {/* <div class="col-6 col-md-4"></div> */}
        </div>
      </div>
    </div>
  );
}
