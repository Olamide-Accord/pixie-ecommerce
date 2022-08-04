import React from 'react';
import Carousel from '../Carousel';
import "./featured.css"

const Featured = () => {
  
  return (
    <section className="featured">
      <div className="line"></div>
      <h2>featured items</h2>
        <Carousel/>

    </section>
  )
}

export default Featured