import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import brandOne from "../../assets/images/brand-01.png"
import brandTwo from "../../assets/images/brand-02.png"
import brandThree from "../../assets/images/brand-03.png"
import brandFour from "../../assets/images/brand-04.png"
import brandFive from "../../assets/images/brand-05.png"
import brandSix from "../../assets/images/brand-06.png"
import brandSeven from "../../assets/images/brand-07.png"
import brandEight from "../../assets/images/brand-08.png"

const SectionFour = () => {
  return (
    <ForthSection>
      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex align-items-center">
                 <div className="mx-4 w-25"><img src={brandOne} alt="brandLogo" /></div>
                 <div className="mx-4 w-25"><img src={brandTwo} alt="brandLogo" /></div>
                 <div className="mx-4 w-25"><img src={brandThree} alt="brandLogo" /></div>
                 <div className="mx-4 w-25"><img src={brandFour} alt="brandLogo" /></div>
                 <div className="mx-4 w-25"><img src={brandFive} alt="brandLogo" /></div>
                 <div className="mx-4 w-25"><img src={brandSix} alt="brandLogo" /></div>
                 <div className="mx-4 w-25"><img src={brandSeven} alt="brandLogo" /></div>
                 <div className="mx-4 w-25"><img src={brandEight} alt="brandLogo" /></div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ForthSection>
  );
};

const ForthSection = styled.div`
  width: 100%;
  height: 100%;
  background: var(--bg-grey);
  .card-wrapper {
    background: white;
    box-shadow: 0 0 10px #0000001a;
    padding: 1rem;
    border-radius: .5rem;
  }
`;
export default SectionFour;
