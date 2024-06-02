import React, { useEffect, useState } from 'react'
import "./Add.css"
import axios from "axios";
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify';

const Add = () => {
  const url = "http://localhost:3000";
  
  const [image, setimage] = useState(false);
  const [data, setdata] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
    
  })

  const onchangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata(data=>({...data,[name]:value}))
    
  }

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("description", data.description);
    formdata.append("price", Number(data.price));
    formdata.append("category", data.category);
    formdata.append("image", image)
    const response = await axios.post(`${url}/api/food/add`, formdata)
    if (response.data.success) {
      setdata({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      })
      setimage(false)
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
      
    }


  }


  return (
    <div className='add' >
      <form className='flex-col' onSubmit={onsubmitHandler}  >
        <div className="add-img-upload flex-col ">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={ image?URL.createObjectURL(image): assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setimage(e.target.files[0])}  type="file" id='image' hidden required />

        </div>
        <div className="add-product-name">
          <p>Product Name</p>
          <input onChange={onchangeHandler} value={data.name} type="text" name="name" placeholder='type here' />

        </div>
        <div className="add-product-description">
          <p>product description</p>
          <textarea onChange={onchangeHandler} value={data.description}  name="description" id="" rows="6" placeholder='write content here' ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col ">
            <p>Product category</p>
            <select  onChange={onchangeHandler}  name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex col ">
            <p>product price</p>
            <input onChange={onchangeHandler} value={data.price} type="Number" name='price' placeholder='$20' />
            
          </div>
          
        </div>
        <button type='submit' className='add-btn' >Add</button>
    </form>
      
    </div>
  )
}

export default Add
