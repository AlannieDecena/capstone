import axios from "axios";
import React, { useState } from "react";

export default function Notes() {

const [note, setNote] = useState('')
 
const handleNote = (e) => {
    setNote(e.target.value)
}

const handleNoteSubmit = () => {
    axios.post('http://localhost:8001/note/create', note)
    .then(response => {
        console.log(response); 
        setNote('');
    }).catch(error => {console.log(error)})
}
  return (
    <div>
        <h3>Do have any thoughts you would like to write down?</h3>
        <div className="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}} onChange={handleNote}></textarea>
        <label htmlFor="floatingTextarea2"></label>
    </div>
    <button onClick={handleNoteSubmit}>submit</button>
    </div>
  )
}
