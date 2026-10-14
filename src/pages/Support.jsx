import "./Support.css";

const Support = () => {
  return (
    <div className="support">
      <section className="support-hero">
        <div className="support-hero-container">
          <h1>Support Portal</h1>

          <div className="support-hero-content">
            <div className="support-hero-left">
              <h2>Search for an answer or browse help topics to create a ticket</h2>

              <input
                type="text"
                placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
                className="support-search"
              />

              <div className="support-quick-links">
                <a href="#">Track account opening</a>
                <a href="#">Track segment activation</a>
                <a href="#">Intraday margins</a>
                <a href="#">Kite user manual</a>
              </div>
            </div>

            <div className="support-hero-right">
              <h3>Featured</h3>
              <ol>
                <li><a href="#">Current Buybacks - August 2024</a></li>
                <li><a href="#">Offer for sale (OFS) - August 2024</a></li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="support-topics">
        <div className="support-topics-container">
          <h2>To create a ticket, select a relevant topic</h2>

          <div className="support-grid">
            <div className="support-column">
              <h3>Account Opening</h3>
              <a href="#">Getting started</a>
              <a href="#">Online</a>
              <a href="#">Offline</a>
              <a href="#">Charges</a>
              <a href="#">Company, Partnership and HUF</a>
              <a href="#">Non Resident Indian (NRI)</a>
            </div>

            <div className="support-column">
              <h3>Your Zerodha Account</h3>
              <a href="#">Login credentials</a>
              <a href="#">Your Profile</a>
              <a href="#">Account modification and segment addition</a>
              <a href="#">DP ID and bank details</a>
              <a href="#">Transfer and conversion of shares</a>
            </div>

            <div className="support-column">
              <h3>Trading and Markets</h3>
              <a href="#">Trading FAQs</a>
              <a href="#">Corporate actions</a>
              <a href="#">Kite features</a>
            </div>

            <div className="support-column">
              <h3>Funds</h3>
              <a href="#">Fund withdrawal</a>
              <a href="#">Adding funds</a>
              <a href="#">Adding bank accounts</a>
              <a href="#">eMandates</a>
            </div>

            <div className="support-column">
              <h3>Console</h3>
              <a href="#">IPO</a>
              <a href="#">Portfolio</a>
              <a href="#">Funds statement</a>
              <a href="#">Profile</a>
              <a href="#">Reports</a>
              <a href="#">Referral program</a>
            </div>

            <div className="support-column">
              <h3>Coin</h3>
              <a href="#">Understanding mutual funds and Coin</a>
              <a href="#">Coin app</a>
              <a href="#">Coin web</a>
              <a href="#">Transactions and reports</a>
              <a href="#">National Pension Scheme (NPS)</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;