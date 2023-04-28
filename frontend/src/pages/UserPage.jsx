import SideBar from "../components/SideBar";
import LineChart from "../components/LineChat";
import { UserContext} from "../context/UserContext";
import {useParams} from 'react-router-dom'
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import useFormInput from "../hooks/useFormInput";
import Note from "../components/Note";

export default function UserPage() {
  const {userCurrent} = useContext(UserContext);
  const userName = useFormInput("");
  const params = useParams();
  const id = params.id;
  const [getUserName, setGetUserName] = useState('');

    // useEffect(()=> {
    //   axios.get("http://localhost:8001/user/1")
    //   .then(response=> {console.log(response); setGetUserName(response.data.data[0])})
    //   .catch(error => {console.log(error)})
    //   },[])
    //   console.log(getUserName)


  return (
    <div className="UserPage">
      <SideBar />
      <div className="contentUser">
        <h1>hello {userCurrent.name}</h1>
        <section>
          <LineChart/>
          <Note/>
        </section>
      </div>
    </div>
  );
}
