import React, {useReducer, useContext} from 'react'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

export default function useEmoji() {
    const {userEmail} = useContext(UserContext)

    const initialState='neutral'
    const happy =(<div><img className='emoji' alt="happy" src="https://mpng.subpng.com/20190617/ysi/kisspng-smiley-emoticon-v-sign-emoji-vector-graphics-joykvest-5d075a6b874956.2618308915607629875541.jpg"></img></div>)
    const sad=(<div><img className='emoji' alt="sad" src="https://media.istockphoto.com/vectors/depressed-emoticon-vector-id480144800?k=20&m=480144800&s=612x612&w=0&h=UBol4m9eJ03gm-G34KsRHeLg7UJePn3btS1yNkCRI2Q="></img></div>)
    const neutral =(<div><img className='emoji' alt="neutral" src="https://www.kindpng.com/picc/m/403-4036638_sunglasses-neutral-emoji-hd-png-download.png"></img> </div>)
    const mehh =(<div className='emoji'  alt="mehh"><p>Mehh</p></div>)
    const excited =(<div className='emoji'  alt="excited"><p>excited</p></div>)
    const handleRating = (emoji) => {

        
        console.log(userEmail)
           const moodData = {'mood': emoji, 'userId': userEmail}   
            axios.post('http://localhost:8001/mood/update', moodData ) 
            .then(response => {
                console.log(response); })
                .catch(error => { console.log(error) })};

    const reducer=(state,action) => {
        switch (action) {
            case 1:
                handleRating(1)
                return sad
            case 2: 
                handleRating(2)
                return happy
            case 3: 
                handleRating(3)
                return neutral
            case 4: 
                handleRating(4)
                return mehh
            case 5: 
                handleRating(5)
                return excited
            default:
                return state}
        }
        return useReducer(reducer, initialState)
    }