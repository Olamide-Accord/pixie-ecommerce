import React from 'react';
import about from "../../assets/images/about-us.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn
} from "react-icons/fa/index";
import "./about-text.css";

const AboutText = () => {
  return (
    <div className="about-text">
      <div className="line"></div>
      <h2>about us</h2>
      <div className="box-container">
        <div className="image">
          <img src={about} alt="about us" />
        </div>
        <div className="about-box">
          <h4>Phasellus vel interdum elit</h4>
          <p>
            <span>Photo Credit</span> goes to Pexels website. Aliquam erat
            volutpat. Pellentesque fringilla, ligula consectetur cursus
            scelerisque, leo elit pellentesque sapien, et pharetra arcu elit
            vitae sem. Suspendisse erat dui, condimentum in mi ac, varius tempor
            sapien. Donec in justo sit amet ex aliquet maximus ac quis erat.
          </p>
          <p>
            Donec fermentum tincidunt tellus quis fermentum. Proin eget
            imperdiet purus. Nulla facilisi. Aliquam tincidunt porttitor dui sed
            euismod. Duis est libero, rhoncus fermentum turpis id, tempus
            fringilla ipsum. Nullam venenatis tincidunt neque vel hendrerit.
            Suspendisse porta pretium porttitor.
          </p>
          <p>
            Sed purus quam, ultricies eu leo in, sollicitudin varius quam. Proin
            dictum urna ac diam fermentum tempus. Pellentesque urna urna,
            ullamcorper a tincidunt dignissim, venenatis in nisi. Vivamus in
            volutpat tellus. Etiam fermentum luctus posuere.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            reiciendis porro aspernatur, quod pariatur id nisi, quasi neque
            iusto deleniti adipisci. Saepe ratione tempore at. Nihil id facere
            odio a!
          </p>
          <div className="about-flex">
            <p>Find us at:</p>
            <div className="about-icons">
              <div className="icon-box">
                <FaFacebookF className="icon" />
              </div>
              <div className="icon-box">
                <FaTwitter className="icon" />
              </div>
              <div className="icon-box">
                <FaLinkedinIn className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutText