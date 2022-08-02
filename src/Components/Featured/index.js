import React from 'react';
import "./featured.css"
import { useGlobalContext } from '../../context';
import { Link } from 'react-router-dom';

const Featured = () => {
  const {cart, addCart} = useGlobalContext();
  return (
    <section className="featured">
      <div className="line"></div>
      <h2>featured items</h2>
      <div className='box-container'>
        {
          cart.map((item, index) => {
            const {id, small, name, price} = item;
            return <div key={index} className="box">
              <div className="image">
                <img src={small} alt={name} />
              </div>
              <div className="box-text">
                <h5>{name}</h5>
                <h6>${price}</h6>
                <Link className='add-btn' to={`/${id}`}>
                details</Link>
                <Link to="/cart" className="add-btn" onClick={() => addCart(id)}>add to cart</Link>
              </div>
            </div>
            
        })
        }
      </div>
    </section>
  )
}

export default Featured