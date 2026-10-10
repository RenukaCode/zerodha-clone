import React from 'react';
import logo from "../assets/logo.svg";
import {Link} from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='footer-brand'>
                <div className='footer-logo'>
                    <img src={logo} alt="Zerodha" className='logo-img' />
                </div>
                <p> 2010 - 2024, Zerodha Broking Ltd.</p>
                <p>All rights reserved.</p>
            </div>

            <div className='footer-column'>
                <h4>Company</h4>
                <Link to="/about">About</Link>
                <Link to="/products">Products</Link>
                <Link to="/pricing">Pricing</Link>
                <a href="#">Referral programme</a>
                <a href="#">Careers</a>
            </div>

            <div className='footer-column'>
                <h4>Support</h4>
                <a href="#">Contact Us</a>
                <a href="#">Support portal</a>
                <a href="#">Z-Connect blog</a>
                <a href="#">List of charges</a>
                <a href="#">Downloads & resources</a>
            </div>

            <div className='footer-column'>
                <h4>Account</h4>
                <Link to ="/signup">Open an account</Link>
                <a href="#">Fund transfer</a>
            </div>
        </div>
    </footer>
  );
}

export default Footer
