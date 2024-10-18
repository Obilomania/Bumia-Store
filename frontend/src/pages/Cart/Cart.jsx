import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import BreadCrumb from "../../components/BreadCrumb";
import CartItem from "./CartItem";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  //  const cartTotalAmount = useSelector(
  //    (state) => state.PersistedReducer.cart.cartTotalAmount
  //  );
  //  const cartQuantity = useSelector(
  //    (state) => state.persistedReducer.cart.cartTotalQuantity
  //  );
  const navigate = useNavigate();
    const ItemInCart = useSelector(
      (state) => state.persistedReducer.cart.cartItems
    );
  const [count, setCount] = useState(1);
  const addCount = () => {
    setCount(count + 1);
  };
  const reduceCount = () => {
    if (count <= 1) {
      setCount(1);
      return;
    }
    setCount(count - 1);
  };
  return (
    <TheMainCart>
      <Helmet>
        <title>Cart</title>
        <meta name="description" content="Cart" />
      </Helmet>
      <BreadCrumb title="Cart" />
      <div className="page-container">
        <div className="cart-list">
          <div className="list-headings">
            <p className="the-title">PRODUCT</p>
            <p className="the-price">PRICE</p>
            <p className="the-quantity">QUANTITY</p>
            <p className="the-total">TOTAL</p>
          </div>
          {ItemInCart.map((item, index) => (
            <div key={index} className="cart-component">
              <CartItem
                addCount={addCount}
                reduceCount={reduceCount}
                count={count}
                item={item}
              />
            </div>
          ))}
        </div>
        <div className="checkout-to-action">
          <Link to={"/"} className="left-checkout">
            Continue Shopping
          </Link>
          <div className="right-checkout">
            <p className="sub-total">
              Subtotal : <span>&#x20A6; 250,000</span>
            </p>
            <p className="taxes">
              Taxes and Shipping are calculated at Checkout
            </p>
            <button onClick={() => navigate("/shipping-information")}>
              Checkout
            </button>
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
  .page-container {
    width: 100%;
    padding: 0rem 8rem;
  }
  .cart-component{
    width:100%;
  }
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
    a {
      color: white;
      background: var(--bg-one);
      font-size: 0.8rem;
      padding: 0.4rem 1.5rem;
      border-radius: 1rem;
      transition: var(--transition);
      border: none;
      &:hover {
        color: white;
        background: var(--bg-two);
        transition: var(--transition);
      }
    }
    button {
      width: 100%;
      color: black;
      background: var(--bg-logo);
      font-size: 0.8rem;
      padding: 0.4rem 1.5rem;
      border-radius: 1rem;
      transition: var(--transition);
      border: none;
      &:hover {
        color: white;
        background: var(--bg-two);
        transition: var(--transition);
      }
    }
  }
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 900px) {
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    min-height: 70vh;
    height: fit-content;
    background: var(--bg-grey);
    .page-container {
      width: 100%;
      padding: 0 1rem;
    }
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
      a {
        color: white;
        background: var(--bg-one);
        font-size: 0.8rem;
        padding: 0.4rem 1.5rem;
        border-radius: 1rem;
        transition: var(--transition);
        border: none;
        &:hover {
          color: white;
          background: var(--bg-two);
          transition: var(--transition);
        }
      }
      button {
        width: 100%;
        color: black;
        background: var(--bg-logo);
        font-size: 0.8rem;
        padding: 0.4rem 1.5rem;
        border-radius: 1rem;
        transition: var(--transition);
        border: none;
        &:hover {
          color: white;
          background: var(--bg-two);
          transition: var(--transition);
        }
      }
    }
  }
  @media screen and (max-width: 420px) {
  }
  @media screen and (max-width: 350px) {
  }
`;
export default Cart;
