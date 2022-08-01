import React from 'react'
import "./cartitems.css";
import { FaCaretDown, FaCaretUp } from "react-icons/fa/index";
import { useGlobalContext } from '../../context';

const CartItems = () => {
  const {cart, total, clearCart, removeItem, toggleAmount} = useGlobalContext()
  return (
    <div className="cart-items">
      {cart.map((item) => {
        const { id, price, small, name, amount } = item;
        return (
          <div key={id}>
            <div className="cart-box">
              <div className="flex-cart">
                <div className="image">
                  <img src={small} alt={name} />
                </div>
                <div className="cart-text">
                  <h4>{name}</h4>
                  <h5>${price.toFixed(2)}</h5>
                  <button className="remove-btn" onClick={() => removeItem(id)}>
                    remove
                  </button>
                </div>
              </div>
              <div className="quantity">
                <button onClick={() => toggleAmount(id, "inc")}>
                  <FaCaretUp className="icon" />
                </button>
                <p>{amount}</p>
                <button onClick={() => toggleAmount(id, "dec")}>
                  <FaCaretDown className="icon" />
                </button>
              </div>
            </div>
            <div className="gray-line"></div>
          </div>
        );
      })}
      <div className="total">
        <h4>total:</h4>
        <p>${total}</p>
      </div>
      <div className="option-div">
        <button className="clear-btn" onClick={clearCart}>
          clear cart
        </button>
      </div>
    </div>
  );
}

export default CartItems