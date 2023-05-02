import React, {useState} from "react";
import {useCookies} from 'react-cookie';
//  This context is getting the user data from the backend and passing it to the components to be used in the components 
// this is also stored in the cookies so that the user can be logged in and logged out without having to log in again.


export const UserContext = React.createContext();

export const UserProvider = (props) => {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const [userCurrent, setUserCurrent] = useState(cookies.userObject ? cookies.userObject : {}); 
     

    const handleUser = (user) => {
        if (user.id) {
            setCookie('userObject', JSON.stringify(user), { path: '/', maxAge: 60 * 60 * 24 }) 
        } else {
            removeCookie('userObject')
        }
        console.log(user)
        setUserCurrent(user)
        console.log(userCurrent)
    }
    

    return (
        <UserContext.Provider value={{userCurrent, handleUser}}>
            {props.children}
        </UserContext.Provider>
    );
}