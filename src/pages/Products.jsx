import "./Products.css";

const Products = () => {
  return (
    <div className="products">
      <section className="products-hero">
        <h1>Products</h1>
        <p>Sleek, modern, and intuitive trading platforms</p>
      </section>

      <section className="product-block">
        <div className="product-container">
          <div className="product-text">
            <h2>Kite</h2>
            <p>
              Our ultra-fast flagship trading platform with streaming market
              data, advanced charts, an elegant UI, and more. Enjoy the Kite
              experience seamlessly on your Android and iOS devices.
            </p>
            <div className="product-links">
              <a href="#" className="product-link">Try Demo →</a>
              <a href="#" className="product-link">Learn More →</a>
            </div>
          </div>
          <div className="product-image">
            <img
              src="https://zerodha.com/static/images/kite3-dashboard.png"
              alt="Kite"
              className="product-img"
            />
          </div>
        </div>
      </section>

      <section className="product-block alternate">
        <div className="product-container">
          <div className="product-image">
            <img
              src="https://zerodha.com/static/images/products-console.png"
              alt="Console"
              className="product-img"
            />
          </div>
          <div className="product-text">
            <h2>Console</h2>
            <p>
              The central dashboard for your Zerodha account. Gain insights
              into your trades and investments with in-depth reports and
              visualisations.
            </p>
            <div className="product-links">
              <a href="#" className="product-link">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="product-block">
        <div className="product-container">
          <div className="product-text">
            <h2>Coin</h2>
            <p>
              Buy direct mutual funds online, commission-free, delivered
              directly to your Demat account. Enjoy the investment experience
              on your Android and iOS devices.
            </p>
            <div className="product-links">
              <a href="#" className="product-link">Try Demo →</a>
              <a href="#" className="product-link">Learn More →</a>
            </div>
          </div>
          <div className="product-image">
            <img
              src="https://zerodha.com/static/images/products-coin.png"
              alt="Coin"
              className="product-img"
            />
          </div>
        </div>
      </section>

      <section className="product-block alternate">
        <div className="product-container">
          <div className="product-image">
            <img
              src="https://zerodha.com/static/images/kite-trade/landing.svg"
              alt="Kite Connect"
              className="product-img"
            />
          </div>
          <div className="product-text">
            <h2>Kite Connect API</h2>
            <p>
              Build powerful trading platforms and experiences with our super
              simple HTTP/JSON APIs. If you are a startup, build your
              investment app and showcase it to our clientbase.
            </p>
            <div className="product-links">
              <a href="#" className="product-link">Kite Connect →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="product-block">
        <div className="product-container">
          <div className="product-text">
            <h2>Varsity mobile</h2>
            <p>
              An easy to grasp, collection of stock market lessons with
              in-depth coverage and illustrations. Content is broken down into
              bite-size cards to help you learn on the go.
            </p>
            <div className="product-links">
              <a href="#" className="product-link">Try Demo →</a>
              <a href="#" className="product-link">Learn More →</a>
            </div>
          </div>
          <div className="product-image">
            <img
              src="https://zerodha.com/static/images/varsity-products.svg"
              alt="Varsity"
              className="product-img"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;