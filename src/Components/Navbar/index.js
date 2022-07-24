import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import {FaUser, FaShoppingCart, FaBars} from "react-icons/fa/index"
import headerLogo from  "../../assets/images/header-logo.png";
import "./navbar.css"
import { useGlobalContext } from '../../context';

const Navbar = () => {
  const { pathname } = useLocation();
  const {navbar, toggleNavbar, amount} = useGlobalContext()
  return (
    <nav>
      <div className="menu" onClick={toggleNavbar}>
        <FaBars />
      </div>
      <Link to="/">
        <img src={headerLogo} alt="header logo" />
      </Link>
      <div className={navbar ? "navbar active" : "navbar"}>
        <Link className={pathname === "/" ? "active" : ""} to="/">
          home
        </Link>
        <Link
          className={pathname === "/products" ? "active" : ""}
          to="/products">
          products
        </Link>
        <Link className={pathname === "/about" ? "active" : ""} to="/about">
          about us
        </Link>

        <Link
          className={pathname === "/contact" ? "active" : ""}
          to="/contact">
          contact us
        </Link>
      </div>
      <div className="nav-icons">
        <Link to="account">
          <FaUser className="icon" />
        </Link>
        <Link to="cart" className='cart-icon'>
          <FaShoppingCart className="icon" />
          <div className="cart-value">
            <p>{amount}</p>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar