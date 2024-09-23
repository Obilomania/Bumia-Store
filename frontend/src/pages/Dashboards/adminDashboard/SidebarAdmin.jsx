import React, { useState } from "react";
import styled from "styled-components";
import { IoAddSharp } from "react-icons/io5";
import { HiOutlineMinus } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { BsHandbagFill } from "react-icons/bs";
import { PiNotepadBold } from "react-icons/pi";
import { RiCoupon5Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SidebarAdmin = ({ sideBaOpen, toggleSideBar, setSideBarOpen }) => {
  const navigate = useNavigate();
  const [productDropItDown, setProductDropItDown] = useState(false);
  const [orderDropDown, setOrderDropDown] = useState(false);
  const [categoryDropDown, setCategoryDropDown] = useState(false);
  const [couponDropDown, setCouponDropDown] = useState(false);
  const [usersDropDown, setUsersDropDown] = useState(false);
  const [brandDropDown, setBrandDropDown] = useState(false)
  const revealDropDown = () => {
    setProductDropItDown(!productDropItDown);
    setOrderDropDown(false);
    setCategoryDropDown(false);
    setCouponDropDown(false);
    setUsersDropDown(false);
    setBrandDropDown(false);
  };
  const revealOrderDropDown = () => {
    setOrderDropDown(!orderDropDown);
    setCategoryDropDown(false);
    setCouponDropDown(false);
    setUsersDropDown(false);
    setProductDropItDown(false);
    setBrandDropDown(false);
  };
  const revealCategoryDropDown = () => {
    setCategoryDropDown(!categoryDropDown);
    setProductDropItDown(false);
    setOrderDropDown(false);
    setCouponDropDown(false);
    setUsersDropDown(false);
    setBrandDropDown(false);
  };
  const revealCouponDropDown = () => {
    setCouponDropDown(!couponDropDown);
    setProductDropItDown(false);
    setOrderDropDown(false);
    setUsersDropDown(false);
    setProductDropItDown(false);
    setBrandDropDown(false);
  };
  const revealUsersDropDown = () => {
    setUsersDropDown(!usersDropDown);
    setProductDropItDown(false);
    setOrderDropDown(false);
    setCategoryDropDown(false);
    setCouponDropDown(false);
    setBrandDropDown(false);
  };

  const revealBrandDropDown = () => {
    setBrandDropDown(!brandDropDown);
    setProductDropItDown(false);
    setOrderDropDown(false);
    setCategoryDropDown(false);
    setCouponDropDown(false);
    setUsersDropDown(false);
  }

  return (
    <SidyBar>
      <div className="logo" onClick={() => navigate("/admin-dashboard")}>
        <h3>
          Bumia<span>Store</span>.
        </h3>
      </div>
      <div className="mobile-hamburger" onClick={toggleSideBar}>
        <AiOutlineMenu />
      </div>
      <div className="side-bar-content">
        <div className="sidbar-option">
          <p
            className={productDropItDown ? "option-clicked" : "option-normal"}
            onClick={revealDropDown}
          >
            <MdOutlineDashboard />
            PRODUCTS
            <span>
              {productDropItDown ? <HiOutlineMinus /> : <IoAddSharp />}
            </span>
          </p>
          <ul
            className={
              productDropItDown ? "dropDown-menu" : "dropDown-menu-close"
            }
          >
            <li
              onClick={() => navigate("/admin-dashboard/admin-create-product")}
            >
              Create Product
            </li>
            <li
              onClick={() => navigate("/admin-dashboard/admin-product-list")}
            >
              View All Products
            </li>
          </ul>
        </div>
        {/* **********************CATEGORIES********************************* */}
        <div className="sidbar-option">
          <p
            className={categoryDropDown ? "option-clicked" : "option-normal"}
            onClick={revealCategoryDropDown}
          >
            <PiNotepadBold />
            CATEGORY
            <span>
              {categoryDropDown ? <HiOutlineMinus /> : <IoAddSharp />}
            </span>
          </p>
          <ul
            className={
              categoryDropDown ? "dropDown-menu" : "dropDown-menu-close"
            }
          >
            <li
              onClick={() => navigate("/admin-dashboard/admin-create-category")}
            >
              Create New Category
            </li>
            <li
              onClick={() => navigate("/admin-dashboard/admin-list-categories")}
            >
              View All Categories
            </li>
          </ul>
        </div>
        {/* **********************BRANDS********************************* */}
        <div className="sidbar-option">
          <p
            className={categoryDropDown ? "option-clicked" : "option-normal"}
            onClick={revealBrandDropDown}
          >
            <PiNotepadBold />
            BRAND
            <span>{brandDropDown ? <HiOutlineMinus /> : <IoAddSharp />}</span>
          </p>
          <ul
            className={brandDropDown ? "dropDown-menu" : "dropDown-menu-close"}
          >
            <li onClick={() => navigate("/admin-dashboard/admin-create-brand")}>
              Create Brand
            </li>
            <li onClick={() => navigate("/admin-dashboard/admin-list-brands")}>
              View All Brands
            </li>
          </ul>
        </div>
        {/* *******************ORDERS***************************** */}
        <div className="sidbar-option">
          <p
            className={orderDropDown ? "option-clicked" : "option-normal"}
            onClick={revealOrderDropDown}
          >
            <BsHandbagFill />
            ORDERS
            <span>{orderDropDown ? <HiOutlineMinus /> : <IoAddSharp />}</span>
          </p>
          <ul
            className={orderDropDown ? "dropDown-menu" : "dropDown-menu-close"}
          >
            <li>View All Orders</li>
            <li>Approved Orders</li>
            <li>Declined Orders</li>
          </ul>
        </div>
        {/* *******************COUPONS***************************** */}
        <div className="sidbar-option">
          <p
            className={couponDropDown ? "option-clicked" : "option-normal"}
            onClick={revealCouponDropDown}
          >
            <RiCoupon5Line />
            COUPONS
            <span>{couponDropDown ? <HiOutlineMinus /> : <IoAddSharp />}</span>
          </p>
          <ul
            className={couponDropDown ? "dropDown-menu" : "dropDown-menu-close"}
          >
            <li>Create New Coupon</li>
            <li>View All Coupons</li>
          </ul>
        </div>
        {/* *******************APPLICATION USERS***************************** */}
        <div className="sidbar-option">
          <p
            className={usersDropDown ? "option-clicked" : "option-normal"}
            onClick={revealUsersDropDown}
          >
            <FaRegUser />
            APPLICATION USERS
            <span>{usersDropDown ? <HiOutlineMinus /> : <IoAddSharp />}</span>
          </p>
          <ul
            className={usersDropDown ? "dropDown-menu" : "dropDown-menu-close"}
          >
            <li>View All Users</li>
            <li>View All Admins</li>
            <li>View All Managers</li>
            <li>Blocked Users</li>
          </ul>
        </div>
      </div>
    </SidyBar>
  );
};

const SidyBar = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--bg-three);
  padding: 2rem 1rem;
  position: relative;
  .logo {
    width: fit-content;
    margin: 0 auto;
    border: 1px solid var(--bg-logo);
    padding: 0.7rem 1rem 0rem 1rem;
    border-radius: 1rem;
    cursor: pointer;
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
  h3 {
    color: var(--bg-grey);
    margin-bottom: 1rem;
    span {
      color: var(--bg-logo);
    }
  }
  .mobile-hamburger {
    color: white;
    font-size: 1.5rem;
    position: absolute;
    top: 0.2rem;
    right: 1rem;
    cursor: pointer;
    display: none;
  }
  .side-bar-content {
    padding: 2rem 0rem;
    .sidbar-option {
      color: var(--bg-grey);
      width: 100%;
      p {
        font-size: 0.8rem;
      }
      .option-normal {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0.5rem 0.5rem 0.5rem 0.2rem #ffffff1a;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        border: 1px solid var(--bg-grey);
        transition: var(--transition);
        background: var(--bg-one);
        cursor: pointer;
        span {
          cursor: pointer;
        }
      }
      .option-clicked {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 1rem;
        border: 1px solid var(--bg-grey);
        transition: var(--transition);
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        cursor: pointer;
        span {
          cursor: pointer;
        }
      }
      .dropDown-menu {
        transition: var(--transition);
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        font-size: 1rem;
        height: fit-content;
        overflow: hidden;
        display: block;
        background: var(--bg-one);
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0rem 0;
        border: 1px dotted var(--bg-grey);
        margin: auto;
        margin-bottom: 1rem;

        li {
          list-style: none;
          cursor: pointer;
          border-bottom: 1px solid var(--bg-grey);
          width: 100%;
          padding: 0.5rem;
          text-align: center;
          transition: var(--transition);
          cursor: pointer;
          &:hover {
            transition: var(--transition);
            background: var(--bg-two);
            cursor: pointer;
          }
        }
      }
      .dropDown-menu-close {
        transition: var(--transition);
        border-radius: 1rem;
        font-size: 1rem;
        height: 0;
        overflow: hidden;
        display: block;
        background: var(--bg-two);
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0;
        li {
          list-style: none;
          cursor: pointer;
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .mobile-hamburger {
      color: white;
      font-size: 1.5rem;
      position: absolute;
      top: 0.2rem;
      right: 1rem;
      cursor: pointer;
      display: block;
    }
  }
  @media screen and (max-width: 900px) {
    .mobile-hamburger {
      color: white;
      font-size: 1.5rem;
      position: absolute;
      top: 0.2rem;
      right: 1rem;
      cursor: pointer;
      display: block;
    }
  }
  @media screen and (max-width: 600px) {
    .mobile-hamburger {
      color: white;
      font-size: 1.5rem;
      position: absolute;
      top: 0.2rem;
      right: 1rem;
      cursor: pointer;
      display: block;
    }
  }
  @media screen and (max-width: 420px) {
  }
  @media screen and (max-width: 350px) {
  }
`;
export default SidebarAdmin;
