import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import { useGlobalContext } from '../../context';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const {cart, addCart} = useGlobalContext();
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={40}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="carousel-container"
  >
    {
      cart.map((item, index) => {
        const  {id, small, name, price} = item;
        return (
          <SwiperSlide className='carousel-box' key={index}>
          <div className="image">
            <img src={small} alt={name} />
          </div>
          <div className="box-text">
            <h5>{name}</h5>
            <h6>${price.toFixed(2)}</h6>
            <Link className='add-btn' to={`/${index}`}>
            details</Link>
            <Link to="/cart" className="add-btn" onClick={() => addCart(id)}>add to cart</Link>
          </div>
        </SwiperSlide>
        )
      })
    }
    </Swiper>
  )
}

export default Carousel