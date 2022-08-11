import React from 'react';
import {GrMail} from "react-icons/gr/index";
import {FcGoogle} from "react-icons/fc/index"
import './account.css'
import { Link } from 'react-router-dom';

const Account = () => {
  return (
    <section className="account">
      <div className="row">
        <div className="account-col">
          <h4>login</h4>
          <form>
            <div className="input-div">
              <input 
                type="email"
                placeholder='E-mail' 
              />
            </div>
            <div className="input-div">
              <input 
                type="password"
                placeholder='Password' 
              />
            </div>
            <div className="login-flex">
              <div className='remember-me'>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" style={{ marginLeft: "0.5rem" }}>
                  remember me
                </label>
              </div>
              <a href="#">Forgot your password?</a>
            </div>
            <button className='btn login-btn'>
              <span>
                <GrMail/>
              </span>
              login
            </button>
            <button className='btn google-btn'>
              <span>
                <FcGoogle/>
              </span>
              login with google
            </button>
          </form>
        </div>
        <div className="account-col">
          <h4>create your pixie account</h4>
          <p>
          Create your PIXIE customer account in just a few clicks! You can register either using your e-mail address or through your Facebook account.
          </p>
          <Link to="/sign-up" className='btn login-btn'>
              <span>
                <GrMail/>
              </span>
              create an account via e-mail
            </Link>
            <button className='btn google-btn'>
              <span>
                <FcGoogle/>
              </span>
              register with google
            </button>
        </div>
      </div>
    </section>
  )
}

export default Account