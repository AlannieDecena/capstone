import React, { useContext, useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import DisplayNotes from "../components/DisplayNotes";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import AddNote from "../components/AddNote" 
// This the users notes/journal page where they can view their past notes, add and delete

export default function NotesPage(props) {
const [notes, setNotes] = useState([]);
const {userCurrent} = useContext(UserContext)
useEffect(() => {
console.log(userCurrent.id)
  axios.get(`http://localhost:8001/note/user/${userCurrent.id}` )
  .then(response => {
    setNotes(response.data.data)
    console.log(notes)
  })

},[]);


  return (
    <>
      <SideBar />
      
      <div id="notesPage">
    
      <DisplayNotes notes={notes} updateNotes={setNotes}/>
      <AddNote notes={notes} updateNotes={setNotes}/>
      </div>
   
    </>
  );
}
