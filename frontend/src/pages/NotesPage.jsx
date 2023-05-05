import React, { useContext, useEffect, useState } from "react"; // import React and related hooks
import SideBar from "../components/SideBar"; //import Sidebar component
import DisplayNotes from "../components/DisplayNotes"; //import DisplayNotes component
import axios from "axios"; //import axios for API calls
import { UserContext } from "../context/UserContext"; //import UserContext for user authentication
import AddNote from "../components/AddNote" //import AddNote component for adding new notes

// This the users notes/journal page where they can view their past notes, add and delete
export default function NotesPage(props) {
  const [notes, setNotes] = useState([]); //initialize notes state
  const {userCurrent} = useContext(UserContext) //get user information from UserContext
  useEffect(() => { //useEffect to fetch notes from API when component mounts
    console.log(userCurrent.id) //log user id to console
    axios.get(`http://localhost:8001/note/user/${userCurrent.id}` ) //GET request to API endpoint for user notes
    .then(response => {
      setNotes(response.data.data) //update notes state with response data
      console.log(notes) //log notes to console
    })

  },[]); //empty dependency array to ensure useEffect only runs once

  return (
    <>
        <div id="formContainer">
    <div>
      <DisplayNotes notes={notes} updateNotes={setNotes}/> {/* Render DisplayNotes component with notes and updateNotes props */}

      </div>

      </div>
    </>
  );
}
