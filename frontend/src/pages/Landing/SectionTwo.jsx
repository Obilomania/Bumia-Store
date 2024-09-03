import React from "react";
import styled from "styled-components";
import shippingIcon from "../../assets/images/service.png";
import service2Icon from "../../assets/images/service-02.png";
import service3Icon from "../../assets/images/service-02.png";
import service4Icon from "../../assets/images/service-04.png";
import service5Icon from "../../assets/images/service-05.png";

const SectionTwo = () => {
  return (
    <SecondSection>
      <section className="">
        <div className="the-container">
          <div className="one-service">
            <img src={shippingIcon} alt="shippingIcon" />
            <div className="one-service-content">
              <h6 className="mb-0">Free Shipping</h6>
              <p className="mb-0">For all bulk purchases</p>
            </div>
          </div>
          <div className="one-service ">
            <img src={service2Icon} alt="shippingIcon" />
            <div className="one-service-content">
              <h6 className="mb-0">Daily Suprise Offers</h6>
              <p className="mb-0">Save upto 25% off</p>
            </div>
          </div>
          <div className="one-service">
            <img src={service3Icon} alt="shippingIcon" />
            <div className="one-service-content">
              <h6 className="mb-0">Support 24/7</h6>
              <p className="mb-0">Shop with an expert</p>
            </div>
          </div>
          <div className="one-service">
            <img src={service4Icon} alt="shippingIcon" />
            <div className="one-service-content">
              <h6 className="mb-0">Affordable Prices</h6>
              <p className="mb-0">Get Factory Price.</p>
            </div>
          </div>
          <div className="one-service ">
            <img src={service5Icon} alt="shippingIcon" />
            <div className="one-service-content">
              <h6 className="mb-0">Secure Payments</h6>
              <p className="mb-0">100% Protected Payment Method</p>
            </div>
          </div>
        </div>
      </section>
    </SecondSection>
  );
};

const SecondSection = styled.div`
  width: 100%;
  height: 100%;
  background: var(--bg-grey);
  padding: 2rem 8rem;

  .the-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .one-service {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    img {
      width: 1.8rem;
    }
    h6 {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100%;
    background: var(--bg-grey);
    padding: 1rem;

    .the-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .one-service {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: .5rem;
      img {
        width: 1.8rem;
      }
      h6 {
        font-size: 0.8rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    height: 100%;
    background: var(--bg-grey);
    padding: 2rem 1rem;

    .the-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .one-service {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 0.5rem;
      width: 17%;
      img {
        width: 1.8rem;
      }
      h6 {
        font-size: 0.8rem;
        text-align: center;
      }
      p {
        height: 2rem;
        font-size: 0.8rem;
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    background: var(--bg-grey);
    padding: 2rem 1rem;

    .the-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .one-service {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      width: 18%;
      img {
        width: 1.8rem;
      }
      h6 {
        font-size: 0.8rem;
        text-align: center;
        height: 3rem;
      }
      p {
        height: 2rem;
        font-size: 0.6rem;
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 420px) {
  }
  @media screen and (max-width: 350px) {
  }
`;
export default SectionTwo;
