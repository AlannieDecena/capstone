import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { NavLink } from "react-router-dom";


export default function DisplayNotes(props) {
    const notes = props.notes
    console.log(notes)
  return (
    <>
    {notes.map((note, index) => 

    <div key={index} className="noteCard" style={{width: "18rem"}}>
      <div className="card-body">
        
        <h6 className="card-subtitle mb-2 text-body-secondary">{note.createdAt}</h6>
        <p className="card-text">
         {note.note}
        </p>
        <NavLink to="/displaynotes" className="card-link">
          Add New Note
        </NavLink>
      </div>
    </div>
    )}
    </>
  );
}
