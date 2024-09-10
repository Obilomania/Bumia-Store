import React, { useState } from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { HiMiniMinus } from "react-icons/hi2";
import OurStoreMobile from "./OurStoreMobile";
import SpecialMobile from "./SpecialMobile";
import CategoryMobile from "./CategoryMobile";
import ElementMobile from "./ElementMobile";

const MobileNavBar = ({navReveal, toggleNavReveal}) => {
  const [activeStore, setActiveStore] = useState(false);
  
  const toggleStore = () => {
    setActiveStore(!activeStore);
    setActiveSpecial(false);
    setActiveCategories(false);
    setActiveElements(false);
  };

  const [activeSpecial, setActiveSpecial] = useState(false);
  const toggleSpecial = () => {
    setActiveSpecial(!activeSpecial);
    setActiveStore(false);
    setActiveCategories(false);
    setActiveElements(false);
  };

  const [activeCategories, setActiveCategories] = useState(false);
  const toggleCategories = () => {
    setActiveCategories(!activeCategories);
    setActiveSpecial(false);
    setActiveStore(false);
    setActiveElements(false);
  };

  const [activeElements, setActiveElements] = useState(false);
  const toggleElements = () => {
    setActiveElements(!activeElements);
    setActiveCategories(false);
    setActiveSpecial(false);
    setActiveStore(false);
  };

  return (
    <ResponsiveNav>
      <div
        className={navReveal ? "overlay" : "overlay-close"}
        onClick={toggleNavReveal}
      ></div>
      <div className={navReveal ? "sub-nav-content" : "sub-nav-content-close"}>
        <p className="menu">
          {" "}
          Menu{" "}
          <span onClick={toggleNavReveal}>
            <IoMdClose size={15} />
          </span>
        </p>
        <div className="menu-items">
          <p className="">Home</p>
          <div className="with-dropdowns">
            <p className="drops" onClick={toggleStore}>
              Our Store{" "}
              <span>
                {!activeStore ? (
                  <IoMdAdd size={15} />
                ) : (
                  <span>
                    <HiMiniMinus />
                  </span>
                )}
              </span>
            </p>
            <div
              className={activeStore ? "the-dropdown" : "the-dropdown-close"}
            >
              <OurStoreMobile />
            </div>
          </div>

          {/* **************************SPECIAL********************** */}
          <div className="with-dropdowns">
            <p className="drops" onClick={toggleSpecial}>
              <span>
                Special <b className="sale">SALE</b>
              </span>{" "}
              <span>
                {!activeSpecial ? (
                  <IoMdAdd size={15} />
                ) : (
                  <span>
                    <HiMiniMinus />
                  </span>
                )}
              </span>
            </p>
            <div
              className={activeSpecial ? "the-dropdown" : "the-dropdown-close"}
            >
              <SpecialMobile />
            </div>
          </div>
          {/* **************************CATEGORIES********************** */}
          <div className="with-dropdowns">
            <p className="drops" onClick={toggleCategories}>
              <span>
                Categories <b className="hot">HOT</b>
              </span>{" "}
              <span>
                {!activeCategories ? (
                  <IoMdAdd size={15} />
                ) : (
                  <span>
                    <HiMiniMinus />
                  </span>
                )}
              </span>
            </p>
            <div
              className={
                activeCategories ? "the-dropdown" : "the-dropdown-close"
              }
            >
              <CategoryMobile />
            </div>
          </div>
          {/* **************************ELEMENTS********************** */}
          <div className="with-dropdowns">
            <p className="drops" onClick={toggleElements}>
              Elements
              <span>
                {!activeElements ? (
                  <IoMdAdd size={15} />
                ) : (
                  <span>
                    <HiMiniMinus />
                  </span>
                )}
              </span>
            </p>
            <div
              className={activeElements ? "the-dropdown" : "the-dropdown-close"}
            >
              <ElementMobile />
            </div>
          </div>
        </div>
      </div>
    </ResponsiveNav>
  );
};

const ResponsiveNav = styled.div`
  width: 100%;
  height: 100%;
  .overlay {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    transition: 200ms all ease-in-out;
  }
  .overlay-close-close {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    right: -100%;
    z-index: 10;
    transition: 200ms all ease-in-out;
  }
  .sub-nav-content {
    width: 300px;
    height: 100vh;
    position: relative;
    top: 0;
    left: 0;
    z-index: 1000;
    color: var(--bg-one);
    background: white;
    overflow: hidden;
    transition: var(--transition);
    .menu-items {
      padding: 0.5rem 1rem;
    }
    p {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      margin-bottom: 0;
      padding: 0.5rem 1rem;
      border-bottom: 2px solid var(--bg-grey);
      color: grey;
      cursor: pointer;
      span b {
        font-weight: 400;
        font-size: 0.6rem;
      }
      .sale {
        font-size: 0.6rem;
        background: #199588;
        padding: 3px 0.3rem;
        border-radius: 0.3rem;
        color: white;
      }
      .hot {
        font-size: 0.6rem;
        background: #e62a65;
        padding: 3px 0.3rem;
        border-radius: 0.3rem;
        color: white;
      }
    }
    .menu {
      background: var(--bg-logo);
      font-weight: 500;
      padding: 0.5rem 2rem;
      color: black;
    }
    .with-dropdowns .the-dropdown {
      display: block;
    }
    .with-dropdowns .the-dropdown-close {
      display: none;
    }
  }
  .sub-nav-content-close {
    width: 300px;
    height: 100vh;
    position: relative;
    top: 0;
    left: -100%;
    z-index: 20;
    color: var(--bg-one);
    background: white;
    overflow: hidden;
    transition: var(--transition);
    .menu-items {
      padding: 0.5rem 1rem;
    }
    p {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      margin-bottom: 0;
      padding: 0.5rem 1rem;
      border-bottom: 2px solid var(--bg-grey);
      color: grey;
      cursor: pointer;
      span b {
        font-weight: 400;
        font-size: 0.6rem;
      }
      .sale {
        font-size: 0.6rem;
        background: #199588;
        padding: 3px 0.3rem;
        border-radius: 0.3rem;
        color: white;
      }
      .hot {
        font-size: 0.6rem;
        background: #e62a65;
        padding: 3px 0.3rem;
        border-radius: 0.3rem;
        color: white;
      }
    }
    .menu {
      background: var(--bg-logo);
      font-weight: 500;
      padding: 0.5rem 2rem;
      color: black;
    }
    .with-dropdowns .the-dropdown {
      display: block;
    }
    .with-dropdowns .the-dropdown-close {
      display: none;
    }
  }
`;
export default MobileNavBar;
