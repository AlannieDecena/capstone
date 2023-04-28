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
const handleBackBtn = () => {
  nav('/notes')
}
  return (
    <>
    <div className="componentBox">
        <h3>how are you feeling today?</h3>
        {emojiRating.map((emoji) => 
        <button key={emoji.rating}  onClick={() => dispatch(emoji.rating)}> {emoji.rating}</button>)}
        <div>Mood= {mood}</div>
    </div>
          <button onClick={handleBackBtn}>next</button>
        </>
  )
}
