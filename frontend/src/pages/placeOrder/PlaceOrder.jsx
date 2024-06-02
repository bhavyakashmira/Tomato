import React, { useContext, useEffect, useState } from 'react'
import "./Placeorder.css"
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

function PlaceOrder() {

  const { getTotalAmount, token, food_list, cartItem, url } = useContext(StoreContext)
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
    
  })
 
  const onchangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata(data=>({...data ,[name]:value}))
  }


  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItem = []
    food_list.map((item) => {
      if (cartItem[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItem[item._id];
        orderItem.push(itemInfo)
      }
    })
    let orderData = {
      address: data,
      items: orderItem,
      amount: getTotalAmount(),
      
    }
    let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } })
   console.log(response)
 
  }


  return (
    <form className='place-order' onSubmit={placeOrder} >
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="mutli-fields">
          <input name='firstName' onChange={onchangeHandler} value={data.firstName}  type="text" placeholder='first name' />
          <input name='lastName' onChange={onchangeHandler}  value={data.lastName}  type="text"  placeholder='last name' />
        </div>
        <input value={data.email} name="email" onChange={onchangeHandler} type="email" placeholder='email' />
        <input value={data.street} name='street' onChange={onchangeHandler} type="text" placeholder='street' />
        <div className="mutli-fields">
          <input name='city' value={data.city} onChange={onchangeHandler}  type="text" placeholder='City' />
          <input onChange={onchangeHandler} value={data.state} name='state' type="text" placeholder='State' />
        </div>
        <div className="mutli-fields">
          <input onChange={onchangeHandler} value={data.zipcode} name='zipcode' type="text" placeholder='Zip Code' />
          <input onChange={onchangeHandler} value={data.country} name='country' type="text" placeholder='Country' />
        </div>
        <input onChange={onchangeHandler} value={data.phone} name='phone' type="text" placeholder='phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h1>cart totals</h1>
          <div>
            <div className="cart-total-details"><p>SUB TOTAL</p>
              <p>${getTotalAmount()}</p></div>
            <hr />
            <div className="cart-total-details"><b>Delivery fees</b>
              <b>${getTotalAmount()/10}</b></div>
            <hr />
            <div className="cart-total-details">
              <b>total</b>
              <b>${(getTotalAmount() * 11) / 10}</b>
            </div>
            <button type='submit' >proceed to payment</button>
          </div>

        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
