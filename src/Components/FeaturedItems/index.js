import React from 'react';
import {Link} from "react-router-dom"
import "./featured-items.css"
import { useGlobalContext } from '../../context';

const FeaturedItems = () => {
  const {cart, filter, filterCategory, setFilter, addCart} = useGlobalContext()
  return (
    <div className="featured-items">
      <div className="featured-header">
        <div>
          <div className="line"></div>
          <h2>featured items</h2>
        </div>
        <div className="featured-links">
            <button onClick={() => setFilter(cart)}>all products</button>
            <button onClick={() => filterCategory("Clothes")}>Clothes</button>
            <button onClick={() => filterCategory("Accessories")}>Accessories</button>
        </div>
      </div>
      <div className='box-container'>
        {filter.map((item, index) => {
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
                <Link className='add-btn' to={`/${index}`}>
                  details
                </Link>
                <Link to='/cart' className="add-btn" onClick={() => addCart(id)}>add to cart</Link>
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