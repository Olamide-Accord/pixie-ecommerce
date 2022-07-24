import React from 'react';
import { items } from "../../data";
import "./featured-items.css"

const FeaturedItems = () => {
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
      <div className="box-container">
        {items.map((item) => {
          const { id, img, name, price } = item;
          return (
            <div className="box" key={id}>
              <div className="image">
                <img src={img} alt={name} />
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