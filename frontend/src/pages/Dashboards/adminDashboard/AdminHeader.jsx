import React from "react";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { base_Url } from "../../../components/Layout/BottomeHeader";
import axios from "axios";
import toast from "react-hot-toast";
import store from "../../../redux/store";
import { resetUserState } from "../../../redux/reducers/authSlice";
import { useNavigate } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { resetAdminSlice } from "../../../redux/reducers/adminSlice";
import { resetOrderState } from "../../../redux/reducers/orderSlice";
import { resetCartSlice } from "../../../redux/reducers/cartSlice";

const AdminHeader = ({ sideBaOpen, toggleSideBar, setSideBarOpen }) => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

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

    localStorage.clear();
    navigate("/");
  };
  return (
    <AdminHeaderNav>
      <div className="admin-header-content">
        <div className="leftNav">
          <span onClick={toggleSideBar} className="hamburger">
            <RxHamburgerMenu />
          </span>
          <p className="welcome">
            Hello, <span onClick={() => navigate("/profile")}>{userName}</span>{" "}
            &nbsp;
          </p>
        </div>
        <div className="the-input">
          <input type="text" className="search" placeholder="Search" />
          <span>
            <CiSearch />
          </span>
        </div>
        <div className="rightNav">
          <div className="notification">
            <IoMdNotificationsOutline /> <span></span>
          </div>
          <span onClick={() => navigate("/profile")}>
            {" "}
            <FaRegCircleUser />
          </span>{" "}
          <span onClick={logOutUser}>
            {" "}
            <AiOutlineLogout />
          </span>
        </div>
      </div>
    </AdminHeaderNav>
  );
};

const AdminHeaderNav = styled.div`
  width: 100%;
  padding: 0 1rem;
  background: var(--bg-two);
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  .hamburger {
    display: block;
  }
  .welcome {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      color: var(--bg-logo);
      font-weight: 500;
      margin-left: 0.5rem;
    }
  }
  .admin-header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 2rem;
    .rightNav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      span {
        cursor: pointer;
      }
      .notification {
        cursor: pointer;
        position: relative;
        span {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 100%;
          background: var(--bg-red);
          position: absolute;
          top: 0.2rem;
          right: -1px;
        }
      }
    }
    .the-input {
      width: 60%;
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        width: 100%;
        border: 1px solid lightgray;
        outline: none;
        padding: 0.1rem 1rem;
        border-right: none;
        font-size: 0.8rem;
        &::placeholder {
          color: lightgray;
          font-size: 0.8rem;
        }
      }
      span {
        background: var(--bg-one);
        border: 1px solid var(--bg-one);
        padding: 0.2rem 1rem;
        color: white;
        transition: var(--transition);
        cursor: pointer;
        &:hover {
          color: black;
          background: var(--bg-logo);
          transition: var(--transition);
          border: 1px solid var(--bg-logo);
          cursor: pointer;
        }
      }
    }
    .leftNav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      span {
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 900px) {
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0 1rem;
    background: var(--bg-two);
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    .welcome {
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        color: var(--bg-logo);
        font-weight: 500;
        margin-left: 0.5rem;
      }
    }
    .admin-header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0 0rem;
      .rightNav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        span {
          cursor: pointer;
        }
        .notification {
          cursor: pointer;
          position: relative;
          span {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 100%;
            background: var(--bg-red);
            position: absolute;
            top: 0.2rem;
            right: -1px;
          }
        }
      }
      .the-input {
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: center;
        input {
          width: 100%;
          border: 1px solid lightgray;
          outline: none;
          padding: 0.1rem 1rem;
          border-right: none;
          font-size: 0.8rem;
          &::placeholder {
            color: lightgray;
            font-size: 0.8rem;
          }
        }
        span {
          background: var(--bg-one);
          border: 1px solid var(--bg-one);
          padding: 0.2rem 1rem;
          color: white;
          transition: var(--transition);
          cursor: pointer;
          &:hover {
            color: black;
            background: var(--bg-logo);
            transition: var(--transition);
            border: 1px solid var(--bg-logo);
            cursor: pointer;
          }
        }
      }
      .leftNav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        span {
          cursor: pointer;
        }
      }
    }
  }
  @media screen and (max-width: 420px) {
  }
  @media screen and (max-width: 350px) {
  }
`;
export default AdminHeader;
