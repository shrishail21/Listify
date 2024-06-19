import React from 'react'
import {Routes ,Route } from 'react-router-dom';
import Category_navbar from '../components/category_navbar';
import Nav from '../components/nav';
import Product from '../components/product';

export default function 
() {
  return (
    <div>
        <Nav />
        <Category_navbar/>
        <Product/>
        
    </div>
  )
}
