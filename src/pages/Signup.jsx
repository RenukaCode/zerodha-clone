import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup-container">
        <h1>Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>

        <form className="signup-form">
          <input type="text" placeholder="Full name" className="signup-input" />
          <input type="email" placeholder="Email" className="signup-input" />
          <input type="tel" placeholder="Mobile number" className="signup-input" />
          <input type="password" placeholder="Password" className="signup-input" />

          <button type="submit" className="signup-btn">
            Create account
          </button>
        </form>

        <p className="signup-footer">
          Already have an account?{" "}
          <Link to="/login" className="signup-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;