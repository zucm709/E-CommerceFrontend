import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='Search...' placeholder='Your Name'/>
          <input email='text' placeholder='Email Adress'/>
          <input type='text' placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already Have An Account? <span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id=''/>
          <p>By continuing, i agree to to the terms of use & privacy policy</p>
        </div> 
      </div>
      
    </div>
  )
}

export default LoginSignup
