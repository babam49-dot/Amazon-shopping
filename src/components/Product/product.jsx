import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Productcard from './productcard'
import classes from './product.module.css'



function Product() {
  const[products,setproducts]=useState([])
  useEffect(()=>{

  axios.get('https://fakestoreapi.com/products').then((res)=>{
    // console.log(res)
    setproducts(res.data)
  }).catch((err)=>{
    console.log(err)
  })},  [])
  return (
    <section className={classes.product_container}>
      {
    products.map((singleproduct)=>{
      return <Productcard Product={singleproduct} key={singleproduct.id} />
    })
  }

    </section>
  
   )
}

export default Product