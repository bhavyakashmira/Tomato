import React, { useContext } from 'react'
import "./Placeorder.css"
import { StoreContext } from '../../context/StoreContext'

function PlaceOrder() {

  const { getTotalAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="mutli-fields">
          <input type="text" placeholder='first name' />
          <input type="text"  placeholder='last name' />
        </div>
        <input type="email" placeholder='email' />
        <input type="text" placeholder='street' />
        <div className="mutli-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="mutli-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='phone' />
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
            <button >proceed to payment</button>
          </div>

        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
