import React from 'react'
import './Signup.css'
// import TextField from '@mui/material/TextField';
const Signup = () => {

  return (
    <>
  <div className='sign'>
  <h1>Create your PopX account</h1>
    <div className="container">
      <div className="entryarea">
        <input type="text" required placeholder='Enter Full name'/>
        <div className="labelline">Full name *</div>
     </div>
     <div className="entryarea">
        <input type="text" required placeholder='Enter Phone number'/>
        <div className="labelline">Phone Number*</div>
     </div>
     <div className="entryarea">
        <input type="text" required placeholder='Enter Email Address'/>
        <div className="labelline">Email Address *</div>
     </div>
     <div className="entryarea">
        <input type="text" required placeholder='Enter Password'/>
        <div className="labelline">Password *</div>
     </div>
     <div className="entryarea">
        <input type="text" required placeholder='Company Name'/>
        <div className="labelline">Company Name </div>
     </div>
     </div>
    </div>

    

    <div className="radiocontainer">
    <div> Are you an Agency?</div>
      <input
        type="radio"
        name="yes"
        id="yes"
        value="yes"
        checked="checked"
      />
      <span>Yes</span>
      
      <input
        type="radio"
        name="no"
        id="no"
        value="no"
        
      />
      <span>No</span>
    </div>
    

<div>
   <button className='signbutton'>Create Account </button>
   </div>
   </>
  )
}

export default Signup;