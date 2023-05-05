import React from "react"; // Import React library
import LogInPage from "./logInPage"; // Import LogInPage component from local file
import capLogo from "../images/capLogo.png" // Import image resource
import { NavLink } from "react-router-dom"; // Import NavLink component from react-router-dom library

// This component is the entry page of the app
export default function EntryPage() {
  return (
    <>
    <div className="glassBox"> {/* Glass box container */}
    <div className="entryPage"> {/* Entry page container */}
          <img className="caplogo" src={capLogo} alt="caplogo" ></img> {/* Cap logo image */}

        <p>
          Feeling Lavender is a personalized mood tracking app designed to help
          you manage your mental health and well-being with a comprehensive set
          of features, including mood tracking and goal setting. Take the first
          step towards achieving your mental wellness goals today with Feeling
          Lavender. {/* App description */}
        </p>
        <NavLink to="/about" >Learn more</NavLink> {/* NavLink component with a link to the About page */}
    </div>
    <LogInPage/> {/* LogInPage component */}
    </div>
    </>
  );
}
