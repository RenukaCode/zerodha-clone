import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <section className="pricing-hero">
        <h1>Pricing</h1>
        <p>Free equity investments and flat ₹20 intraday and F&O trades</p>
      </section>

      <section className="pricing-cards">
        <div className="pricing-card">
          <h2>₹0</h2>
          <h3>Free equity delivery</h3>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free —
            ₹0 brokerage.
          </p>
        </div>

        <div className="pricing-card">
          <h2>₹20</h2>
          <h3>Intraday and F&O trades</h3>
          <p>
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>

        <div className="pricing-card">
          <h2>₹0</h2>
          <h3>Free direct MF</h3>
          <p>
            All direct mutual fund investments are absolutely free — ₹0
            commissions & DP charges.
          </p>
        </div>
      </section>

      <section className="pricing-charges">
        <h2>Charges for other segments</h2>

        <ul className="charges-list">
          <li>
            Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
            GST per order.
          </li>
          <li>Digital contract notes will be sent via e-mail.</li>
          <li>
            Physical copies of contract notes, if required, shall be charged
            ₹20 per contract note. Courier charges apply.
          </li>
          <li>
            For NRI account (non-PIS), 0.5% or ₹100 per executed order for
            equity (whichever is lower).
          </li>
          <li>
            For NRI account (PIS), 0.5% or ₹200 per executed order for equity
            (whichever is lower).
          </li>
          <li>
            If the account is in debit balance, any order placed will be
            charged ₹40 per executed order instead of ₹20 per executed order.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Pricing;