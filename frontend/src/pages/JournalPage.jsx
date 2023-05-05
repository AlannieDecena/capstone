// Importing necessary modules
import React, { useContext, useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import DisplayNotes from "../components/DisplayNotes";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import AddNote from "../components/AddNote" 

// This the users notes/journal page where they can view their past notes, add and delete
export default function JournalPage(props) {

  // Initializing state for notes
  const [notes, setNotes] = useState([]);

  // Retrieving current user from context
  const {userCurrent} = useContext(UserContext)

  // Retrieving the notes for the current user on page load
  useEffect(() => {
    console.log(userCurrent.id)
    axios.get(`http://localhost:8001/note/user/${userCurrent.id}` )
    .then(response => {
      setNotes(response.data.data)
      console.log(notes)
    })
  },[]);

  // Rendering the page with necessary components
  return (
    <>
      <SideBar />

      <div id="notesPage">
        <h1>Journal</h1>
        <div id="formContainer">
          <div id="form" >
            <DisplayNotes notes={notes} updateNotes={setNotes}/>
          </div>
          <div className="addNoteBox">
            <AddNote notes={notes} updateNotes={setNotes}/>
          </div>
        </div>
      </div>
    </>
  );
}
