import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import NavProductCard from "../NavProductCard";
import { featuredProducts } from "../../assets/dummyData";

const SpecialDropdown = ({ specialHover, setSpecialHover }) => {
     const HoverSpecialEnter = () => {
       setSpecialHover(true);
     };
     const HoverSpecialLeave = () => {
       setSpecialHover(false);
     };
  const [currentSlide, setCurrentSlide] = useState(0);
  const productLength = featuredProducts.length;
  const handleNext = () => {
    setCurrentSlide(currentSlide === productLength - 6 ? 0 : currentSlide + 1);
  };

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? productLength - 6 : currentSlide - 1);
  };
 
  return (
    <SpecialMenu>
      <div
        className={specialHover ? "open-special" : "close-special"}
        onMouseEnter={HoverSpecialEnter}
        onMouseLeave={HoverSpecialLeave}
      >
        <p className="small-heading text-center">Special</p>
        <div className="special-cards">
          <div className="left-arrow" onClick={handlePrev}>
            <FaAngleLeft />
          </div>
          <div className="right-arrow" onClick={handleNext}>
            <FaAngleRight />
          </div>
          <div className="special-card">
            {featuredProducts
              .slice(currentSlide, currentSlide + 6)
              .map((product) => (
                <NavProductCard product={product} key={product.id} />
              ))}
          </div>
        </div>
      </div>
    </SpecialMenu>
  );
};

const SpecialMenu = styled.div`
  .open-special {
    width: 100%;
    /* min-height: 40vh; */
    height: fit-content;
    box-shadow: 0 0 10px #0000001a;
    border-radius: 0.3rem;
    padding: 2rem 1.5rem;
    color: var(--bg-one);
    background-color: var(--bg-grey);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    .special-cards {
      width: 100%;
      position: relative;
      .special-card {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  .left-arrow {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 10;
    background: var(--bg-logo);
    padding: 0.8rem;
    border-radius: 100%;
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      background: var(--bg-one);
      color: white;
      transition: var(--transition);
    }
  }
  .right-arrow {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 10;
    background: var(--bg-logo);
    padding: 0.8rem;
    border-radius: 100%;
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      background: var(--bg-one);
      color: white;
      transition: var(--transition);
    }
  }
  .close-special {
    display: none;
  }
`;
export default SpecialDropdown;
