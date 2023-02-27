import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Add() {
  const nav=useNavigate();
  const[companyname,setCompanyName]=useState('');
  const[carmodel,setCarModel]=useState('');
  const[buyername,setBuyerName]=useState('');
  const[address,setAddress]=useState('');
  const[phone,setPhone]=useState('');
  const[price,setPrice]=useState('');
  
  const senddb=(e)=>{
    e.preventDefault()
    const details={companyname,carmodel,buyername,address,phone,price}
    if(companyname.length==0||carmodel.length==0||buyername.length==0||address.length==0||phone.length==0||price.length==0){
      alert("Enter All fields")
    }
    else{
    fetch("http://localhost:8080/Car/",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(details)
    }
    ).then(()=>{
      console.log("New Detail Added");   
      console.log(JSON.stringify(details));
      console.log(e);
      alert("CarDetails Added Successfully!")
      nav("/home")
    })
  }
}
  return (
    <div className='back'>
    <div id="body">
    <div className="signup-form">
    <div className="container">
      <div className="header">
        <h1>Add Car Purchase</h1>
        <p>Enter Car Details</p>
      </div>
      <form>
        <div className="input">
          <input type="text" placeholder="Company Name" onChange={(e)=>setCompanyName(e.target.value)}  />
        </div>
        <div className="input">
        <input type="text" placeholder="Car Model"  onChange={(e)=>setCarModel(e.target.value)}/>
        </div>
        <div className="input">
        <input type="text" placeholder="Customer Name" onChange={(e)=>setBuyerName(e.target.value)}/>
        </div>
        <div className="input">
        <input type="text" placeholder="Customer Address"   onChange={(e)=>setAddress(e.target.value)} />
        </div>
        <div className="input">
        <input type="number" placeholder="Customer Phone Number"  pattern="[0-9]+"
        maxLength="10"  onChange={(e)=>setPhone(e.target.value)} />
        </div>
        <div className="input">
        <input type="number" placeholder="Car Total Price" pattern="[0-9]+"   onChange={(e)=>setPrice(e.target.value)} />
        </div>
        
        <input onClick={senddb} className="signup-btn" type="submit" value="Add CarDetails" />
       
        </form>
    </div>
  </div>
    </div>
    </div>
  )
}

export default Add