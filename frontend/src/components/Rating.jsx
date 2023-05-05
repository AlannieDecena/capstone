import React, {useContext} from 'react'; // Importing React library and useContext hook to access user context
import axios from 'axios'; // Importing Axios library to make HTTP requests
import { UserContext } from '../context/UserContext'; // Importing UserContext from its file
import useEmoji from '../hooks/useEmoji'; // Importing custom hook useEmoji from its file
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook to navigate to different pages
import angry from '../images/angry.png' // Importing images for each mood rating
import sad from '../images/sad.png'
import happy from '../images/happy.png'
import mehh from '../images/mehh.png'
import chill from '../images/chill.png'
import ecstatic from '../images/ecstatic.png'

// This component is for handling the mood ratings and storing them in the database
export default function Rating() {
    const {userEmail} = useContext(UserContext) // Destructuring userEmail from UserContext
    const [mood,dispatch] = useEmoji() // Destructuring mood and dispatch from useEmoji hook
    const nav = useNavigate() // Initializing the useNavigate hook as nav

    // Creating an object to hold each mood rating and its corresponding image
    const emojiRating = [
        {rating: 1, face: `${angry}`}, 
        {rating: 2, face: `${sad}`},
        {rating: 3, face: `${mehh}`}, 
        {rating: 4, face: `${happy}`},
        {rating: 5, face: `${chill}`},
        {rating: 6, face: `${ecstatic}`}
    ]

    // Function to navigate to the user page when the Done button is clicked
    const handleNextBtn = () => {
        nav('/user')
    }

    // Rendering the mood rating component to the screen
    return (
        <div className='ratingBox' >
            <h3>How are you today?</h3>
            <div>I'm feeling {mood}</ div> 
            {emojiRating.map((emoji) => // Mapping through the emojiRating array to display each mood rating with its corresponding image
                <div id="emoBtn" key={emoji.rating}  onClick={() => dispatch(emoji.rating)}> <img id="emoImg" src={emoji.face} alt="" /> </div>
            )}
            <div>
                <button className="btn-primary" onClick={handleNextBtn}>Done</button> 
            </div>
        </div>   
    )
}

