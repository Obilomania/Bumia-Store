import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import catMenuIMG from "../../assets/images/menu.svg";
import StoreDropDown from "./StoreDropDown";
import SpecialDropdown from "./SpecialDropdown";
import CategoriesDropdown from "./CategoriesDropdown";
import TopDealsDropDown from "./TopDealsDropDown";

const BottomeHeader = () => {
  const navigate = useNavigate();
  const [ourStoreHover, setOurStoreHover] = useState(false);
  const [specialHover, setSpecialHover] = useState(false);
  const [categoryHover, setCategoryHover] = useState(false);
  const [topDealsHover, setTopDealsHover] = useState(false);
  const [elementHover, setElementHover] = useState(false);
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
  const HoverCategoryEnter = () => {
    setCategoryHover(true);
  };
  const HoverCategoryLeave = () => {
    setCategoryHover(false);
  };
  const HoverTopDealsEnter = () => {
    setTopDealsHover(true);
  };
  const HoverTopDealsLeave = () => {
    setTopDealsHover(false);
  };
  const HoverElementEnter = () => {
    setElementHover(true);
  };
  const HoverElementLeave = () => {
    setElementHover(false);
  };
  return (
    <HeaderBottom>
      <div className="main-container bottom-content">
        <div className="nav-housing">
          <div
            className="shop-category cursor-pointer"
            onClick={() => navigate("/our-store")}
          >
            <div className="main-category-content">
              <img src={catMenuIMG} alt="category-icn" />
              SHOP CATEGORIES
            </div>
            <div className="line">
              <BsChevronDown />
              <span className=""></span>
            </div>
          </div>
          <li onClick={() => navigate("/")}>
            <Link>HOME</Link>
          </li>
          <li
            className="our-store"
            onMouseEnter={HoverStoreEnter}
            onMouseLeave={HoverStoreLeave}
            onClick={() => {
              setOurStoreHover(false);
              navigate("/our-store");
            }}
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
          <li
            className="our-special"
            onMouseEnter={HoverCategoryEnter}
            onMouseLeave={HoverCategoryLeave}
          >
            <Link>
              CATEGORIES <span className="hot">HOT</span> &nbsp;{" "}
              <BsChevronDown />
            </Link>
          </li>
          <li
            className="our-special"
            onMouseEnter={HoverTopDealsEnter}
            onMouseLeave={HoverTopDealsLeave}
          >
            <Link>
              TOP DEALS &nbsp; <BsChevronDown />
            </Link>
          </li>
          <li
            className="our-element"
            onMouseEnter={HoverElementEnter}
            onMouseLeave={HoverElementLeave}
          >
            <Link>
              ELEMENTS &nbsp; <BsChevronDown />
            </Link>
            <div
              className={
                elementHover ? "element-dropdown" : "element-dropdown-vanish"
              }
            >
              <p onClick={() => navigate("/about")}>About</p>
              <p onClick={() => navigate("/blog")}>Blogs</p>
              <p onClick={() => navigate("/")}>Faqs</p>
              <p onClick={() => navigate("/compare-page")}>Compare</p>
              <p onClick={() => navigate("/wish-list")}>Wishlist</p>
            </div>
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
      <div className="categories-dropdown">
        <CategoriesDropdown
          categoryHover={categoryHover}
          setCategoryHover={setCategoryHover}
        />
      </div>
      <div className="topdeals-dropdown">
        <TopDealsDropDown
          topDealsHover={topDealsHover}
          setTopDealsHover={setTopDealsHover}
        />
      </div>
      <div className="bottom-mobile-content">
        <div className="search">
          <input type="text" placeholder="Search" className="font-small" />
          <button className="">
            <BsSearch className="" />
          </button>
        </div>
      </div>
    </HeaderBottom>
  );
};

