import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

// This component is for adding notes to the journal page and store it in the database

export default function AddNote(props) {
  const { userCurrent, handleUser } = useContext(UserContext);
  const [note, setNote] = useState("");
  const nav = useNavigate();

  console.log(userCurrent);
  const handleNoteSubmit = () => {
    console.log(note);
    const noteData = { note: note, userId: userCurrent.id };
    axios
      .post("http://localhost:8001/note/create", noteData)
      .then((response) => {
        props.updateNotes([...props.notes, response.data.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
  
      <div>
        <div className="form-floating">
          <textarea
            onChange={(e) => setNote(e.target.value)}
            className="form"
            placeholder="Feel free to write anything"
            id="floatingTextarea2"
            style={{ height: "100px" }}
          ></textarea>
          <label htmlFor="floatingTextarea2"></label>
        </div>

        <button className="btn-primary" onClick={handleNoteSubmit}>
          save
        </button>
      </div>

  );
}
