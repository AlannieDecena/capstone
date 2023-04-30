import axios from "axios";
import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Notes() {
  const { userCurrent } = useContext(UserContext);
  const [note, setNote] = useState("");
  const nav = useNavigate();

  const handleNoteSubmit = () => {
    console.log(note);
    const noteData = { note: note, userId: userCurrent.id };
    axios
      .post("http://localhost:8001/note/create", noteData)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const handleBackBtn = () => {
    nav("/rating");
  };

  const handleDoneBtn = () => {
    nav("/user");
  };
  return (
    <div className="notesBox">
      <h3>Sometimes it's good to write our thoughts down</h3>
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
      <button className="btn-primary"  onClick={handleBackBtn}>back</button>
      <button className="btn-primary" onClick={handleNoteSubmit}>save</button>
      <button className="btn-primary" onClick={handleDoneBtn}>done</button>
      
    </div>
  );
}
