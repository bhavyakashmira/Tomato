import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

function Cart() {

  const { cartItem, food_list,
    removeFromCart, getTotalAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart' >
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          {
            if (cartItem[item._id]>0) {
              return (
                <div>
                <div key={index} className='cart-items-title cart-items-item' >
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>{item.price * cartItem[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross' >x</p>
                </div>
                  <hr />
                  
                </div>
              )
              
            }
          }
          
          
          
        })}
       
        
      </div>
      <div className="cart-bottom">
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
              <b>${(getTotalAmount()*11)/10}</b>
            </div>
            <button onClick={()=>navigate('/order')} >proceed to checkout</button>
          </div>
          
        </div>
        <div className="cart-promocode">
          <p>enter your promocode</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='promo code' />
            <button>submit</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Cart
