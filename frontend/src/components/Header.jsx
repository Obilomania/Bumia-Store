import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import compareIMG from "../assets/images/compare.svg";
import wishIMG from "../assets/images/wishlist.svg";
import userAuthIMG from "../assets/images/user.svg";
import cartIMG from "../assets/images/cart.svg";
import catMenuIMG from "../assets/images/menu.svg";

const Header = () => {
  return (
    <NavigationBar>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping For Bulk Purchase Over &#x20A6; 300,000{" "}
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Helpline :{" "}
                <a className="text-white" href="tel:+2348033954540">
                  +234 8033954540
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2 logo ">
              <h2>
                {" "}
                <Link to={"/"} className="text-white">
                  <span>Bumia</span>Store<span>.</span>
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group border-0">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text search-bg " id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to={"/compare-page"}
                    className="d-flex align-items-center gap-2 text-white"
                  >
                    <img
                      src={compareIMG}
                      alt="compare"
                      className="compare-icon"
                    />
                    <p className="mb-0 nav-left-p">
                      Compare <br />
                      Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={"/wish-list"}
                    className="d-flex align-items-center gap-2 text-white"
                  >
                    <img
                      src={wishIMG}
                      alt="wishlist"
                      className="wishlist-icon"
                    />
                    <p className="mb-0 nav-left-p">
                      Wishlist & <br />
                      Favourite
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={"/login"}
                    className="d-flex align-items-center gap-2 text-white"
                  >
                    <img
                      src={userAuthIMG}
                      alt="userLogin"
                      className="auth-icon"
                    />
                    <p className="mb-0 nav-left-p">
                      Login <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={"/"}
                    className="d-flex align-items-center gap-2 text-white"
                  >
                    <img src={cartIMG} alt="compare" className="cart-icon" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark py-1">0</span>
                      <p className="mb-0 nav-left-p">$ 0.00</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-buttom d-flex align-items-center gap-5">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="category">
                        <img src={catMenuIMG} alt="meni" /> STORE CATEGORIES
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link to={"/"} className="dropdown-item">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"} className="dropdown-item">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"} className="dropdown-item">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-5">
                    <NavLink to={"/"} className="text-white">
                      Home
                    </NavLink>
                    <NavLink to={"/our-store"} className="text-white">
                      Our Store
                    </NavLink>
                    <NavLink to={"/blog"} className="text-white">
                      Blogs
                    </NavLink>
                    <NavLink to={"/contact"} className="text-white">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </NavigationBar>
  );
};

const NavigationBar = styled.div`
  width: 100%;
  .header-top-strip {
    background: var(--bg-one);
    border-bottom: 1px solid var(--bg-two);
    p {
      font-size: 0.8rem;
    }
  }
  .header-upper {
    background: var(--bg-one);
    border-bottom: 1px solid var(--bg-one);
    a {
      color: white;
    }
    .compare-icon {
      transition: 1s all ease-in-out;
      &:hover {
        transition: 1s all ease-in-out;
        transform: rotate(360deg);
      }
    }
    .wishlist-icon,
    .auth-icon,
    .cart-icon {
      transition: var(--transition);
      &:hover {
        transition: var(--transition);
        transform: scaleX(-1);
      }
    }
    .logo {
      color: white;
      span {
        color: var(--bg-logo);
        margin-right: -0.3rem;
      }
    }
    .search-bg {
      background: var(--bg-logo);
    }
  }
  .nav-left-p {
    font-size: 0.8rem;
  }
  .header-bottom {
    background-color: var(--bg-three);
    .menu-links a {
      color: white;
      font-size: 0.9rem;
      line-height: 1.1rem;
      font-weight: 400;
      text-transform: uppercase;
    }
  }
  .header-bottom .dropdown button {
    color: white;
    font-size: 0.9rem;
    line-height: 1.1rem;
    font-weight: 400;
    letter-spacing: 0.3;
    text-transform: uppercase;
    background: none;
    border: none;
    letter-spacing: 0.8px;
    margin-top: 0.3rem;
    &:focus {
      box-shadow: none;
    }
  }
  .category img {
    width: 1.3rem;
    margin-top: 0.1rem;
  }
  .header-bottom .dropdown .dropdown-menu {
    background-color: var(--bg-three);

    width: 100%;
    a {
      background-color: var(--bg-one);
      color: white;
      font-size: 0.8rem;
      border-bottom: 2px solid var(--bg-three);
      padding: 0.8rem;
      &:hover {
        background-color: var(--bg-three);
      }
    }
  }
`;
export default Header;
