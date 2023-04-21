import React from "react";

export const UserContext = React.createContext();


export const UserProvider = (props) => {
    const [userEmail, setUserEmail] = React.useState(''); 

    return (
        <UserContext.Provider value={{userEmail, setUserEmail}}>
            {props.children}
        </UserContext.Provider>
    );
}