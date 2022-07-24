import React from 'react';
import { features } from '../../data';
import "./featured.css"

const Featured = () => {
  return (
    <section className="featured">
      <div className="line"></div>
      <h2>featured items</h2>
      <div className="box-container">
        {
          features.map((item) => {
            const {id, img, name, price} = item;
            return <div className="box" key={id}>
              <div className="image">
                <img src={img} alt={name} />
              </div>
              <div className="box-text">
                <h5>{name}</h5>
                <h6>${price}</h6>
              </div>
            </div>
        })
        }
      </div>
    </section>
  )
}

export default Featured