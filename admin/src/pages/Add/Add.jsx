import React from 'react'
import "./Add.css"
import { assets } from '../../assets/assets'

const Add = () => {
  return (
    <div className='add' >
      <form className='flex-col'  >
        <div className="add-img-upload">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type="file" id='image' hidden required />

        </div>
        <div className="add-product-name">
          <p>Product Name</p>
          <input type="text" name="name" placeholder='type here' />

        </div>
        <div className="add-product-description">
          <p>product description</p>
          <textarea name="description" id="" rows="6" placeholder='write content here' ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col ">
            <p>Product category</p>
            <select name="category">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>

          </div>
        </div>
    </form>
      
    </div>
  )
}

export default Add
