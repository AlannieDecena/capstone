import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import DisplayNotes from "./DisplayNotes";
import NotesPage from "../pages/NotesPage";

export default function NotesList() {
  const { userCurrent } = useContext(UserContext);

  const [noteData, setnoteData] = useState([]);
  const params = useParams();
  const id = params.id;
  console.log(userCurrent);

  useEffect(() => {
    // console.log('test')
    axios
      
      .get(`http://localhost:8001/note/`)
      .then((response) => {
        setnoteData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
   <div>
<NotesPage notes={noteData}/>
   </div>
  );
}
