import React from 'react';
import "./featured.css"
import { useGlobalContext } from '../../context';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ background: "blue", color: "white" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", background: "blue", color: "white" }}
      onClick={onClick}
    />
  );
}

const Featured = () => {
  const {cart, addCart} = useGlobalContext();

  let settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    swipe: true,
    swipeToSlide: true,
    accessibilty: true,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="featured">
      <div className="line"></div>
      <h2>featured items</h2>
      <Slider>
        {
          cart.map((item, index) => {
            const {id, small, name, price} = item;
            return <div key={index} className="box">
              <div className="image">
                <img src={small} alt={name} />
              </div>
              <div className="box-text">
                <h5>{name}</h5>
                <h6>${price.toFixed(2)}</h6>
                <Link className='add-btn' to={`/${id}`}>
                details</Link>
                <Link to="/cart" className="add-btn" onClick={() => addCart(id)}>add to cart</Link>
              </div>
            </div>
            
        })
        }
      </Slider>
    </section>
  )
}

export default Featured