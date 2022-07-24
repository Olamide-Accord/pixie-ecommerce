import React from 'react';
import CartItems from '../../Components/CartItems';
import "./cart.css"

const Cart = () => {
 
  return (
    <section className="cart">
      <div className="box-container">
        <div className="cart-column">
          <h3>Shoppping Cart</h3>
          <div className="shopping-cart">
            <CartItems/>
          </div>
        </div>

        <div className="cart-column payment-method">
          <div className="payment">
            <h4>payment</h4>
            <form>
              <div className="formBox">
                <div className="inputBox">
                  <label htmlFor="cardNum">card number</label>
                  <input type="number" id="cardNum" placeholder="name" />
                </div>
                <div className="inputBox">
                  <label htmlFor="valid">valid until</label>
                  <input type="month" id="valid" />
                </div>
                <div className="inputBox">
                  <label htmlFor="">name on the card</label>
                  <input type="text" placeholder="tony stark" />
                </div>
                <div className="inputBox">
                  <label htmlFor="">name on the card</label>
                  <input type="text" placeholder="tony stark" />
                </div>
              </div>
            </form>
          </div>
          <div className="shipping">
            <h4>shipping</h4>
            <form>
              <div className="inputBox">
                <label htmlFor="">full name</label>
                <input type="text" placeholder="Bruce wayne" />
              </div>
              <div className="inputBox">
                <label htmlFor="">address</label>
                <input type="text" />
              </div>

              <div className="inputBox">
                <label htmlFor="">full name</label>
                <input type="text" placeholder="Bruce wayne" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart