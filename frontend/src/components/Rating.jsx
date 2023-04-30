import React, {useContext} from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import useEmoji from '../hooks/useEmoji';
import { useNavigate } from 'react-router-dom';




export default function Rating() {
    const {userEmail} = useContext(UserContext)
    const [mood,dispatch] = useEmoji()
    const nav = useNavigate()

    const emojiRating = [
        {rating: 1}, 
        {rating: 2},
        {rating: 3},
        {rating: 4},
        {rating: 5}
    ]
const handleNextBtn = () => {
  nav('/notes')
}
  return (
    <>
    <div className="ratingBox chart">
        <h3>How are you today?</h3>
        {emojiRating.map((emoji) => 
        <button className="btn-primary" key={emoji.rating}  onClick={() => dispatch(emoji.rating)}> {emoji.rating}</button>)}
        <div className='getMoodText'>I'm feeling {mood}</ div>
        <button className="btn-primary" onClick={handleNextBtn}>Next</button>
    </div>
          
        </>
  )
}
