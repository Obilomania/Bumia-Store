import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import compareIMG from "../../assets/images/compare.svg";
import wishIMG from "../../assets/images/wishlist.svg";
import userAuthIMG from "../../assets/images/user.svg";
import cartIMG from "../../assets/images/cart.svg";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";

const MiddleHeader = () => {
  return (
    <HeaderMiddle>
      <div className="main-container middle-content">
        <div className="hamburger">
          <IoMenuOutline />
        </div>
        <Link to={"/"} className="logo">
          <h3>
            Bumia<span>Store</span>.
          </h3>
        </Link>
        <div className="search">
          <input type="text" placeholder="Search" className="font-small" />
          <button className="">
            <BsSearch className="" />
          </button>
        </div>
        <div className="left-wing">
          <Link to={"/"} className="compare">
            <img src={compareIMG} alt="compare-img" />
            <div className="write-up">
              <p className="font-small">Compare</p>
              <p className="font-small">Products</p>
            </div>
          </Link>
          <Link to={"/"} className="wishlist">
            <img src={wishIMG} alt="compare-img" />
            <div className="write-up">
              <p className="font-small">Favourite</p>
              <p className="font-small">Wishlist</p>
            </div>
          </Link>
          <Link to={"/"} className="login">
            <img src={userAuthIMG} alt="compare-img" />
            <div className="write-up">
              <p className="font-small">Log In</p>
              <p className="font-small">My Account</p>
            </div>
          </Link>
          <Link to={"/"} className="cart">
            <img src={cartIMG} alt="compare-img" />
            <div className="write-up">
              <p className="font-small cart-number">0</p>
              <p className="font-small">&#x20A6; 0.00</p>
            </div>
          </Link>
        </div>
      </div>
    </HeaderMiddle>
  );
};

const HeaderMiddle = styled.div`
  width: 100%;
  background: var(--bg-one);
  color: white;
  padding: 20px 0;
  .middle-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .hamburger {
      color: white;
      display:none;
    }
    .logo {
      h3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 500;
      }
      span {
        color: var(--bg-logo);
        margin-left: -0.3rem;
      }
    }
    a {
      color: white;
    }
    .search {
      width: 50%;
      display: flex;
      align-items: center;
      input {
        border-top-left-radius: 0.3rem;
        border-bottom-left-radius: 0.3rem;
        padding: 9px 15px;
        height: 36px;
        border: none;
        outline: none;
        width: 95%;
      }
      button {
        width: 5%;
        padding: 6px;
        background: var(--bg-logo);
        color: var(--bg-one);
        border: none;
        border-top-right-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
        transition: var(--transition);
        &:hover {
          border: 2px solid var(--bg-two);
          transition: var(--transition);
          background: var(--bg-two);
          color: white;
        }
      }
    }
    .left-wing {
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .compare,
      .wishlist,
      .login,
      .cart {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        img {
          width: 1.8rem;
          transition: transform 200ms ease-in-out;
        }
        .write-up {
          display: flex;
          flex-direction: column;
          align-items: start;
          overflow: hidden;
          .cart-number {
            background: white;
            width: 2rem;
            color: var(--bg-one);
            text-align: center;
            border-radius: 30%;
            font-weight: 500;
            font-size: 0.6rem;
          }
        }
        &:hover {
          img {
            transform: scaleX(-1);
          }
        }
      }
    }
  }
`;
export default MiddleHeader;
