import React from 'react'
import SideBar from './SideBar'
import LineChart from './LineChat'

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
      </div>
      <br />
      <p>*It can be helpful when you can see your mental state</p>
    </div>
    </>
  )
}
