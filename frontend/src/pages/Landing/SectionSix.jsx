import React, { useState } from "react";
import styled from "styled-components";
import FeaturedProduct from "../../components/FeaturedProduct";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { featuredProducts } from "../../assets/dummyData";

const SectionSix = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const productLength = featuredProducts.length;
  const handleNext = () => {
    setCurrentSlide(currentSlide === productLength - 5 ? 0 : currentSlide + 1);
  };

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? productLength - 5 : currentSlide - 1);
  };
  return (
    <SixthSection>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="col-12 d-flex align-items-center justify-content-between">
            <h3 className="section-heading">Featured Products</h3>
            <div className="featured-arrows d-flex align-items-center gap-4">
              <span onClick={handlePrev}>
                <FaArrowLeftLong />
              </span>
              <span onClick={handleNext}>
                <FaArrowRightLong />
              </span>
            </div>
          </div>
          <div className="featured-cards">
            {featuredProducts
              .slice(currentSlide, currentSlide + 5)
              .map((product) => (
                  <FeaturedProduct product={product} key={product.id} />
              ))}
            {/* <FeaturedProduct />
            <FeaturedProduct />
            <FeaturedProduct />
            <FeaturedProduct />
            <FeaturedProduct />
            <FeaturedProduct />
            <FeaturedProduct />
            <FeaturedProduct />
            <FeaturedProduct /> */}
          </div>
        </div>
      </section>
    </SixthSection>
  );
};
const SixthSection = styled.div`
  width: 100%;
  height: 100%;
  background: var(--bg-grey);
  .featured-arrows {
    span {
      color: var(--bg-two);
      opacity: 0.5;
      border: 2px solid var(--bg-two);
      font-size: 0.8rem;
      padding: 0rem 0.8rem;
      cursor: pointer;
      border-radius: 0.5rem;
      transition: var(--transition);
      &:hover {
        font-size: 1rem;
        transition: var(--transition);
      }
      &:active{
        background:var(--bg-logo);
      }
    }
  }
  .featured-cards {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export default SectionSix;
