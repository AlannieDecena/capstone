import React, {useState} from "react";
import {useCookies} from 'react-cookie';

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
    }
    

    return (
        <UserContext.Provider value={{userCurrent, handleUser}}>
            {props.children}
        </UserContext.Provider>
    );
}