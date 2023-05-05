// Importing React and two custom components: Rating and SideBar
import React from 'react'
import Rating from '../components/Rating'
import SideBar from '../components/SideBar'

// This component is responsible for displaying the mood page where users can change/update their mood rating for that day.
export default function MoodPage() {
  // The MoodPage component returns a fragment containing the SideBar and the Rating component within a div with id 'moodPage' and class 'overflow-hidden'
  return (
    <>
    <SideBar/>
    <div id='moodPage' className="overflow-hidden">
        <Rating/>
    </div>
    </>
  )
}
