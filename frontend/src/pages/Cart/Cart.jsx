import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import BreadCrumb from "../../components/BreadCrumb";
import { FaRegTrashCan } from "react-icons/fa6";
import productImage from "../../assets/images/tab.jpg";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <TheMainCart>
      <Helmet>
        <title>Cart</title>
        <meta name="description" content="Our Store" />
      </Helmet>
      <BreadCrumb title="Cart" />
      <div className="container-xxl">
        <div className="cart-list">
          <div className="list-headings">
            <p className="the-title">PRODUCT</p>
            <p className="the-price">PRICE</p>
            <p className="the-quantity">QUANTITY</p>
            <p className="the-total">TOTAL</p>
          </div>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="checkout-to-action">
          <Link to={"/"} className="left-checkout">
            Continue Shipping
          </Link>
          <div className="right-checkout">
            <p className="sub-total">
              Subtotal : <span>&#x20A6; 250,000</span>
            </p>
            <p className="taxes">
              Taxes and Shipping are calculated at Checkout
            </p>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </TheMainCart>
  );
};

const TheMainCart = styled.div`
  width: 100%;
  min-height: 70vh;
  height: fit-content;
  background: var(--bg-grey);
  .cart-list {
    padding-top: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .list-headings {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--bg-one);
      p {
        margin-bottom: 0;
        font-size: 0.8rem;
        font-weight: 500;
        color: grey;
      }
      .the-title {
        width: 50%;
      }
      .the-price {
        width: 15%;
      }
      .the-quantity {
        width: 20%;
      }
      .the-total {
        width: 15%;
        text-align: end;
      }
    }
  }
  .checkout-to-action {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    padding: 2rem 0;
    p {
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
      color: grey;
      span {
        font-weight: 500;
      }
    }
    a,
    button {
      color: white;
      background: var(--bg-one);
      font-size: 0.8rem;
      padding: 0.4rem 1.5rem;
      border-radius: 1rem;
      width: 10rem;
      transition: var(--transition);
      border: none;
      &:hover {
        background: var(--bg-two);
        transition: var(--transition);
      }
    }
  }
`;
export default Cart;
