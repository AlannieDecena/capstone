// Importing necessary modules
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import {useParams} from 'react-router-dom'
import { UserContext } from "../context/UserContext";

// Defining labels for the x-axis of the chart
const labels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];

// Defining the LineChart component
const LineChart = () => {

    // Using the UserContext to get the current user
    const {userCurrent} = useContext(UserContext);

    // Defining states for mood data and the user ID from the URL parameters
    const [moodData, setMoodData] = useState([]);
    const params = useParams();
    const id = params.id;

    // Fetching weekly mood data for the current user using an API call
    useEffect( () => {
    axios
    .get(`http://localhost:8001/mood/weeklymood/${userCurrent.id}`)
    .then((response) => {
      // Setting the mood data state to the response data
      setMoodData(response.data.data);
      console.log(response.data.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])

  // Defining the chart data using the mood data state and predefined labels
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

  // Rendering the LineChart component with the defined data
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

// Exporting the LineChart component for use in other files
export default LineChart;
