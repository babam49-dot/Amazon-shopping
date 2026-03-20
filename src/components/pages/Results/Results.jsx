import React, { useEffect, useState } from 'react'
import classes from './results.module.css'
import Layout from '../../Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../../API/endpoint'
import Productcard from '../../Product/productcard'

function Results() {
    const [results, setresults]=useState([])
    const {categoryName}=useParams()
    useEffect(()=>{
         axios.get(`${productUrl}/products/category/${categoryName}`).then
    ((res)=>{
        setresults(res.data)
         }).catch((err)=>{
            console.log(err)
         })
    },[categoryName])
    
  return (
    <Layout>
    <section>
  <h1 style={{ padding: "30px" }}>Results</h1>
  <p style={{ padding: "30px" }}>Category / {categoryName}</p>
  <hr />
  <div className={classes.products_container}>
    {results?.map((Product) => (
      <Productcard 
        key={Product.id}  
        Product={Product} 
      />
    ))}
  </div>
</section>
    </Layout>
  )
}

export default Results