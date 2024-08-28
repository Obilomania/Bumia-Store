import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

const CompareProductCard = ({ prod }) => {
  return (
    <CompareCard>
      <div className="compare-image">
        <img src={prod.mainImage} alt="eosImg" />
        <span className="close">
          <IoClose />
        </span>
      </div>
      <div className="compare-content">
        <p className="compare-heading">{prod.name}</p>
        <p className="compare-price">&#x20A6; {prod.price}</p>
        <p className="compare-info">
                  Brand : <span>{prod.brand}</span>
        </p>
        <p className="compare-info">
          Type : <span>Phone</span>
        </p>
        <p className="compare-info">
          SKU : <span>SKU2024</span>
        </p>
        <p className="compare-info">
          Availability : <span>In Stock</span>
        </p>
        <div className="color">
          <p>Color: </p>
          <div className="color-content">
            <span className="black"></span>
            <span className="blue"></span>
            <span className="red"></span>
          </div>
        </div>
        <p className="compare-info">
          Size : <span>S M L</span>
        </p>
      </div>
    </CompareCard>
  );
};

const CompareCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 0.5rem;
  padding: 0rem;
  box-shadow: 0 0 10px #0000001a;
  position: relative;
  .compare-image {
    position: relative;
    width: 100%;
    height: 15rem;
    overflow: hidden;
    padding:2rem;
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      object-fit: center;
    }
    span {
      position: absolute;
      z-index: 5;
      top: 0rem;
      right: .5rem;
      font-size: 1.5rem;
      background: rgba(255, 255, 255, 0.5);
      padding: 0.5rem;
      cursor:pointer;
    }
  }
  .compare-content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    background: var(--bg-grey);
    .compare-heading {
      font-size: 1rem;
    }
    .compare-price {
      width: 100%;
      font-size: 0.8rem;
      color: red;
      border-bottom: 1px solid var(--bg-two);
      padding-bottom: 0.5rem;
    }
    p {
      width: 100%;
      margin-bottom: 0;
      border-bottom: 1px solid var(--bg-two);
      font-weight: 600;
      font-size: 0.8rem;
      padding-bottom: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        font-weight: 400;
        opacity: 0.7;
        font-size: 0.7rem;
        letter-spacing: 1px;
      }
    }
    .color {
      padding-bottom: 0rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--bg-two);
      p {
        border-bottom: 0px solid var(--bg-two);
      }
      .color-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        opacity: 0.8;
        .red {
          width: 1rem;
          height: 1rem;
          background: red;
          border-radius: 100%;
        }
        .black {
          width: 1rem;
          height: 1rem;
          background: black;
          border-radius: 100%;
        }
        .blue {
          width: 1rem;
          height: 1rem;
          background: blue;
          border-radius: 100%;
        }
      }
    }
  }
`;
export default CompareProductCard;
