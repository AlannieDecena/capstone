import React, {useState, useContext} from 'react';
import { UserContext } from '../context/UserContext';
import useFormInput from '../hooks/useFormInput';
import axios from 'axios';




export default function LogIn(props) {
    
    const userEmailProps = useFormInput('')
    const passwordProps = useFormInput('')
    const {userEmail, setUserEmail} = useContext(UserContext)

    const [loggedIn, setLoggedIn] = React.useState(false)
    const [errMsg, setErrMsg] = React.useState('')
    const [loginAttempts, setLoginAttempts] = React.useState(0)


    const handleLogin = (e) => {
        e.preventDefault();
    //setting the handleSubmit to taking userName instead of email
        let email = userEmailProps.value
        let password = passwordProps.value

        console.log(email + ' ' + password)

        //login successful/true if both values exist and match
        axios.post('http://localhost:8001/user/login', {email, password}) .then(response => {

        let isLoggedIn = response.data.data.id
        if (!isLoggedIn) { 
            let newAttempts = loginAttempts + 1

            if (newAttempts === 5) {
                setErrMsg('Maximum login attempts exceeded. You are blocked.'); 
            }
            else {
                setErrMsg('Unsuccessful login attempt #'+newAttempts+' of 5'); 
            }
            setLoginAttempts(newAttempts)
        } else {
            setErrMsg('')
            setUserEmail(isLoggedIn)
        }

        setLoggedIn( isLoggedIn ) 
    }) 
      } 

      return (
        <div className="Login componentBox">

            {!loggedIn && loginAttempts < 5 &&

                <form onSubmit={handleLogin}>
                    <div className="formRow">
                        <label htmlFor="email">Email: </label>
                        {/* every time the input changes, store the latest value into state */}
                        <input id="email" {...userEmailProps} placeholder={userEmail}/>
                    </div>                   

                    <div className="formRow">
                        <label htmlFor="password">Password: </label>
                        {/* every time the input changes, store the latest value into state */}
                        <input type="password" id="password" {...passwordProps} />
                    </div>

                    <button>Login</button>
                </form>
            }
            <p>{errMsg}</p>
            <button onClick={() => props.onPageSwitch('signup')}>Don't  have an account? SignUp here</button>
        </div>
    );    

 
}