import React, {useReducer, useContext} from 'react'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
// This custom hook sets the rating values for the mood emojis then returns them to the parent component 

export default function useEmoji() {
    const userCurrent = useContext(UserContext)
    
    const initialState='...'
    // const happy =(<div><img className='emoji' alt="happy" ></img>😊</div>)
    const angry =(<div className='emoji' alt="angry">Angry</div>)
    const happy =(<div className='emoji' alt="happy">Happy</div>)
    const sad=(<div className='emoji' alt="sad" >Sad</div>)
    const mehh =(<div className='emoji' alt="mehh" >Mehh</div>)
    const chill =(<div className='emoji'  alt="chill">Chill</div>)
    const ecstatic =(<div className='emoji'  alt="ecstatic">Ecstatic</div>)
    const handleRating = (emoji) => {

        
        console.log(userCurrent.userCurrent.id)
           const moodData = {'mood': emoji, 'userId': userCurrent.userCurrent.id}  
           console.log(moodData) 
            axios.post('http://localhost:8001/mood/update', moodData ) 
            .then(response => {
                console.log(response.data); })
                .catch(error => { console.log(error) })};

    const reducer=(state,action) => {
        switch (action) {
            case 1: console.log(userCurrent)
                handleRating(1)
                return angry
            case 2: 
                handleRating(2)
                return sad
            case 3: 
                handleRating(3)
                return mehh
            case 4: 
                handleRating(4)
                return chill
            case 5: 
                handleRating(5)
                return happy
            case 6: 
                handleRating(6)
                return ecstatic
            default:
                return state}
        }
        return useReducer(reducer, initialState)
    }