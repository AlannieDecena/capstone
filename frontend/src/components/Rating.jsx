import React, {useContext} from 'react'
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import useEmoji from '../hooks/useEmoji';




export default function Rating() {
    const {userEmail} = useContext(UserContext)
    const [mood,dispatch] = useEmoji()
    

    const emojiRating = [
        {rating: 1}, 
        {rating: 2},
        {rating: 3},
        {rating: 4},
        {rating: 5}
    ]

  return (
    <>
    <div className="componentBox">
        <h3>how are you feeling today?</h3>
        {emojiRating.map((emoji) => 
        <button key={emoji.rating}  onClick={() => dispatch(emoji.rating)}> {emoji.rating}</button>)}
        <div>Mood= {mood}</div>
    </div>

        </>
  )
}
