import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
// This component is used to get notes from database and display the notes


export default function DisplayNotes(props) {
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

  return (
    <>
      <div id="cardWrapper" className="overflow-auto">
        {/* checks if there are any notes to display. If there are no notes (like an empty toy box), it doesn't try to display the notes */}
        {props.notes &&
          props.notes.map((note, index) => (
            <div key={index}>
              <div id="noteCard">
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {note.createdAt}
                </h6>
                <p className="card-text">
                  {note.note}

                  <a onClick={(e) => handleDelete(e, note.id)}>delete</a>
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
