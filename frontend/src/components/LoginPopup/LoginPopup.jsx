import React, { useContext, useEffect, useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios";

const LoginPopup = ({ setshowlogin }) => {
    const {url, token , settoken}= useContext(StoreContext)
    const [currState, setCurrState] = useState("Sign up")
    const [data, setdata] = useState({
        username: "",
        email: "",
        password: "",
        
    }
        
    )
    const onchangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setdata(
            data =>({...data , [name]:value})
        )
    }
    useEffect(() => {
        console.log(data)
    },[data])

    const onLogin = async (e) => {
        e.preventDefault();
        let newUrl = url;
        if (currState == 'Login') {
            newUrl +='/api/user/login';
        } else {
            newUrl +='/api/user/register'
        }
        const response = await axios.post(newUrl, data);

        if (response.data.success) {
            settoken(response.data.token);
            localStorage.setItem("token", response.data.token)
            setshowlogin(false);
        } else {
            alert(response.data.message)
        }

        
    }


  return (
      <div className='login-popup' >
          <form onSubmit={onLogin} className='login-popup-container' >
              <div className="login-popup-title">
                  <h2>{currState}</h2>
                  <img src={assets.cross_icon} onClick={()=>setshowlogin(false)} alt="" />
              </div>
              <div className="login-popup-inputs">
                  {currState == "Login" ? <></> : <input name='username' onChange={onchangeHandler} value={data.username} type="text" placeholder='your name' required />}
                  <input name='email' onChange={onchangeHandler} value={data.email} type="email" placeholder='enter password' required  />
                  <input name='password' onChange={onchangeHandler} value={data.password}  type='password' placeholder='enter password' required />
              </div>

              <button type='submit' >{currState == "Sign up" ? "Create Account" : 'Login'}</button>
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
