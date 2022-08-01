import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import { useGlobalContext } from '../../context';

const SingleProduct = () => {
  const {cart} = useGlobalContext()
  const {id} = useParams();
  const product = cart.find((product) => product.id === id);
  const {small, name, price} = product;
  
  return (
    <section className="single-product">
      Single Products
      <h1>{id}</h1>
    </section>
  )
}

export default SingleProduct