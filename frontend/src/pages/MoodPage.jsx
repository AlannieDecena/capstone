import React from 'react'
import Rating from '../components/Rating'
import SideBar from '../components/SideBar'
// Users mood page where they change / update their mood rating for that day.

export default function MoodPage() {
  return (
    <>
    <SideBar/>
    <div id='moodPage' class="overflow-hidden">
        
        <Rating/>
    </div>
    </>
  )
}
