import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LogIn from './components/LogIn'
import Signup from './components/Signup';
import Rating from './components/Rating';
import Notes from './components/Notes';
import Chart from './components/Chart';
import LineChart from './components/LineChat';




function App() {
 
const [currentPage, setCurrnetPage] = useState('login');
const togglePage = (page) => {
  setCurrnetPage(page);
};
  return (
    <div className="App">

     {currentPage === 'login' ? <LogIn onPageSwitch={togglePage} /> : <Signup onPageSwitch={togglePage}/>}

     <Rating/>
     <Notes/>
     {/* <Chart/> */}
     <LineChart/>


    </div>
  )
}

export default App
