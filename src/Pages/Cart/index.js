import React from 'react';
import CartItems from '../../Components/CartItems';
import "./cart.css"
import { useGlobalContext } from '../../context';
import {GiShoppingCart} from "react-icons/gi"
import { Link } from 'react-router-dom';

const Cart = () => {
  const {shoppingCart} = useGlobalContext();
  return (
    <section className="cart">
      <div className="box-container">
        <div className="cart-column">
          <h3>Shoppping Cart</h3>
          <div className="shopping-cart">
            {
              shoppingCart.length === 0 && <div className='empty-cart'>
                <div className='empty-cart-div'>
                  <GiShoppingCart className='icon'/>
                </div>
                <h4>Your cart is empty!</h4>
                <p>Browse our categories and discover our best deals!</p>
                <div>
                  <Link to="/products" className="btn">
                    start shopping
                  </Link>
                </div>
              </div>
              }
            {shoppingCart.length > 0 && <CartItems/>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;