import React, { useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'

const LoginPopup = ({setshowlogin}) => {
    const [currState , setCurrState]= useState("Sign up")
  return (
      <div className='login-popup' >
          <form className='login-popup-container' >
              <div className="login-popup-title">
                  <h2>{currState}</h2>
                  <img src={assets.cross_icon} onClick={()=>setshowlogin(false)} alt="" />
              </div>
              <div className="login-popup-inputs">
                  {currState == "Login" ? <></> : <input type="text" placeholder='your name' required />}
                  <input type="email" placeholder='enter password' required  />
                  <input  type='password' placeholder='enter password' required />
              </div>

              <button>{currState == "Sign up" ? "Create Account" : 'Login'}</button>
              <div className="login-popup-condition">
                  <input type="checkbox" required />
                  <p>I agree</p>
                  
              </div>
              {currState == "Login" ? <p>create a new account? <span onClick={()=>setCurrState("Sign up")} >click here</span> </p>:
              <p>already had a account<span onClick={()=>setCurrState("Login")} > login</span></p>}
             

        </form>
      
    </div>
  )
}

export default LoginPopup
