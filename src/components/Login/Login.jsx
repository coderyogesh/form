import React from 'react'
import './Login.css'
import TextField from '@mui/material/TextField';
const Login = () => {
  return (
    <div className='loginacc'>
    <h1>Signin to your PopX account</h1>
    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,</p>
      <div className='emailadd'>
        <TextField
          className='email'
          required
          id="outlined-required"
          label="Email Address"
          placeholder="Enter Email Address"
        />
        </div>
        <div className='password'>
         <TextField 
         required
          className='pass'
          id="outlined-required"
          label="Password"
          placeholder='Enter Password'
        />
    </div>
    <button className='loginbutton'>Login</button>
    </div>
  )
}

export default Login;