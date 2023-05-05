import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

// This component is used to get notes from database and display the notes
export default function DisplayNotes(props) {

  // This function is called when a user clicks the delete button. It sends a request to the server to delete the note with the given noteId from the database. If the request is successful, it updates the notes state to remove the deleted note from the list.
  const handleDelete = (e, noteId) => {
    e.preventDefault();

    axios
      .delete(`http://localhost:8001/note/delete/${noteId}`)
      .then((response) => {
        const newList = props.notes.filter((note) => note.id !== noteId);

        console.log(response);
        props.updateNotes(newList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // This function is called when a user clicks the checkbox next to a note. It sends a request to the server to update the status of the note with the given id. If the request is successful, it updates the notes state to reflect the change.
  const handleDate = (id) => {
    const now = new Date();
    const newnotestate = !notes.find((note) => note.id === id).checked;
    const updateUser = {
      checked: newnotestate,
      completed: now,
    };
    console.log(updateUser);
    const axUsers = `http://localhost:8001/note/put/${id}`;
    axios
      .put(axUsers, updateUser)
      .then((response) => {
        console.log("updated note");
        setnotes((prevnotes) => prevnotes.map((note) => note.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        {/* 
        Checks if there are any notes to display. If there are no notes (like an empty toy box), it doesn't try to display the notes.
        */}
        {props.notes &&
          props.notes.map((note, index) => (
            <div key={index}>
              <div id="noteCard">
                {/* 
                Displays the date the note was created.
                */}
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {new Date(note.createdAt).toLocaleString()}
                </h6>
                <p className="card-text">
                  {/* 
                  Displays the note content.
                  */}
                  {note.note}

                  {/* 
                  Creates a delete button for the note. When clicked, it calls the handleDelete function.
                  */}
                  <a onClick={(e) => handleDelete(e, note.id)}>delete</a>
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
