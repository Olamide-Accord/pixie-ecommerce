import React from 'react';
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact">
      <div className="box-container">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>

        <form>
          <div className="inputBox">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
          </div>
          <div className="inputBox">
            <input type="number" placeholder="number" />
            <input type="text" placeholder="subject" />
          </div>
          <textarea placeholder="message" cols="30" rows="10"></textarea>
          <input type="submit" className="btn" value="send message" />
          <div className="gray-line"></div>
        </form>
      </div>
    </section>
  );
}

export default Contact