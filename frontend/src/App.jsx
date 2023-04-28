import { useState } from "react";
import "./App.css";
import LogIn from "./components/LogIn";
import Signup from "./components/Signup";
import Rating from "./components/Rating";
import Notes from "./components/Notes";
import LogInPage from "./pages/logInPage";
import EntryPage from "./pages/EntryPage";
// import Chart from './components/Chart';
import LineChart from './components/LineChat';
import { UserProvider } from "./context/UserContext";
import LogOut from "./components/LogOut";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
function App() {
  
  return (
    <div className="App">
      {/* <NavBar/> */}
      {/* <EntryPage /> */}
      <AppRoutes/>
      {/* <LogInPage /> */}
      {/* <Rating/> */}
      {/* <Notes/>  */}
      {/* <Chart/> */}
      {/* <LineChart/> */}
      {/* <LogOut/> */}
      
    </div>
  );
}

export default App;
