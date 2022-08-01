import React from 'react';
import CartItems from '../../Components/CartItems';
import phone from "../../assets/images/phone.svg"
import "./cart.css"
import { useGlobalContext } from '../../context';

const Cart = () => {
  const {cart} = useGlobalContext()
  return (
    <section className="cart">
      <div className="box-container">
        <div className="cart-column">
          <h3>Shoppping Cart</h3>
          <div className="shopping-cart">
            <CartItems/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;