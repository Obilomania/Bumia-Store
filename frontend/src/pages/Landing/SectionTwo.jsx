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
      <section className="home-wrapper-1 p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services-container d-flex align-items-center justify-content-between">
                <div className="one-service d-flex align-items-center gap-3">
                  <img src={shippingIcon} alt="shippingIcon" />
                  <div className="one-service-content">
                    <h6 className="mb-0">Free Shipping</h6>
                    <p className="mb-0">For all bulk purchases</p>
                  </div>
                </div>
                <div className="one-service d-flex align-items-center gap-3">
                  <img src={service2Icon} alt="shippingIcon" />
                  <div className="one-service-content">
                    <h6 className="mb-0">Daily Suprise Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="one-service d-flex align-items-center gap-3">
                  <img src={service3Icon} alt="shippingIcon" />
                  <div className="one-service-content">
                    <h6 className="mb-0">Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="one-service d-flex align-items-center gap-3">
                  <img src={service4Icon} alt="shippingIcon" />
                  <div className="one-service-content">
                    <h6 className="mb-0">Affordable Prices</h6>
                    <p className="mb-0">Get Factory Price.</p>
                  </div>
                </div>
                <div className="one-service d-flex align-items-center gap-3">
                  <img src={service5Icon} alt="shippingIcon" />
                  <div className="one-service-content">
                    <h6 className="mb-0">Secure Payments</h6>
                    <p className="mb-0">100% Protected Payment Method</p>
                  </div>
                </div>
              </div>
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
  .one-service{
    img{
      width:1.8rem;
    }
    h6{
      font-size:.8rem;
    }
    p{
      font-size:.8rem;
    }
  }
`;
export default SectionTwo;
