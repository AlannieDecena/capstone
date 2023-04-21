import React, {useReducer, useContext} from 'react'
import { UserContext } from '../context/UserContext'
import axios from 'axios'


export default function useNotes() {
    const {userEmail} = useContext(UserContext)

    const handleNotes = (note) => {
        console.log(userEmail)
           const noteData = {'note': note, 'userId': userEmail}   
            axios.post('http://localhost:8001/note/create', noteData ) 
            .then(response => {
                console.log(response); })
                .catch(error => { console.log(error) })};
  return (
    <div>useNotes</div>
  )
}
