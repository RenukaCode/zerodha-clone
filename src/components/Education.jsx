import "./Education.css";

const Education = () => {
  return (
    <section className="education">
      <div className="education-container">
        <div className="education-left">
          <img
            src="https://zerodha.com/static/images/index-education.svg"
            alt="Varsity education"
            className="education-image"
          />
        </div>

        <div className="education-right">
          <h2>Free and open market education</h2>

          <div className="education-block">
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="#" className="education-link">
              Varsity →
            </a>
          </div>

          <div className="education-block">
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="#" className="education-link">
              TradingQ&A →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;