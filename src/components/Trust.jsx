import "./Trust.css";
import {Link} from 'react-router-dom';

const Trust = () => {
  return (
    <section className="trust">
        <div className="trust-container">
            <div className="trust-left">
                <h2 className="trust-heading">Trust with confidence</h2>

                <div className="trust-block">
                    <h2>Customer-first always</h2>
                    <p>
                        That's why 1.8+ crore customers trust Zerodha with ~₹9 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.
                    </p>
                </div>

                <div className="trust-block">
                    <h2>No spam or gimmicks</h2>
                    <p>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.
                    </p>
                </div>


                <div className="trust-block">
                    <h2>The Zerodha universe</h2>
                    <p>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>
                </div>

                <div className="trust-block">
                    <h2>Do better with money</h2>
                    <p>
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.


                    </p>
                </div>
            </div>
            <div className="trust-right">
                <img src="https://zerodha.com/static/images/ecosystem.png" alt="Zerodha ecosystem" className="trust-image"/>

                <div className="trust-links">
                    <Link to="/products" className="trust-cta">
                    Explore our products →</Link>
                    <a href="#" className="trust-cta">Try Kite demo →</a>
                </div>
            </div>
            
        </div>
    </section>
    
  );
};

export default Trust
