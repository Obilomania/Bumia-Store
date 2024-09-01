import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsChevronDown } from "react-icons/bs";
import catMenuIMG from "../../assets/images/menu.svg";
import StoreDropDown from "./StoreDropDown";
import SpecialDropdown from "./SpecialDropdown";

const BottomeHeader = () => {
  const [ourStoreHover, setOurStoreHover] = useState(false);
  const [specialHover, setSpecialHover] = useState(false);
  const HoverStoreEnter = () => {
    setOurStoreHover(true);
  };
  const HoverStoreLeave = () => {
    setOurStoreHover(false);
  };
  const HoverSpecialEnter = () => {
    setSpecialHover(true);
  };
  const HoverSpecialLeave = () => {
    setSpecialHover(false);
  };
  return (
    <HeaderBottom>
      <div className="main-container bottom-content">
        <div className="nav-housing">
          <div className="shop-category">
            <div className="main-category-content">
              <img src={catMenuIMG} alt="category-icn" />
              SHOP CATEGORIES
            </div>
            <div className="line">
              <BsChevronDown />
              <span className=""></span>
            </div>
          </div>
          <li>
            <Link>HOME</Link>
          </li>
          <li
            className="our-store"
            onMouseEnter={HoverStoreEnter}
            onMouseLeave={HoverStoreLeave}
          >
            <Link>
              {" "}
              OUR STORE &nbsp; <BsChevronDown />
            </Link>
          </li>
          <li
            className="our-special"
            onMouseEnter={HoverSpecialEnter}
            onMouseLeave={HoverSpecialLeave}
          >
            <Link>
              SPECIAL <span className="sale">SALE</span> &nbsp;{" "}
              <BsChevronDown />
            </Link>
          </li>
          <li>
            <Link>
              CATEGORIES <span className="hot">HOT</span> &nbsp;{" "}
              <BsChevronDown />
            </Link>
          </li>
          <li>
            <Link>
              TOP DEALS &nbsp; <BsChevronDown />
            </Link>
          </li>
          <li>
            <Link>
              ELEMENTS &nbsp; <BsChevronDown />
            </Link>
          </li>
        </div>
      </div>
      <div
        className={
          ourStoreHover ? "ourstore-dropdown" : "ourstore-dropdown-close"
        }
      >
        <StoreDropDown
          setOurStoreHover={setOurStoreHover}
          ourStoreHover={ourStoreHover}
        />
      </div>
      <div
        className={specialHover ? "special-dropdown" : "special-dropdown-close"}
      >
        <SpecialDropdown
          specialHover={specialHover}
          setSpecialHover={setSpecialHover}
        />
      </div>
    </HeaderBottom>
  );
};

const HeaderBottom = styled.div`
  width: 100%;
  background: var(--bg-two);
  color: white;
  padding: 1rem 0;
  .bottom-content {
    width: 80%;
    .nav-housing {
      display: flex;
      align-items: center;
      justify-content: start;
      margin-bottom: 0;
      font-size: 0.8rem;
      gap: 5%;
      .shop-category {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 20%;
        border-right: 1px solid var(--bg-grey);
        padding-right: 1rem;
        .main-category-content {
          img {
            width: 1.2rem;
            margin-right: 0.5rem;
          }
        }
      }
      li {
        list-style: none;
        margin-bottom: 0;
        a {
          color: white;
        }
        .sale {
          font-size: 0.6rem;
          background: #199588;
          padding: 3px 0.3rem;
          border-radius: 0.3rem;
        }
        .hot {
          font-size: 0.6rem;
          background: #e62a65;
          padding: 3px 0.3rem;
          border-radius: 0.3rem;
        }
        .our-store,
        .our-special {
          display: flex;
        }
      }
    }
  }
  .ourstore-dropdown {
    width: 100%;
    position: absolute;
    padding: 0 8rem;
  }
  .ourstore-dropdown-close {
    width: 100%;
    display: none;
  }
  .special-dropdown {
    width: 100%;
    position: absolute;
    padding: 0 8rem;
  }
  .special-dropdown-close {
    width: 100%;
    display: none;
  }
`;

export default BottomeHeader;
