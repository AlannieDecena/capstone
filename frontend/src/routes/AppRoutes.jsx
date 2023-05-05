import { Routes, Route } from "react-router-dom";
import React from "react";
import App from "../App";
import LogInPage from "../pages/logInPage";
import Rating from "../components/Rating";
import EntryPage from "../pages/EntryPage";
import Signup from "../components/Signup";
import UserPage from "../pages/UserPage";
import NotesPage from "../pages/NotesPage";
import DisplayMoods from "../components/DisplayMoods";
import GoalsPage from "../pages/GoalsPage";
import AboutPage from "../pages/AboutPage";

import MoodPage from "../pages/MoodPage";
import EntryMoodsPage from "../pages/EntryMoodsPage";
import LogOut from "../components/LogOut";
import JournalPage from "../pages/JournalPage";
import { useState } from "react";

function AppRoutes(props) {
  const [goals, setGoals] = useState([]);
  return (
    <Routes>
      <Route path="/" element={<EntryPage {...props} />} />   
      
      <Route path="/login" element={<LogInPage {...props} />} />
      <Route path="/logout" element={<LogOut {...props} />} />
      <Route path="/signup" element={<Signup {...props} />} />
 <Route path="/entryMoods" element={<EntryMoodsPage {...props} />} />

      <Route path="/user" element={<UserPage {...props}  goals={goals} setGoals={setGoals} />} />
  
      <Route path="/changemood" element={<MoodPage {...props} />} />
      <Route path="/displaymoods" element={<DisplayMoods {...props} />} />

      <Route path="/notes" element={<JournalPage {...props} />} />
      <Route path="/goals" element={<GoalsPage {...props}  goals={goals} setGoals={setGoals}/>} />
      <Route path="/about" element={<AboutPage {...props} />} />
  
      

    </Routes>
  );
}

export default AppRoutes;
