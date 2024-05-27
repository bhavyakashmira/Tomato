import React from 'react'
import "./ExploreMenu.css"
import {menu_list} from "../../assets/assets"

function ExploreMenu({category  , setcategory}) {
  return (
      <div className='explore-menu' id='explore-menu' >
          <h1>Explore our menu</h1>
          <p className='explore-menu-text' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorem odio rerum deserunt vero ut impedit aspernatur nesciunt dolor officiis, laboriosam corporis libero beatae quidem unde, officia voluptatem! Aperiam, quaerat.</p>
          <div className="explore-menu-list">
              {menu_list.map((menu, ind) => (
                  <div onClick={()=>setcategory(prev=> prev==menu.menu_name?"ALL": menu.menu_name)} key={ind} className='explore-menu-list-item' > 
                      <img className={category==menu.menu_name?"active":""} src={menu.menu_image} alt="" />
                      <p>{menu.menu_name}</p>
                  </div>
              ))}
          </div>

          <hr />
      
    </div>
  )
}

export default ExploreMenu
