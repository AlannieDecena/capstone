import React, {useReducer, useContext} from 'react'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

export default function useEmoji() {
    const userCurrent = useContext(UserContext)

    const initialState='...'
    // const happy =(<div><img className='emoji' alt="happy" ></img>😊</div>)

    const happy =(<div className='emoji' alt="happy">😊</div>)
    const sad=(<div className='emoji' alt="sad" >Sad</div>)
    const neutral =(<div className='emoji' alt="neutral" >Neutral</div>)
    const mehh =(<div className='emoji'  alt="mehh"><p>Mehh</p></div>)
    const ecstatic =(<div className='emoji'  alt="ecstatic"><p>Ecstatic</p></div>)
    const handleRating = (emoji) => {

        
        console.log(userCurrent)
           const moodData = {'mood': emoji, 'userId': userCurrent}   
            axios.post('http://localhost:8001/mood/update', moodData ) 
            .then(response => {
                console.log(response.data); })
                .catch(error => { console.log(error) })};

    const reducer=(state,action) => {
        switch (action) {
            case 1:
                handleRating(1)
                return sad
            case 2: 
                handleRating(2)
                return mehh
            case 3: 
                handleRating(3)
                return neutral
            case 4: 
                handleRating(4)
                return happy
            case 5: 
                handleRating(5)
                return ecstatic
            default:
                return state}
        }
        return useReducer(reducer, initialState)
    }