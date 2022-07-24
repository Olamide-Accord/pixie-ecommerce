import React from 'react'
import headerLogo from "../../assets/images/header-logo.png";
import {Link} from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa/index";
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <Link to="/">
          <img src={headerLogo} alt="footer" />
        </Link>
      </div>
      <div className="footer-links">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">help</a>
        </li>
        <li>
          <a href="#">privacy policy</a>
        </li>
        <li>
          <a href="#">how it works?</a>
        </li>
        <li>
          <a href="#">contact us</a>
        </li>
      </div>
      <div className="footer-icons">
        <div className="icon-box">
          <FaFacebookF className="icon" />
        </div>
        <div className="icon-box">
          <FaTwitter className="icon" />
        </div>
        <div className="icon-box">
          <FaLinkedinIn className="icon" />
        </div>
        <div className="icon-box">
          <FaInstagram className="icon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer