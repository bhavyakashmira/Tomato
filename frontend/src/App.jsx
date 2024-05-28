import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/home/Home.jsx"
import Cart from "./pages/cart/Cart.jsx"
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Footer from './components/Footer/Footer.jsx'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'

const App = () => {
  const [showlogin, setshowlogin] = useState(false);
  return (
    <>
      {showlogin ? <LoginPopup setshowlogin={setshowlogin} />:<></>}
    <div className='app'>
      <Navbar setshowlogin={setshowlogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element ={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App

