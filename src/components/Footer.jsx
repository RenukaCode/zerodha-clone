import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="Zerodha" className="logo-img" />
          </div>
          <p>2010 - 2024, Zerodha Broking Ltd.</p>
          <p>All rights reserved.</p>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/pricing">Pricing</Link>
          <a href="#">Referral programme</a>
          <a href="#">Careers</a>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <a href="#">Contact Us</a>
          <a href="#">Support portal</a>
          <a href="#">Z-Connect blog</a>
          <a href="#">List of charges</a>
          <a href="#">Downloads & resources</a>
        </div>

        <div className="footer-column">
          <h4>Account</h4>
          <Link to="/signup">Open an account</Link>
          <a href="#">Fund transfer</a>
        </div>
      </div>

      <div className="footer-legal">
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
          Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 –
          SEBI Registration no.: INZ000038238 Registered Address: Zerodha
          Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
          Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
          India. For any complaints pertaining to securities broking please
          write to complaints@zerodha.com, for DP related to dp@zerodha.com.
          Please ensure you carefully read the Risk Disclosure Document as
          prescribed by SEBI | ICF
        </p>

        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>

        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>

      </div>
    </footer>
  );
};

export default Footer;