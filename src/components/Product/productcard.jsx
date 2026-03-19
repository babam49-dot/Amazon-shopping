import React from 'react'
import Rating from '@mui/material/Rating';
import Currencyformat from '../Currencyformat/Currencyformat';
import classes from './product.module.css'

function Productcard({Product}) {
    const {image, title, id, rating, price}=Product;
    const { rate , count } = rating;
  return (
    <div className={`${classes.card_container}`}>
        <a href="">
            <img src={image} alt="" />

        </a>
        <div>
            <h3>{title}</h3>
            <div className={classes.rating}>
                {}
            <Rating value={rating.rate} precision={0.1}/>
          
            <small>{rating.count}</small>
           </div>
        <div>
            {}
            <Currencyformat amount={price}/>
        </div>
        <button className={classes.button}>
            add to cart
        </button>
        </div>


    </div>
  )
}

export default Productcard
