// import the necessary modules
import React from 'react';
import { useState } from 'react';
import LogIn from '../components/LogIn';
import Signup from '../components/Signup';
import 'bootstrap/dist/css/bootstrap.css';


// this page holds the log in and sign up pages which the user can toggle between.
export default function LogInPage() {

  // initialize state using the useState hook, "login" is the default value
  const [currentPage, setCurrnetPage] = useState('login');

  // function to toggle the current page based on the page passed as an argument
  const togglePage = (page) => {
    setCurrnetPage(page);
  }

  // render the login page and sign up page, and toggle between them based on the state
  return (
    <>
      <div>
        {currentPage === 'login' ? <LogIn onPageSwitch={togglePage} /> : <Signup onPageSwitch={togglePage}/>}
      </div>
    </>
  )
}
