import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setshowlogin}) => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState("home");
    const { getTotalAmount, token, settoken } = useContext(StoreContext);
    const logout = () => {
        localStorage.removeItem("token")
        settoken("");
        navigate("/")

        
    }


  return (
      <div className='navbar' >
          <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
          
          <ul className="navbar-menu">
              <Link to='/' onClick={()=>setMenu("home")} className={menu=="home"?"active":""} >home</Link>
              <a href='#explore-menu' onClick={() => setMenu("menu")}  className={menu=="menu"?"active":""} >menu</a>
              <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu=="mobile-app"?"active":""} >mobile-app</a>
              <a href='#footer' onClick={() => setMenu("contact-us")} className={menu=="contact-us"?"active":""} >contact-us</a>
          </ul>
          <div className='navbar-right'>
              <img src={assets.search_icon} alt="" />
              <div className='navbar-search-icon' >
                  <Link to='/cart' ><img src={assets.basket_icon} alt="" /></Link>
                  <div className={getTotalAmount()===0?"":"dot"}>
                  </div>
               
              </div>
              {!token ? <button onClick={() => setshowlogin(true)} >sign in</button> : <div className='navbar-profile'  >
                  <img src={assets.profile_icon} alt="" />
                  <ul className='nav-profile-dropdown'>
                      <li><img src={assets.bag_icon} alt="" /></li>
                      <p>Orderred</p>
                      <hr />
                      <li onClick={logout} ><img src={assets.logout_icon} alt="" /></li>
                  <p>logout</p></ul></div>}
             
              
        </div>
      
    </div>
  )
}

export default Navbar
