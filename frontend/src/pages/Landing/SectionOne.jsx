import React from "react";
import styled from "styled-components";
import mainBannerIMG from "../../assets/images/main-banner-1.jpg";
import smallBannerOneIMG from "../../assets/images/catbanner-01.jpg";
import smallBannerTwoIMG from "../../assets/images/catbanner-02.jpg";
import smallBannerThreeIMG from "../../assets/images/catbanner-03.jpg";
import smallBannerFourIMG from "../../assets/images/catbanner-04.jpg";
import { Link } from "react-router-dom";

const SectionOne = () => {
  return (
    <FirstSection>
      <section className="home-wrapper-1 p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner p-3 position-relative">
                <img
                  src={mainBannerIMG}
                  alt="mainBannerImg"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content">
                  <h6>AUTHENTICITY AT ITS PEAK</h6>
                  <h2>Samsung Fold</h2>
                  <p>
                    {" "}
                    From &#x20A6;200,000, <br />
                    Payment In Installments
                  </p>
                  <Link to={"/"}>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-0 justify-content-between align-items-center">
                <div className="small-banner p-3 position-relative">
                  <img
                    src={smallBannerOneIMG}
                    alt="smallBannerImg"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content">
                    <h6>AWOOF BEREKETE</h6>
                    <h2>Computers</h2>
                    <p>
                      {" "}
                      From &#x20A6;200,000, <br />@ &#x20A6;30,000/month
                    </p>
                    {/* <Link to={"/"}>BUY NOW</Link> */}
                  </div>
                </div>
                <div className="small-banner p-3 position-relative">
                  <img
                    src={smallBannerTwoIMG}
                    alt="smallBannerImg"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content">
                    <h6>SLEEK ACCESSORIES</h6>
                    <h2>Watches</h2>
                    <p>
                      {" "}
                      From &#x20A6;200,000, <br />@ &#x20A6;30,000/month
                    </p>
                    {/* <Link to={"/"}>BUY NOW</Link> */}
                  </div>
                </div>
                <div className="small-banner p-3 position-relative">
                  <img
                    src={smallBannerThreeIMG}
                    alt="smallBannerImg"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content">
                    <h6>SLEEK TABLET</h6>
                    <h2>iPads/Tablets</h2>
                    <p>
                      {" "}
                      From &#x20A6;200,000, <br />@ &#x20A6;30,000/month
                    </p>
                    {/* <Link to={"/"}>BUY NOW</Link> */}
                  </div>
                </div>
                <div className="small-banner p-3 position-relative">
                  <img
                    src={smallBannerFourIMG}
                    alt="smallBannerImg"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content">
                    <h6>HEAD PHONE</h6>
                    <h2>AirPod Max</h2>
                    <p>
                      {" "}
                      From &#x20A6;200,000, <br />@ &#x20A6;30,000/month
                    </p>
                    {/* <Link to={"/"}>BUY NOW</Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FirstSection>
  );
};

const FirstSection = styled.div`
  width: 100%;
  height: 100%;
  .main-banner-content {
    position: absolute;
    top: 20%;
    left: 5%;
    h6 {
      color: var(--bg-logo2);
    }
    h2 {
      font-weight: 600;
      font-size: 2.5rem;
      color: var(--bg-three);
    }
    p {
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.2rem;
      color: var(--bg-three);
    }
    a {
      color: white;
      background: var(--bg-one);
      font-size: 0.8rem;
      padding: 0.5rem 1.5rem;
      border-radius: 1rem;
      transition: var(--transition);
      &:hover {
        background: var(--bg-two);
        transition: var(--transition);
      }
    }
  }
  .small-banner{
    width:49%;
  }
  .small-banner-content {
    position: absolute;
    top: 25%;
    left: 10%;
    h6 {
      color: var(--bg-logo2);
      font-size:.8rem;
    }
    h2 {
      font-weight: 600;
      font-size: 1.2rem;
      color: var(--bg-three);
    }
    p {
      font-size: .8rem;
      font-weight: 500;
      line-height: 1rem;
      color: var(--bg-three);
    }
  }
`;
export default SectionOne;
