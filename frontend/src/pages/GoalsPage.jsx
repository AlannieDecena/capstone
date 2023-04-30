import React from "react";
import Goals from "../components/Goals";
import SideBar from "../components/SideBar";

export default function GoalsPage() {
  return (
    <>
      <SideBar />
  
      <div className="goalsPage">
        <h1 id="goalHeader">Goals</h1>
        <div id="vstack" className="overflow-auto">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Goal</th>
                <th scope="col">Date Started</th>
                <th scope="col">Date Completed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <input type="checkbox" value="" id="flexCheckChecked" />1
                </th>
                <td htmlFor="flexCheckChecked">...</td>
                <td>...</td>
                <td>... <a id="deleteBtn" href="">delete</a></td>
                
              </tr>
              {/*  */}
             </tbody>
          </table>
          
       
        </div>
        <div className="bottom">
            <div id="addGoalBox" className="input-group mb-3">
              <input type="text" className="form-control" />
              <button
                className="addBtn"
                type="button"
                id="button-addon2"
              >
                Add
              </button>
            </div>
        </div>
       </div>
    
    </>
  );
}
