import React from 'react'
import classes from'./header.module.css'
import LowerHeader from './LowerHeader';


import {HiOutlineLocationMarker}  from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimpleLight } from "react-icons/pi";


const Header= () => {
  return (
  
     <>
    <section>
        <div className={classes.header_container} >
          <div className={classes.logo_container}>
            <a href="/"><img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
          </a>
          <div className={classes.delivery}>
            <span>
          <HiOutlineLocationMarker />
        </span>
           
        
        <div >  
          <p>Delivered to</p>
          <span>Ethiopia</span>
        </div>
        </div>
        </div>
        <div className={classes.search}>
          <select name="" id="">
             <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="search product" />
          <IoSearch size={25} />
        </div>
       
     
        <div className={classes.order_container}>
          <a href='' className={classes.language}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_the_United_States_%28DDD-F-416E_specifications%29.svg/500px-Flag_of_the_United_States_%28DDD-F-416E_specifications%29.svg.png"
                  alt="Us Flag" />
          <select>
            <option value="">EN</option>
          </select>
          </a>
        
        <a href=''>
          
            <p>Sign In</p>
            <span>Account & Lists</span>
        </a>
        <a href=''>
          <p>returns</p>
          <span>& Orders</span>
        </a>

        <a className={classes.cart}>
          <PiShoppingCartSimpleLight  size={35}/>

          <span>0</span>
        </a>
       </div>
      </div>
    </section>
    <LowerHeader />
   </>
  );
  };

export default Header