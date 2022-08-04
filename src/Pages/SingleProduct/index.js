import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom"
import { useGlobalContext } from '../../context';
import './single-product.css'

const SingleProduct = () => {
  const {cart} = useGlobalContext()
  const {id} = useParams();
  const product = cart.find((product) => product.id === parseInt(id));
  const {large, name, price, desc} = product;
  
  return (
    <section className="single-product">
      <h2>Product {id}:</h2>
      <div className="box-container">
        <div className="image">
          <img src={large} alt={name} />
        </div>
        <div className="product-text">
          <h4>{name}</h4>
          <h5>${price.toFixed(2)}</h5>
          <p>{desc}</p>
          <Link to='/cart' className="add-btn">add to cart</Link>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct;