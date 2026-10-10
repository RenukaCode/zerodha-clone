import "./Hero.css";
import {Link} from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-container">
            <img src="https://zerodha.com/static/images/landing.svg" alt="Zerodha landing"
            className="hero-image" />

            <div className="hero-title">
                <h1>Invest in Everything</h1>
                <p className="hero-subtitle">
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>
                <Link to='/signup' className="hero-btn"> 
                Sign up for free
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero
