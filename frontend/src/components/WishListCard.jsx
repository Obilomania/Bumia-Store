import React from "react";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";

const WishListCard = ({ prod }) => {
  return (
    <WishCard>
      <div className="compare-image">
        <img src={prod.mainImage} alt="eosImg" />
        <span className="close">
          <IoClose />
        </span>
      </div>
      <div className="compare-content">
        <p className="compare-heading">{prod.name}</p>
        <p className="compare-price">&#x20A6; {prod.price}</p>
      </div>
    </WishCard>
  );
};

const WishCard = styled.div`
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
    padding: 2rem;
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
      right: 0.5rem;
      font-size: 1.5rem;
      background: rgba(255, 255, 255, 0.5);
      padding: 0.5rem;
      cursor: pointer;
    }
  }
  .compare-content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 0rem;
    width: 100%;
    background: var(--bg-grey);
    .compare-heading {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0;
    }
    .compare-price {
      width: 100%;
      font-size: 0.8rem;
      color: red;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
  }
`;
export default WishListCard;
