import React from "react";
import styled from "styled-components";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";
import { featuredProducts, specialProducts } from "../../assets/dummyData";
import SpecialProductCard from "../../components/SpecialProductCard";

const SectionSeven = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const productLength = featuredProducts.length;
  const handleNext = () => {
    setCurrentSlide(currentSlide === productLength - 6 ? 0 : currentSlide + 1);
  };

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? productLength - 6 : currentSlide - 1);
  };
  return (
    <SeventhSection>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="page-container">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-between mb-3">
              <h3 className="section-heading">Special Products</h3>
              <div className="special-product-arrows d-flex align-items-center gap-4 ">
                <span onClick={handlePrev}>
                  <FaArrowLeftLong />
                </span>
                <span onClick={handleNext}>
                  <FaArrowRightLong />
                </span>
              </div>
            </div>
            <div className="special-product-cards">
              {specialProducts
                .slice(currentSlide, currentSlide + 6)
                .map((product) => (
                  <SpecialProductCard product={product} key={product.id} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </SeventhSection>
  );
};

const SeventhSection = styled.div`
  width: 100%;
  height: 100%;
  background: var(--bg-grey);
  .special-product-arrows {
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
      &:active {
        background: var(--bg-logo);
      }
    }
  }
  .special-product-cards {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap:wrap;
    gap: 1.3rem;
  }
`;
export default SectionSeven;
