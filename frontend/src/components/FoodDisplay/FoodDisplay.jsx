import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../context/StoreContext';
import Fooditem from '../FoodItem/Fooditem';

function FoodDisplay({category}) {

    const { food_list } = useContext(StoreContext);
  return (
      <div className='food-display' id='food-display'  >
      <h2>Top dishes near you</h2>
      <h1>{ food_list.length}</h1>
      <div className="food-display-list">{
        food_list.map((item, ind) => {
          if (category == 'ALL' || category == item.category) {
            return <Fooditem key={ind} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          
          }
          
           })
          }</div>
      
    </div>
  )
}

export default FoodDisplay
