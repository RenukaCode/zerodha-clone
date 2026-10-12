import "./Stats.css";

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stats-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="stats-image"
            style={{ maxWidth: "250px", width: "100%", height: "auto" }}
            >
            <path
                fill="#ffc107"
                d="M18 2H6v2H2v4c0 2.21 1.79 4 4 4h.28c.9 2.05 2.72 3.51 4.72 3.89V18H8v2h8v-2h-3v-2.11c2-.38 3.82-1.84 4.72-3.89H18c2.21 0 4-1.79 4-4V4h-4V2zM4 8V6h2v4H4zm14 2V6h2v2c0 1.1-.9 2-2 2zM12 12c-1.66 0-3-1.34-3-3V4h6v5c0 1.66-1.34 3-3 3z"
            />
         </svg>
        </div>
        <div className="stats-right">
          <h2>Largest stock broker in India</h2>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <ul className="stats-list">
            <li>Futures and Options</li>
            <li>Stocks & IPOs</li>
            <li>Commodity derivates</li>
            <li>Direct mutual funds</li>
            <li>Currency derivates</li>
            <li>Bonds and Govt. Securities</li>
          </ul>

          <img
            src="https://zerodha.com/static/images/press-logos.png"
            alt="Press logos"
            className="press-logos"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;