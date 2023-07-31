import { useEffect } from "react";
import "./Main.sass";
import Form from "../components/Form";
import ShorterUrls from "../components/ShorterUrls";
import { GlobalContextType, useGlobalContext } from "../context/Context";

function Main() {
  const { accordion, shortUrls } = useGlobalContext() as GlobalContextType;

  useEffect(() => {
    localStorage.setItem("shortUrls", JSON.stringify(shortUrls));
  }, [shortUrls]);
  return (
    <div className="main" role="main">
      <div className="main__top">
        <Form />
        <div className="main__helper">
          <div className={`main__img ${accordion ? "hidden" : ""}`}>
            <img
              src="../src/assets/images/illustration-working.svg"
              alt="Worker at Pc"
            />
          </div>
          <div className="main__description">
            <div className="slogan">
              <h2>More than just shorter links</h2>
              <p>
                Build your brand’s recognition and get detailed insights on how
                your links are performing.
              </p>
              <button className="btn">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="main__middle">
        <ShorterUrls />
        <div className="statistics">
          <h3>Advanced Statistics</h3>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="statistics__items">
          <div className="brand card">
            <span className="brand__icon icon"></span>
            <h3> Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <span className="nexo"></span>
          <div className="records card">
            <span className="records__icon icon"></span>
            <h3> Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <span className="nexo"></span>
          <div className="customizable card">
            <span className="customizable__icon icon"></span>
            <h3> Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
      <div className="main__feet">
        <h3>Boost your links today</h3>
        <button className="btn">Get Started</button>
      </div>
    </div>
  );
}

export default Main;
