import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import {useParams} from 'react-router-dom'

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [1, 2, 3, 4, 5],
    //   data: moodData
    },
  ],
};

const LineChart = () => {
    const [moodData, setMoodData] = useState([]);
    const [mood, setMood] = useState()
    const params = useParams();
    const id = params.id;
    axios
    // .get(`http://localhost:8001/mood/${id}`)
    .get(`http://localhost:8001/mood`)
    .then((response) => {
      setMoodData(response.data);
      // const blah = response.data;
      // blah.filter((moods) => moods.id.includes(1))
      // moodFinder();

    })
    .catch((error) => {
      console.log(error);
    });
const moodFinder = (value) => {
return value === 1;
const moodId = moodData.data;
  // const filtered = moodId.filter(moodFinder)
  console.log(moodId)
} 

  return (
    <div>
      <Line data={data} />
      <button onClick={moodFinder}>mood</button>
    </div>
  );
};

export default LineChart;