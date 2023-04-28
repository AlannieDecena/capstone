import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import {useParams} from 'react-router-dom'
import { UserContext } from "../context/UserContext";


const labels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];


const LineChart = () => {
    
    const {userCurrent} = useContext(UserContext);


    const [moodData, setMoodData] = useState([]);
    const params = useParams();
    const id = params.id;
    console.log(userCurrent)
    // const userCurrent = userCurrent.id

    useEffect( () => {
    axios
    // .get(`http://localhost:8001/mood/${id}`)
    .get(`http://localhost:8001/mood/weeklymood/${userCurrent.id}`)
    .then((response) => {
      setMoodData(response.data.data);
      console.log(response.data.data)

    })
    .catch((error) => {
      console.log(error);
    });
  }, [])

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Current Week",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
   
        data: moodData
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
     
    </div>
  );
};

export default LineChart;