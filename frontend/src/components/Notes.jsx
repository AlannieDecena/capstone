import axios from "axios";
import React, { useState, useContext } from "react";
import { UserContext } from '../context/UserContext';

export default function Notes() {

const [note, setNote] = useState('');
const {userEmail} = useContext(UserContext);


const handleNoteSubmit = () => {
  console.log(note)
  const noteData = {'note': note, 'userId': userEmail}   
    axios.post('http://localhost:8001/note/create', noteData)
    .then(response => {
    }).catch(error => {console.log(error)})
}

  return (
    <div>
        <h3>Do have any thoughts you would like to write down?</h3>
        <div className="form-floating">
        <textarea onChange={e => setNote(e.target.value)} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
        <label htmlFor="floatingTextarea2"></label>
    </div>
    <button onClick={handleNoteSubmit}>submit</button>
    </div>
  )
}
