import React from "react";
import styled from "styled-components";
import productIMG from "../assets/images/tab.jpg";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

const TheProductCart = ({ pushToCart }) => {
  return (
    <CartPopUp>
      <div className="overlay"></div>
      <div className="the-cart-overlay-content">
        <div className="content-info">
          <div className="image">
            <img src={productIMG} alt="prod-img" />
          </div>
          <div className="info-info">
            <p className="info-head">Samsung Tablet 2024</p>
            <p className="info-quantity">
              Quantity : <span>2</span>
            </p>
            <p className="info-quantity">
              Size : <span>S</span>
            </p>
            <p className="info-quantity">
              Color : <span>Red</span>
            </p>
          </div>
        </div>
        <div className="info-buttons">
          <button>View My Cart (2)</button>
          <button>Check Out</button>
        </div>
        <Link to={"/our-store"} className="info-continue">
          Continue Shopping
        </Link>
        <div className="info-cancel" onClick={pushToCart}>
          <IoCloseOutline />
        </div>
      </div>
    </CartPopUp>
  );
};

const CartPopUp = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
  }
  .the-cart-overlay-content {
    position: relative;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 30%;
    width: 25%;
    background-color: white;
    border-radius: 0.5rem;
    padding: 2rem;
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    .info-cancel {
      font-size: 2rem;
      position: absolute;
      top: 0.3rem;
      right: 1rem;
      cursor: pointer;
    }
    .info-continue {
      width: 100%;
      text-align: center;
      font-size: 0.8rem;
      color: var(--bg-one);
    }
    .info-buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 1rem;
      button {
        width: 50%;
        color: var(--bg-one);
        color: white;
        background: var(--bg-one);
        font-size: 0.8rem;
        padding: 0.8rem 1.5rem;
        border-radius: 0.5rem;
        transition: var(--transition);
        border: none;
        text-align: center;
        &:hover {
          color: white;
          background: var(--bg-two);
          transition: var(--transition);
        }
      }
    }
    .content-info {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 2rem;
      .image {
        width: 7rem;
        height: 7rem;
        overflow: hidden;
        border: 1px solid var(--bg-one);
        border-radius: 0.3rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: center;
        }
      }
    }
    .info-info {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      gap: 0.3rem;
      .info-head {
        font-size: 1rem;
        font-weight: 500;
      }
      p {
        margin-bottom: 0;
        font-size: 0.8rem;
      }
    }
  }
`;
export default TheProductCart;
