
import Chart from "chart.js/auto";
import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import {useParams} from 'react-router-dom'
import { UserContext } from "../context/UserContext";
import CasesBar from '@/components/Visuals/CasesBar'
import CasesLine from '@/components/Visuals/CasesLine'
import CaseBread from '@/components/HomePage/Breads/CaseBread'

export default function MoodChart() {
  const { userEmail } = useContext(UserContext);
  const [moodData, setMoodData] = useState()
  const params = useParams()
    const id = params.id
  const handleMoodaData = () => {
    data = ()=> {
        return {
            labels : [],
            confirmed : [],
        }

    },
     components = {
        CasesLine,
        CasesBar,
        CaseBread
    },
    axios
      .get(`http://localhost:8001/mood/${id}`)
      .then((response) => {
        setMoodData(response);
      })
      .catch((error) => {
        console.log(error);
      });

      const data = {
      datasets: [
        {
          label: "Mood Ratings",
          data: moodData.map((rating) => rating.mood),
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
      };

      const config = {
        type: "line",
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      };
const chart = new Chart(document.getElementById("moodChart"), config);
  }


  return (
    <div>
      <canvas id="moodChart">chart</canvas>
    </div>
  );
}
