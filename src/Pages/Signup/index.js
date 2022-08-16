import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import "./sign-up.css"

const Signup = () => {
  return (
    <section className="signup">
      <h4>Create a PIXIE account</h4>
      <div className="row">
        <form>
          <div className="flex-input">
            <input type="text"
            placeholder='First name' />
            <input type="text"
            placeholder='Last name' />
          </div>
          <div className="flex-input">
            <input type="email"
            placeholder='E-mail' />
            <input type="password"
            placeholder='Password' />
          </div>
          <div className='remember-me'>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" style={{ marginLeft: "0.5rem" }}>
              remember me
            </label>
          </div>
          <div className="btn-div">
            <Link to="/signup" className='btn login-btn'>
              create an account via e-mail
            </Link>
          </div>
          
          <button className='btn google-btn'>
            <span>
              <FcGoogle/>
            </span>
            register with google
          </button>
        </form>
      </div>
    </section>
  )
}

export default Signup;