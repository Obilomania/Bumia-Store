import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import compareIMG from "../../assets/images/compare.svg";
import wishIMG from "../../assets/images/wishlist.svg";
import userAuthIMG from "../../assets/images/user.svg";
import cartIMG from "../../assets/images/cart.svg";
import { Link, useNavigate } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import axios from "axios";
import { base_Url } from "./BottomeHeader";
import { resetUserState } from "../../redux/reducers/authSlice";
import store from "../../redux/store";
import toast from "react-hot-toast";
import { resetAdminSlice } from "../../redux/reducers/adminSlice";
import { resetOrderState } from "../../redux/reducers/orderSlice";
import { resetCartSlice } from "../../redux/reducers/cartSlice";
import { useSelector } from "react-redux";

const MiddleHeader = ({ toggleNavReveal }) => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");
  const ItemInCart = useSelector(
    (state) => state.persistedReducer.cart.cartItems
  );

  const logOutUser = () => {
    const response = axios.get(`${base_Url}user/logout`, {
      withCredentials: true,
    });
    if (response.data) {
      toast.success("User Logged Out");
    } else if (response.error) {
      return toast.error(response.error?.data?.message);
    }
    store.dispatch(resetUserState());
    store.dispatch(resetAdminSlice());
    store.dispatch(resetOrderState());
    store.dispatch(resetCartSlice());
    localStorage.clear();
    navigate("/");
  };
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
          <Link to={"/compare-page"} className="compare">
            <img src={compareIMG} alt="compare-img" />
            <div className="write-up">
              <p className="font-small">Compare</p>
              <p className="font-small">Products</p>
            </div>
          </Link>
          <Link to={"/wish-list"} className="wishlist">
            <img src={wishIMG} alt="compare-img" />
            <div className="write-up">
              <p className="font-small">Favourite</p>
              <p className="font-small">Wishlist</p>
            </div>
          </Link>
          {userName ? (
            <>
              <Link className="login" to={"/profile"}>
                <img src={userAuthIMG} alt="compare-img" />
                <div className="write-up">
                  <p className="font-small">Hello</p>
                  <p className="font-small">{userName}</p>
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/account/login"} className="login">
                <img src={userAuthIMG} alt="compare-img" />
                <div className="write-up">
                  <p className="font-small">Log In</p>
                  <p className="font-small">My Account</p>
                </div>
              </Link>
            </>
          )}
          <Link to={"/cart"} className="cart">
            <img src={cartIMG} alt="compare-img" />
            <div className="write-up">
              <p className="font-small cart-number">
                {ItemInCart ? ItemInCart.length : 0}
              </p>
              {/* <p className="font-small">&#x20A6; 0.00</p> */}
            </div>
          </Link>
        </div>
      </div>
      <div className="middle-mobile-content">
        <div className="logo-things">
          <div className="hamburger" onClick={toggleNavReveal}>
            <IoMenuOutline />
          </div>
          <Link to={"/"} className="logo">
            <h3>
              Bumia<span>Store</span>.
            </h3>
          </Link>
        </div>
        <div className="nav-icons">
          <img
            src={compareIMG}
            alt="nav-ions"
            onClick={() => navigate("/compare-page")}
          />
          <img
            src={wishIMG}
            alt="nav-ions"
            onClick={() => navigate("/wish-list")}
          />
          {userName ? (
            <>
              <img
                src={userAuthIMG}
                alt="nav-ions"
                onClick={() => navigate("/profile")}
              />
            </>
          ) : (
            <>
              <img
                src={userAuthIMG}
                alt="nav-ions"
                onClick={() => navigate("/account/login")}
              />
            </>
          )}
          <div className="cart-img">
            <img
              src={cartIMG}
              alt="nav-ions"
              onClick={() => navigate("/cart")}
            />
            <span> {ItemInCart ? ItemInCart.length : 0}</span>
          </div>
          {userName && (
            <span className="logOffMobile" onClick={logOutUser}>
              <FaPowerOff />
            </span>
          )}
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
  .middle-mobile-content {
    display: none;
  }
  .middle-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .hamburger {
      color: white;
      display: none;
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
          /* overflow: hidden; */
          .cart-number {
            background: white;
            width: 2rem;
            color: var(--bg-one);
            text-align: center;
            border-radius: 30%;
            font-weight: 500;
            font-size: 0.6rem;
            margin-top: -1rem;
            margin-left: -.6rem;
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
  .logOffMobile {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    background: var(--bg-one);
    color: white;
    padding: 0.8rem 1rem;
    .logOffMobile {
      display: block;
      font-size: 1.5rem;
      margin-left: 0.6rem;
      color: #e62a65;
      margin-bottom: 0.2rem;
    }
    .middle-content {
      display: none;
    }
    .middle-mobile-content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 1.5rem;
      position: relative;
      z-index: 10;
      .logo-things {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .hamburger {
          font-size: 1.5rem;
          margin-right: 0.8rem;
          cursor: pointer;
          position: relative;
          z-index: 10;
        }
        a {
          margin-bottom: -0.8rem;
          color: white;
          span {
            color: var(--bg-logo);
            margin-top: 0.5rem;
          }
        }
      }
      .nav-icons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        img {
          width: 1.5rem;
        }
        .cart-img {
          position: relative;
          span {
            color: var(--bg-one);
            background: white;
            position: absolute;
            top: -0.4rem;
            right: -0.7rem;
            font-size: 0.6rem;
            width: 1rem;
            height: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    background: var(--bg-one);
    color: white;
    padding: 0.8rem 1rem;
    .logOffMobile {
      display: block;
      font-size: 1.5rem;
      margin-left: 0.6rem;
      color: #e62a65;
      margin-bottom: 0.2rem;
    }
    .middle-content {
      display: none;
    }
    .middle-mobile-content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 1.5rem;
      position: relative;
      z-index: 10;
      .logo-things {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .hamburger {
          font-size: 1.5rem;
          margin-right: 0.8rem;
          cursor: pointer;
          position: relative;
          z-index: 10;
        }
        a {
          margin-bottom: -0.8rem;
          color: white;
          span {
            color: var(--bg-logo);
            margin-top: 0.5rem;
          }
        }
      }
      .nav-icons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        img {
          width: 1.5rem;
        }
        .cart-img {
          position: relative;
          span {
            color: var(--bg-one);
            background: white;
            position: absolute;
            top: -0.4rem;
            right: -0.7rem;
            font-size: 0.6rem;
            width: 1rem;
            height: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    background: var(--bg-one);
    color: white;
    padding: 0.8rem 1rem;
    .logOffMobile {
      display: block;
      font-size: 1.3rem;
      margin-left: 0.6rem;
      color: #e62a65;
      margin-bottom: 0.2rem;
    }
    .middle-content {
      display: none;
    }
    .middle-mobile-content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 1.5rem;
      position: relative;
      z-index: 10;
      .logo-things {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1rem;
        margin-bottom: 0.5rem;
        .hamburger {
          font-size: 1.5rem;
          margin-right: 0.8rem;
          cursor: pointer;
          position: relative;
          z-index: 10;
        }
        a {
          margin-bottom: -0.8rem;
          color: white;
          span {
            color: var(--bg-logo);
            margin-top: 0.5rem;
          }
        }
      }
      .nav-icons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        img {
          width: 1.5rem;
          cursor: pointer;
        }
        .cart-img {
          position: relative;
          span {
            color: var(--bg-one);
            background: white;
            position: absolute;
            top: -0.4rem;
            right: -0.7rem;
            font-size: 0.6rem;
            width: 1rem;
            height: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;
            cursor: pointer;
          }
        }
      }
    }
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    background: var(--bg-one);
    color: white;
    padding: 0.8rem 1rem;
    .logOffMobile {
      display: block;
      font-size: 1rem;
      margin-left: 1rem;
      color: #e62a65;
    }
    .middle-content {
      display: none;
    }
    .middle-mobile-content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 1.5rem;
      position: relative;
      z-index: 10;
      .logo-things {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.8rem;
        .hamburger {
          font-size: 1.2rem;
          margin-right: 0.8rem;
          cursor: pointer;
          position: relative;
          z-index: 10;
        }
        a {
          margin-bottom: -0.8rem;
          color: white;
          span {
            color: var(--bg-logo);
            margin-top: 0.5rem;
          }
        }
      }
      .nav-icons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        img {
          width: 1rem;
        }
        .cart-img {
          position: relative;
          span {
            color: var(--bg-one);
            background: white;
            position: absolute;
            top: -0.4rem;
            right: -0.7rem;
            font-size: 0.6rem;
            width: 1rem;
            height: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 350px) {
    width: 100%;
    background: var(--bg-one);
    color: white;
    padding: 0.8rem 1rem;
    .middle-content {
      display: none;
    }
    .middle-mobile-content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 1.5rem;
      position: relative;
      z-index: 10;
      .logo-things {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .hamburger {
          font-size: 1.5rem;
          margin-right: 0.8rem;
          cursor: pointer;
          position: relative;
          z-index: 10;
        }
        a {
          margin-bottom: -0.8rem;
          color: white;
          span {
            color: var(--bg-logo);
            margin-top: 0.5rem;
          }
        }
      }
      .nav-icons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        img {
          width: 1.5rem;
        }
        .cart-img {
          position: relative;
          span {
            color: var(--bg-one);
            background: white;
            position: absolute;
            top: -0.4rem;
            right: -0.7rem;
            font-size: 0.6rem;
            width: 1rem;
            height: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;
          }
        }
      }
    }
  }
`;
export default MiddleHeader;
