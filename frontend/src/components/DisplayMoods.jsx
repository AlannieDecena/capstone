import React from 'react'
import SideBar from './SideBar'
import LineChart from './LineChat'
import Rating from './Rating'
// This component is used to display the moods

export default function DisplayMoods() {
  return (
    <>
    <SideBar/>

    
    <div className='moodPageBox'>
          <div className="moodTitleBox">
      <h1>My Mood Swings</h1>
      </div>
     
      <div className="chartBox">
        <LineChart width="inherit" height="inherit"/>
        <br />
        <p>*It can be helpful when you can see your mental state</p>
      </div>
      
      
    </div>
    </>
  )
}
