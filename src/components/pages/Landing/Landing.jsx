import React from 'react'
import Layout from '../../Layout/Layout'
import Category from '../../Category/Category'
import CarouselEffect from '../../Carousel/Carousel'
import Product from '../../Product/product'

function Landing() {
  return (
   <Layout>
    <CarouselEffect />
    <Category />
    <Product /> 
    </Layout>
  )
}

export default Landing