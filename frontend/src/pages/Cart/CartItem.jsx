import React from "react";
import styled from "styled-components";
import { FaRegTrashCan } from "react-icons/fa6";
import productImage from "../../assets/images/tab.jpg";

const CartItem = () => {
  return (
    <MyCart>
      <div className="store-wrapper py-5 home-wrapper">
        <div>
          <div className="cart-list">
            <div className="list-body">
              <div className="the-product ">
                <div className="prod-image">
                  <img src={productImage} alt="prode-img" />{" "}
                </div>
                <div className="the-product-content ">
                  <p>This is a chilling samsung garget</p>
                  <p>
                    Size : <span>S</span>
                  </p>
                  <p>
                    Color : <span>Red</span>
                  </p>
                </div>
              </div>
              <p className="the-price">&#x20A6; 250,000</p>
              <div className="the-quantity">
                <div className="counter">
                  <p className="signs">
                    <span>+</span> <span>-</span>
                  </p>
                  <p className="count">1</p>
                </div>
                <button className="trash-can">
                  <FaRegTrashCan />
                </button>
              </div>
              <p className="the-total">&#x20A6; 250,000</p>
            </div>
          </div>
        </div>
      </div>
    </MyCart>
  );
};
const MyCart = styled.div`
  width: 100%;
  margin-top: -3rem;
  margin-bottom: -3rem;
  .cart-list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .list-body {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 0;
      padding-bottom: 1rem;
      box-shadow: 0 4px 6px -2px #0000001a;
      margin: 0;
      p {
        margin-bottom: 0;
        font-size: 0.8rem;
        font-weight: 500;
        color: grey;
      }
      .the-product {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: star1;
        gap: 2rem;
        .prod-image {
          width: 5rem;
          height: 5rem;
          border-radius: 0.5rem;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .the-product-content {
          display: flex;
          align-items: start;
          justify-content: start;
          flex-direction: column;
          gap: 0.3rem;
        }
      }
      .the-price {
        width: 15%;
      }
      .the-quantity {
        width: 20%;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        justify-content: start;
        border: 2px solid var(--bg-grey);
        .counter {
          background: white;
          width: 5rem;
          height: 3rem;
          padding: 0 1rem 0 0.5em;
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
          .signs {
            font-size: 1rem;
            display: flex;
            align-items: start;
            justify-content: start;
            flex-direction: column;
            gap: 0rem;
            span {
              border: 2px solid var(--bg-grey);
              padding: 0.1rem 0.5rem;
              cursor: pointer;
              transition: var(--transition);
              margin: 0;
              &:hover {
                background: var(--bg-logo);
                transition: var(--transition);
              }
            }
          }
          .count {
            font-size: 1rem;
          }
        }
        .trash-can {
          color: white;
          background: var(--bg-one);
          width: 2.2rem;
          height: 2.2rem;
          font-size: 1rem;
          border-radius: 100%;
          transition: var(--transition);
          border: none;
          &:hover {
            background: var(--bg-logo);
            transition: var(--transition);
            color: var(--bg-one);
            border: none;
          }
        }
      }
      .the-total {
        width: 15%;
        text-align: end;
      }
    }
  }
 
`;
export default CartItem;
