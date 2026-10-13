import { Link } from "react-router-dom";
import "./OpenAccount.css";

const OpenAccount = () => {
  return (
    <section className="open-account">
      <div className="open-account-container">
        <h2>Open a Zerodha account</h2>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link to="/signup" className="open-account-btn">
          Sign up for free
        </Link>
      </div>
    </section>
  );
};

export default OpenAccount;