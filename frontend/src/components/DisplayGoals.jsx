import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

// This component is for adding displaying the Goals list


export default function DisplayGoals(props) {
  const { userCurrent, handleUser } = useContext(UserContext);
  const [goals, setGoals] = useState([]);
 const [checked, setChecked] = useState();

useEffect(() => {
  console.log(userCurrent.id)
  axios.get(`http://localhost:8001/goal/user/${userCurrent.id}` )
  .then(response => {
    setGoals(response.data.data)
    
  })
},[])

const handleDate = (id) => {
  const updateUser = {
    "checked": checked
  }
  const axUsers = `http://localhost:8001/goal/put/${id}`
  axios.put(axUsers, updateUser)
  .then(response => { console.log(response)})
  .catch(error => { console.log(error) });
}
   
  return (
    <> 
   
      <div >
       
        <div id="vstack" className="overflow-auto">
          
            
          
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Goal</th>
                <th scope="col">Date Started</th>
                <th scope="col">Date Completed</th>
              </tr>
            </thead>
            <tbody>
              {goals.map((goal, index) => (
              <tr key={index}>

                <th scope="row">
                  <input type="checkbox" value={''} id="flexCheckChecked" onChange={() => setChecked(!checked)} onClick={() => handleDate(goal.id)}/>{index +1}
                </th>
                <td htmlFor="flexCheckChecked">{goal.goal}</td>
                <td>{goal.createdAt}</td>

                <td>{goal.updatedAt}<a id="deleteBtn" href="">delete</a></td>
                
              </tr>
              ))}{/*  */}
             </tbody>
          </table>
          
       
        </div>
       
       </div>
    </>
  );
}
