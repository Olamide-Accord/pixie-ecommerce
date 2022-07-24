import React from 'react';
import "./subscribe.css"

const Subscribe = () => {
  
  return (
    <section className="subscribe">
      <div className="content">
        <div className="subscribe-header">
          <h2>Subscribe on PIXIE now</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi accusamus sint enim quia aperiam excepturi dignissimos blanditiis at, modi ipsum ipsam quibusdam cumque nemo reiciendis
          </p>
        </div>

        <form>
          <input
            type="text"
            placeholder="your email..."
            className="sub-email"
          />
          <input type="submit" value="subscribe now!" className="btn sub-btn" />
        </form>
      </div>
    </section>
  );
}

export default Subscribe