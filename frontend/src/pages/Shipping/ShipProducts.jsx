import React from "react";
import styled from "styled-components";
import productImG from "../../assets/images/tab.jpg";

const ShipProducts = () => {
  return (
    <ShipProd>
      <div className="img-page-container">
        <span className="amount">2</span>
        <div className="p-image">
          <img src={productImG} alt="prod-img" />
        </div>
        <p className="title mb-0">Samsung Tab 2024</p>
      </div>
      <p className="price mb-0">&#x20A6; 250,000</p>
    </ShipProd>
  );
};

const ShipProd = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 10.5vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-shadow: 0 4px 6px -2px #0000001a;
  padding-right:1rem;
  .img-page-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    position: relative;
    .amount {
      position: absolute;
      top: -0.4rem;
      left: 3rem;
      z-index: 10;
      background: var(--bg-two);
      color: white;
      width: 1.2rem;
      height: 1.2rem;
      font-size: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
    }
  }
  .p-image {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 0.5rem;
    border: 1px solid lightgrey;
    z-index: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: center;
    }
    overflow: hidden;
  }
`;
export default ShipProducts;
