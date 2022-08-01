import React from 'react';
import { items } from "../../data";
import {Link} from "react-router-dom"
import "./featured-items.css"
import { useGlobalContext } from '../../context';

const FeaturedItems = () => {
  const {cart} = useGlobalContext()
  return (
    <div className="featured-items">
      <div className="featured-header">
        <div>
          <div className="line"></div>
          <h2>featured items</h2>
        </div>
        <div className="featured-links">
          <li>
            <a href="#">all products</a>
          </li>
          <li>
            <a href="#">newest</a>
          </li>
          <li>
            <a href="#">low price</a>
          </li>
          <li>
            <a href="#">high price</a>
          </li>
        </div>
      </div>
      <div className='box-container'>
        {cart.map((item) => {
          const { id, small, name, price } = item;
          return (
            <div className="box" key={id}>
              <div className="image">
                <img src={small} alt={name} />
              </div>
              <div className="box-text">
                <h5>{name}</h5>
                <h6>${price.toFixed(2)}</h6>
              </div>
            </div>
          );
        })}
      </div>
      <div className="gray-line"></div>
    </div>
  );
}

export default FeaturedItems