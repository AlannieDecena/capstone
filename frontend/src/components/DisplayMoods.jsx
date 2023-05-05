// Import the React library and three components: SideBar, LineChart, and Rating
import React from "react";
import LineChart from "./LineChat";


// This component is used to display the moods
export default function DisplayMoods() {
  // Return a div with the LineChart component
  return (
    <div>
      <LineChart/>
    </div>
  );
}
