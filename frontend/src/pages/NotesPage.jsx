import React from "react";
import SideBar from "../components/SideBar";
import Notes from "../components/Notes";
import Note from "../components/Note";
import { NavLink } from "react-router-dom";
import NotesList from "../components/NoteList";

export default function NotesPage(props) {
  const notes = props.notes || []

  return (
    <>
      <SideBar />
      <div>
      {notes.map((note, index) => 
        
          <div key={index} className="card">
            <div className="card-header">{note.createdAt}</div>
            <div className="card-body">
              <p className="card-text"> {note.note}</p>
              
            </div>
          </div>
      )}
      <NotesList/>
      <Notes/>
      </div>
    </>
  );
}
