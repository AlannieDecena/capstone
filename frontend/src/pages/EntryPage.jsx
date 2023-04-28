import React from "react";
import NavBar from "../components/NavBar";
import LogIn from "../components/LogIn";
import Signup from "../components/Signup";

export default function EntryPage() {
  return (
    <div className="entryPage">
      <NavBar />

      <section>
        <h1>Feeling Lanevder</h1>
        <p>
          Feeling Lavender is a personalized mood tracking app designed to help
          you manage your mental health and well-being with a comprehensive set
          of features, including mood tracking and goal setting. Take the first
          step towards achieving your mental wellness goals today with Feeling
          Lavender.
        </p>
        <a href="/login"> Start your Journey</a>
      </section>

    </div>
  );
}
