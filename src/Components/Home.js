import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  function myFunction() {
    var x = document.getElementById("table");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  const[user,setUser]=useState('');
  const fetchData = () => {
    return fetch("http://localhost:8080/Car/get")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])
  return (
    <div>
    <Link to="/add"><button id="addbtn">Add CarDetails</button></Link>
    <button id="viewbtn" onClick={myFunction} >View Cardetails</button>
    <table id="table">
              <thead>
                <tr>
                  <th>Carmodel No</th>
                  <th>Company Name</th>
                  <th>Model Name</th>
                  <th>Customer Name</th>
                  <th>Address</th>
                  <th>Phone Number</th>
                  <th>Total Price</th>

                </tr>
              </thead>
              <tbody>
    {user && user.length > 0 && user.map((userObj, index) => (
      <tr>
             <th> {userObj.carid}</th>
             <th> {userObj.companyname}</th>
             <th> {userObj.carmodel}</th>
             <th> {userObj.buyername}</th>
             <th> {userObj.address}</th>
             <th> {userObj.phone}</th>
             <th> {userObj.price}</th>
      </tr>
    ))}
              </tbody>
            </table>
        
    </div>
  )
}

export default Home