const HeaderBottom = styled.div`
  width: 100%;
  background: var(--bg-two);
  color: white;
  padding: 0rem 0;
  position: relative;
  z-index: 100;

  .bottom-mobile-content {
    display: none;
  }
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
          height: 5vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sale {
          font-size: 0.6rem;
          background: #199588;
          padding: 1.5px 0.3rem;
          border-radius: 0.3rem;
          margin-left: 0.5rem;
        }
        .hot {
          font-size: 0.6rem;
          background: #e62a65;
          padding: 1.5px 0.3rem;
          border-radius: 0.3rem;
          margin-left: 0.5rem;
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
    z-index: 20;
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
  .categories-dropdown {
    width: 100%;
    position: absolute;
    padding: 0 8rem;
  }
  .categories-dropdown-close {
    width: 100%;
    display: none;
  }
  .topdeals-dropdown {
    width: 100%;
    position: absolute;
    padding: 0 8rem;
  }
  .topdeals-dropdown-close {
    width: 100%;
    display: none;
  }
  .our-element {
    position: relative;
    /* width: 100%; */
    .element-dropdown-vanish {
      display: none;
    }
    .element-dropdown {
      display: block;
      width: 100%;
      position: absolute;
      padding-top: 1rem;
      box-shadow: 0 0 10px #0000001a;
      color: black;
      background: white;

      P {
        padding: 0.4rem 0;
        border-bottom: 1px solid var(--bg-one);
        text-align: center;
        transition: var(--transition);
        cursor: pointer;
        &:hover {
          color: var(--bg-logo);
          transition: var(--transition);
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    background: var(--bg-two);
    color: white;
    padding: 1rem;
    .bottom-content {
      display: none;
    }
    .bottom-mobile-content {
      display: block;
      width: 100%;
      position: relative;
      z-index: 10;
      .search {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        input {
          width: 60%;
          border-top-left-radius: 0.3rem;
          border-bottom-left-radius: 0.3rem;
          padding: 9px 15px;
          height: 36px;
          border: none;
          outline: none;
        }
        button {
          width: 10%;
          padding: 6px;
          background: var(--bg-logo);
          color: var(--bg-one);
          border: none;
          border-top-right-radius: 0.3rem;
          border-bottom-right-radius: 0.3rem;
          transition: var(--transition);
          &:hover {
            border: none;
            transition: var(--transition);
            background: var(--bg-two);
            color: white;
          }
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    background: var(--bg-two);
    color: white;
    padding: 1rem;
    .bottom-content {
      display: none;
    }
    .bottom-mobile-content {
      display: block;
      width: 100%;
      position: relative;
      z-index: 10;
      .search {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        input {
          width: 60%;
          border-top-left-radius: 0.3rem;
          border-bottom-left-radius: 0.3rem;
          padding: 9px 15px;
          height: 36px;
          border: none;
          outline: none;
        }
        button {
          width: 10%;
          padding: 6px;
          background: var(--bg-logo);
          color: var(--bg-one);
          border: none;
          border-top-right-radius: 0.3rem;
          border-bottom-right-radius: 0.3rem;
          transition: var(--transition);
          &:hover {
            border: none;
            transition: var(--transition);
            background: var(--bg-two);
            color: white;
          }
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    background: var(--bg-two);
    color: white;
    padding: 1rem;
    .bottom-content {
      display: none;
    }
    .bottom-mobile-content {
      display: block;
      width: 100%;
      position: relative;
      z-index: 10;
      .search {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        input {
          width: 100%;
          border-top-left-radius: 0.3rem;
          border-bottom-left-radius: 0.3rem;
          padding: 9px 15px;
          height: 36px;
          border: none;
          outline: none;
        }
        button {
          width: 10%;
          padding: 6px;
          background: var(--bg-logo);
          color: var(--bg-one);
          border: none;
          border-top-right-radius: 0.3rem;
          border-bottom-right-radius: 0.3rem;
          transition: var(--transition);
          &:hover {
            border: none;
            transition: var(--transition);
            background: var(--bg-two);
            color: white;
          }
        }
      }
    }
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    background: var(--bg-two);
    color: white;
    padding: 1rem;
    .bottom-content {
      display: none;
    }
    .bottom-mobile-content {
      display: block;
      width: 100%;
      position: relative;
      z-index: 10;
      .search {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        input {
          width: 100%;
          border-top-left-radius: 0.3rem;
          border-bottom-left-radius: 0.3rem;
          padding: 9px 15px;
          height: 36px;
          border: none;
          outline: none;
        }
        button {
          width: 10%;
          padding: 6px;
          background: var(--bg-logo);
          color: var(--bg-one);
          border: none;
          border-top-right-radius: 0.3rem;
          border-bottom-right-radius: 0.3rem;
          transition: var(--transition);
          &:hover {
            border: none;
            transition: var(--transition);
            background: var(--bg-two);
            color: white;
          }
        }
      }
    }
  }
  @media screen and (max-width: 350px) {
    width: 100%;
    background: var(--bg-two);
    color: white;
    padding: 1rem;
    .bottom-content {
      display: none;
    }
    .bottom-mobile-content {
      display: block;
      width: 100%;
      position: relative;
      z-index: 10;
      .search {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        input {
          width: 100%;
          border-top-left-radius: 0.3rem;
          border-bottom-left-radius: 0.3rem;
          padding: 9px 15px;
          height: 36px;
          border: none;
          outline: none;
        }
        button {
          width: 10%;
          padding: 6px;
          background: var(--bg-logo);
          color: var(--bg-one);
          border: none;
          border-top-right-radius: 0.3rem;
          border-bottom-right-radius: 0.3rem;
          transition: var(--transition);
          &:hover {
            border: none;
            transition: var(--transition);
            background: var(--bg-two);
            color: white;
          }
        }
      }
    }
  }
`;

export default BottomeHeader;
