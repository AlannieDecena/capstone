//importing the necessary modules
import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

// This component is for adding notes to the journal page and store it in the database
//It is a React function component that takes in a props object and returns a JSX element

export default function AddNote(props) {
  //using the useContext hook to access the UserContext state and setState functions
  const { userCurrent, handleUser } = useContext(UserContext);

  //using useState hook to create a note state variable and setNote function to update it
  const [note, setNote] = useState("");

  //using the useNavigate hook to create a navigation object
  const nav = useNavigate();

  //function to submit the note to the database on form submission
  const handleNoteSubmit = () => {
    //creating a noteData object with the note and the user's id
    const noteData = { note: note, userId: userCurrent.id };
    //using axios to make a post request to the server to store the note data
    axios
      .post("http://localhost:8001/note/create", noteData)
      .then((response) => {
        //updating the notes state with the newly added note
        props.updateNotes([...props.notes, response.data.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //returning the JSX element
  return (

      <div>
        <div className="form-floating">
          <textarea
            onChange={(e) => setNote(e.target.value)}
            id="formtextarea"
            placeholder="Feel free to write anything"

            style={{ height: "100px" }}
          ></textarea>
          <label htmlFor="floatingTextarea2"></label>
        </div>

        <button className="btn-primary saveNote" onClick={handleNoteSubmit}>
          save
        </button>
      </div>

  );
}
