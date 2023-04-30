import { Routes, Route } from "react-router-dom";
import React from "react";
import App from "../App";
import LogInPage from "../pages/logInPage";
import PageNotFound from "../pages/PageNotFound";
import LineChart from "../components/LineChat";
import Rating from "../components/Rating";
import EntryPage from "../pages/EntryPage";
import Signup from "../components/Signup";
import UserPage from "../pages/UserPage";
import NotesPage from "../pages/NotesPage";
import DisplayMoods from "../components/DisplayMoods";
import Notes from "../components/Notes";
import GoalsPage from "../pages/GoalsPage";
import AboutPage from "../pages/AboutPage";

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<EntryPage {...props} />} />
      <Route path="/login" element={<LogInPage {...props} />} />
      <Route path="/signup" element={<Signup {...props} />} />
      <Route path="/user" element={<UserPage {...props} />} />
      <Route path="/rating" element={<Rating {...props} />} />
      <Route path="/displaymoods" element={<DisplayMoods {...props} />} />
      <Route path="/displaynotes" element={<NotesPage {...props} />} />
      <Route path="/notes" element={<Notes {...props} />} />
      <Route path="/goals" element={<GoalsPage {...props} />} />
      <Route path="/about" element={<AboutPage {...props} />} />
      

      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
}

export default AppRoutes;
