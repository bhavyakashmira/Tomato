import React, { useContext, useEffect, useState } from 'react'
import "./Myorders.css"
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Myorders = () => {

    const [data, setdata] = useState([]);
    const { url, token } = useContext(StoreContext); 
    const fetchOrders = async () => {
        const response = await axios.post(url + "/api/order/userorder", {}, { headers: { token } })
        
        setdata(response.data.data);
        console.log(response.data.data)
    }

    useEffect(() => {
        if (token) {
            fetchOrders();
       }
   },[token])
  return (
      <div>
          
          
      
    </div>
  )
}

export default Myorders
