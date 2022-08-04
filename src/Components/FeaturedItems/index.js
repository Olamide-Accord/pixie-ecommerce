import React from 'react';
import { items } from "../../data";
import {Link} from "react-router-dom"
import "./featured-items.css"
import { useGlobalContext } from '../../context';

const FeaturedItems = () => {
  const {cart, filterCategory} = useGlobalContext()
  return (
    <div className="featured-items">
      <div className="featured-header">
        <div>
          <div className="line"></div>
          <h2>featured items</h2>
        </div>
        <div className="featured-links">
            <button>all products</button>
            <button onClick={() => filterCategory("Clothes")}>Clothes</button>
            <button onClick={() => filterCategory("Accessories")}>Accessories</button>
        </div>
      </div>
      <div className='box-container'>
        {cart.map((item) => {
          const { id, small, name, price, categories} = item;
          return (
            <div className="box" key={id}>
              <div className="image">
                <img src={small} alt={name} />
              </div>
              <div className="box-text">
                <h5>{name}</h5>
                <h6>${price.toFixed(2)}</h6>
                <p className="categories">{categories}</p>
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