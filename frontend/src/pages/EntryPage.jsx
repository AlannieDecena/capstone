import React from "react";
import LogInPage from "./logInPage";
import capLogo from "../images/capLogo.png"

export default function EntryPage() {
  return (
    <>
    <div className="glassBox">
    <div className="entryPage">
          <img className="caplogo" src={capLogo} alt="caplogo" ></img>
        
        <p>
          Feeling Lavender is a personalized mood tracking app designed to help
          you manage your mental health and well-being with a comprehensive set
          of features, including mood tracking and goal setting. Take the first
          step towards achieving your mental wellness goals today with Feeling
          Lavender.
        </p>
        <a >Wanna learn more?</a>
    </div>
    <LogInPage/>
    </div>
    </>
  );
}
