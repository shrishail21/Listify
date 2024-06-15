import React from 'react'
import Product_with_filter from '../components/product_with_filter'
import Category_navbar from '../components/category_navbar'
import Nav from '../components/nav'

export default function Electronics() {
  return (
    <div>
        <div>
            <Nav/>
            <Category_navbar/>
            <Product_with_filter/>
        </div>
    </div>
  )
}
