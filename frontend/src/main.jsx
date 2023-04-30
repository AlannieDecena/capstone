import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      
    <App />
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
