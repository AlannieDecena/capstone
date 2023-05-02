import React from "react";
import NavBar from "../components/NavBar";
// this the about page

export default function AboutPage() {
  return (
    <div className="aboutPage">
        
      <NavBar />
      <div className="nameMeaning">
        <h1>What dose "Feeling Lavender" mean?</h1>
        <p>
          Have you ever heard of the expression "feeling blue"? This expression
          is oftent used to describe any unhappy feeling you may have. "Feeling
          Lavender" is a expression too. "Lavender" has many meanings such as
          silence, calmness and spiritual healing just to
          name a few. And lavender as a plant has many emotional benefits too,
          it has a powerful calming and relaxing properties which can help ease
          away all your stress, tension and worry. A study also found that
          people exposed to the scent of lavender experienced stress relief plus
          an energy boost. And just like the plant, "feeling lavender" is to
          express calmness and healing, a balance in your mental well-being.
        </p>
       
      </div>
      <div className="aboutUs">
        <h1>Who are we?</h1>
        <p>
          As a brand, we believe that mental health is just as important as
          physical health, and our goal is to provide you with a tool that can
          help you improve your overall quality of life. Our app allows you to
          track your moods and emotions, set goals, and monitor your progress
          towards better mental health and well-being. Our mission is to provide
          you with a personalized approach and comprehensive set of features
          that go beyond a simple mood tracker.
          <br />
          And we are committed to constantly evolving and adapting to
          meet your changing needs and preferences. Our goal is to provide the
          best possible user experience and help you improve your mental health
          and well-being.
        </p>
      </div>
    </div>
  );
}
