import { Routes, Route } from "react-router-dom"
import React from "react"
import App from "../App"
import Login from "../components/LogIn"
import PageNotFound from "../pages/PageNotFound"





function AppRoutes(props) {
    
    return (
       
        <Routes>


            <Route path='/login' element={<Login {...props} />} />

            {/* special route to handle if none of the above match */}
            <Route path="*" element={<PageNotFound />} />            
        </Routes>
       
    )
}



export default AppRoutes