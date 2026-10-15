import "./About.css";
import founderImg from "../assets/founder.png";

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-hero-container">
          <h1>
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h1>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-container">
          <div className="about-story-left">
            <p>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p>
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p>
              Over 1+ Crore clients place millions of orders every day through
              our powerful ecosystem of investment platforms, contributing over
              15% of all Indian retail trading volumes.
            </p>
          </div>

          <div className="about-story-right">
            <p>
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and
              investors.
            </p>
            <p>
              <a href="#" className="about-link">
                Rainmatter
              </a>
              , our fintech fund and incubator, has invested in several fintech
              startups with the goal of growing the Indian capital markets.
            </p>
            <p>
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is{" "}
              <a href="#" className="about-link">
                saying about us
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="about-team-container">
          <h2>People</h2>

          <div className="about-team-grid">
            <div className="team-photo-wrapper">
              <img
                src={founderImg}
                alt="Founder"
                className="team-photo"
              />
              <h3>Renuka Bonam</h3>
              <p>Founder, CEO</p>
            </div>

            <div className="about-team-bio">
              <p>
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                hurdles he faced during his decade long stint as a trader.
                Today, Zerodha has changed the landscape of the Indian broking
                industry.
              </p>
              <p>
                He is a member of the SEBI Secondary Market Advisory Committee
                (SMAC) and the Market Data Advisory Committee (MDAC).
              </p>
              <p>Playing basketball is his zen.</p>
              <p>
                Connect on{" "}
                <a href="#" className="about-link">
                  Homepage
                </a>{" "}
                /{" "}
                <a href="#" className="about-link">
                  TradingQnA
                </a>{" "}
                /{" "}
                <a href="#" className="about-link">
                  Twitter
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;