import React from 'react';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import LogIn from '../components/LogIn';
import Signup from '../components/Signup';
import 'bootstrap/dist/css/bootstrap.css';
import LogOut from '../components/LogOut';
import EntryPage from './EntryPage';
import NavBar from '../components/NavBar';



export default function LogInPage() {

const [currentPage, setCurrnetPage] = useState('login');
const togglePage = (page) => {
  setCurrnetPage(page);

}
  return (
    <>
   
    <div >
      <NavBar/>
        {currentPage === 'login' ? <LogIn onPageSwitch={togglePage} /> : <Signup onPageSwitch={togglePage}/>}
        <LogOut/>
    </div>

    
    </>
  )
}
