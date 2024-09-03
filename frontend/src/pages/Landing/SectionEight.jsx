import React from "react";
import styled from "styled-components";
import { featuredProducts } from "../../assets/dummyData";

const SectionEight = () => {
  return (
    <EightSection>
      <div className="page-container py-5 nameless-cards">
        {featuredProducts.slice(8, 12).map((product) => (
          <div className="nameless-card " key={product.id}>
            <div className="nameless-content">
              <p className="nameless-brand mb-0">{product.brand}</p>
              <h6 className="nameless-heading mb-0">{product.name}</h6>
              <p className="nameless-desc mb-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste,
                ipsam!
              </p>
            </div>
            <div className="overlay"></div>
            <img src={product.image} alt="" />
            <button>VISIT STORE</button>
          </div>
        ))}
      </div>
    </EightSection>
  );
};

const EightSection = styled.div`
  width: 100%;
  height: 100%;
  background: var(--bg-grey);
  padding: 0rem 8rem;
  .nameless-cards {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .nameless-card {
      border-radius: 0.5rem;
      box-shadow: 0 0 10px #0000001a;
      width: calc(100% / 4.2);
      height: 35vh;
      padding: 1rem;
      overflow: hidden;
      background: white;
      position: relative;
      .nameless-content {
        position: absolute;
        width: 100%;
        top: 0;
        left: -100rem;
        display: flex;
        z-index: 3;
        color: white;
        padding: 1rem;
        transition: 600ms all ease;
      }
      button {
        position: absolute;
        bottom: -100%;
        left: 50%;
        transform: translate(-50%, -10%);
        border: none;
        color: white;
        background: var(--bg-logo2);
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        transition: 600ms all ease;
        opacity: 0.5;
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 0;
      }
      .overlay {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        position: absolute;
        right: -100rem;
        top: 0;
        z-index: 1;
        transition: var(--transition);
      }
      &:hover {
        button {
          position: absolute;
          bottom: 10%;
          left: 50%;
          transform: translate(-50%, -10%);
          border: none;
          color: white;
          background: var(--bg-logo2);
          padding: 0.5rem 1rem;
          z-index: 3;
          border-radius: 1rem;
          transition: 600ms all ease;
          opacity: 1;
        }
        .nameless-content {
          position: absolute;
          display: flex;
          transition: 600ms all ease;
          align-items: start;
          justify-content: start;
          flex-direction: column;
          gap: 0.5rem;
          top: 0;
          left: 0;
          z-index: 3;
          color: white;
          padding: 5rem 1rem 1rem 1rem;
          .nameless-brand {
            text-transform: uppercase;
            font-size: 0.8rem;
            color: var(--bg-logo2);
            font-weight: 500;
          }

          .nameless-heading {
            font-size: 1.2rem;
            text-transform: uppercase;
          }
          .nameless-desc {
            font-size: 0.8rem;
          }
        }
        .overlay {
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          position: absolute;
          right: 0rem;
          top: 0;
          z-index: 1;
          transition: var(--transition);
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
  @media screen and (max-width: 420px) {
    display: none;
  }
  @media screen and (max-width: 350px) {
    display: none;
  }
`;
export default SectionEight;
