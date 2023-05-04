import React, {useContext} from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import useEmoji from '../hooks/useEmoji';
import { useNavigate } from 'react-router-dom';
import angry from '../images/angry.png'
import sad from '../images/sad.png'
import happy from '../images/happy.png'
import mehh from '../images/mehh.png'
import chill from '../images/chill.png'
import ecstatic from '../images/ecstatic.png'
// This component is for handling the mood ratings and store it in the database


export default function Rating() {
    const {userEmail} = useContext(UserContext)
    const [mood,dispatch] = useEmoji()
    const nav = useNavigate()

    const emojiRating = [
        {rating: 1, face: `${angry}`}, 
        {rating: 2, face: `${sad}`},
        {rating: 3, face: `${mehh}`}, 
        {rating: 4, face: `${happy}`},
        {rating: 5, face: `${chill}`},
        {rating: 6, face: `${ecstatic}`}
    ]
const handleNextBtn = () => {
  nav('/user')
}
  return (
   
    <div className='ratingBox' >
        <h3>How are you today?</h3>
        <div>I'm feeling {mood}</ div>
        {emojiRating.map((emoji) => 
        <div id="emoBtn" key={emoji.rating}  onClick={() => dispatch(emoji.rating)}> <img id="emoImg" src={emoji.face} alt="" /> </div>)}
        <div>
        <button className="btn-primary" onClick={handleNextBtn}>Done</button>
        </div>
    </div>
          
       
  )
}
