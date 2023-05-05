// Importing the necessary modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// Rendering the application to the root element in the DOM
ReactDOM.createRoot(document.getElementById('root')).render(

  // Enabling strict mode for React
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
// Providing routing functionality to the application
//<BrowserRouter>

// Providing user data to the application through context
//<UserProvider>

  // Rendering the main application component
  //<App />