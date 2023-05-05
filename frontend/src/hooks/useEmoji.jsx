// Import React, useReducer and useContext hooks from react library
import React, {useReducer, useContext} from 'react'

// Import UserContext from '../context/UserContext'
import { UserContext } from '../context/UserContext'

// Import axios library for making HTTP requests
import axios from 'axios'

// This custom hook sets the rating values for the mood emojis then returns them to the parent component 
export default function useEmoji() {

    // Get the current user from UserContext
    const userCurrent = useContext(UserContext)

    // Set the initial state of the emojis to '...'
    const initialState='...'

    // Define different mood emojis as React components
    const angry =(<div className='emoji' alt="angry">Angry</div>)
    const happy =(<div className='emoji' alt="happy">Happy</div>)
    const sad=(<div className='emoji' alt="sad" >Sad</div>)
    const mehh =(<div className='emoji' alt="mehh" >Mehh</div>)
    const chill =(<div className='emoji'  alt="chill">Chill</div>)
    const ecstatic =(<div className='emoji'  alt="ecstatic">Ecstatic</div>)

    // This function is called whenever an emoji is clicked and sends a POST request to the server with the mood data
    const handleRating = (emoji) => {
        console.log(userCurrent.userCurrent.id)
        const moodData = {'mood': emoji, 'userId': userCurrent.userCurrent.id}  
        console.log(moodData) 
        axios.post('http://localhost:8001/mood/update', moodData ) 
            .then(response => {
                console.log(response.data); })
            .catch(error => { console.log(error) })};

    // Define a reducer function that takes in the current state and an action and returns the new state
    const reducer=(state,action) => {
        switch (action) {
            // If the action is 1, handle the rating for the 'Angry' emoji and return the 'Angry' emoji
            case 1: console.log(userCurrent)
                handleRating(1)
                return angry
            // If the action is 2, handle the rating for the 'Sad' emoji and return the 'Sad' emoji
            case 2: 
                handleRating(2)
                return sad
            // If the action is 3, handle the rating for the 'Mehh' emoji and return the 'Mehh' emoji
            case 3: 
                handleRating(3)
                return mehh
            // If the action is 4, handle the rating for the 'Chill' emoji and return the 'Chill' emoji
            case 4: 
                handleRating(4)
                return chill
            // If the action is 5, handle the rating for the 'Happy' emoji and return the 'Happy' emoji
            case 5: 
                handleRating(5)
                return happy
            // If the action is 6, handle the rating for the 'Ecstatic' emoji and return the 'Ecstatic' emoji
            case 6: 
                handleRating(6)
                return ecstatic
            // If the action is not recognized, return the current state
            default:
                return state
        }
    }

    // Return the useReducer hook which takes the reducer function and the initial state as arguments
    return useReducer(reducer, initialState)
}
