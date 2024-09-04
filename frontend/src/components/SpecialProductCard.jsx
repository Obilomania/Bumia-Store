import React from "react";
import styled from "styled-components";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoIosShuffle } from "react-icons/io";
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from "react-router-dom";

const SpecialProductCard = ({ product }) => {
  const navigate = useNavigate()
  return (
    <SpecialProduct>
      <div className="special-product-card">
        <div className="left-card">
          <div className="main-image">
            <img src={product.mainImage} alt="" />
          </div>
          <div className="sub-image">
            <div className="s-image">
              <img src={product.subImageOne} alt="" />
            </div>
            <div className="s-image">
              <img src={product.subImageTwo} alt="" />
            </div>
          </div>
          <div className="discount-favourite ">
            <p className="percentage">-50%</p>
            <p>
              <FiHeart />
            </p>
          </div>
          <div className="add-to-cart">
            <p className="one">
              <IoIosShuffle />
            </p>
            <p
              className="two"
              onClick={() => navigate(`/product/detail/${product.id}`)}
            >
              <FaRegEye />
            </p>
            <p className="three">
              <LiaShoppingBagSolid />
            </p>
          </div>
        </div>

        {/* ****************RIGHT CARD****************** */}
        <div className="right-card">
          <p className="brand">{product.brand}</p>
          <h6 className="card-heading">{product.name}</h6>
          <div className="star-rating d-flex align-items-center gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <FaRegStar />
          </div>
          <p className="special-price">
            &#x20A6; {product.price} &nbsp; <s>&#x20A6; 300,000</s>
          </p>
          <p className="special-days">
            <b>212</b> Days &nbsp; <span>05</span> &nbsp; <span>15</span> &nbsp;{" "}
            <span>20</span>
          </p>
          <div className="special-availability">
            <p>
              Available : <b>12</b>
            </p>
            <span>
              <ProgressBar
                completed={60}
                bgColor="green"
                height=".5rem"
                isLabelVisible={false}
              />
            </span>
          </div>
          <button>ADD TO CART</button>
        </div>
      </div>
    </SpecialProduct>
  );
};

const SpecialProduct = styled.div`
  width: calc(100% / 3.1);
  position: relative;
  .special-product-card {
    min-height: 36vh;
    height: fit-content;
    background-color: white;
    border-radius: 0.5rem;
    overflow: hidden;
    padding: 2rem 1rem;
    box-shadow: 0 0 10px #0000001a;
    display: flex;
    align-items: start;
    .add-to-cart {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      gap: 1rem;
      right: -5rem;
      top: 2.5rem;
      .one,
      .two,
      .three {
        font-size: 1rem;
        margin-bottom: 0;
        padding: 0.2rem 0.2rem;
        cursor: pointer;
        transition: var(--transition);
        &:hover {
          font-size: 1rem;
          margin-bottom: 0;
          cursor: pointer;
          background: var(--bg-logo);
          border-radius: 100%;
          padding: 0.2rem 0.2rem;
          transition: var(--transition);
        }
      }
    }

    &:hover {
      .add-to-cart {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        gap: 1rem;
        right: 0.5rem;
        top: 2.5rem;
        transition: var(--transition);
      }
    }
  }
  .left-card {
    width: calc(100% / 2);
    position: relative;
    overflow: hidden;
    .main-image {
      width: 10rem;
      height: 12rem;
      overflow: hidden;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-top: 2rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }
    .sub-image {
      display: flex;
      width: 100%;
      height: 7rem;
      align-items: center;
      justify-content: space-between;
      overflow: hidden;
      .s-image {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid var(--bg-grey);
        border-radius: 0.5rem;
        padding: 0.5rem 0.8rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }
      }
    }
    .discount-favourite {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0rem 0.5rem;
      position: absolute;
      top: 0rem;
      left: 0;
      .percentage {
        font-size: 0.6rem;
        font-weight: bolder;
        background: var(--bg-logo);
        padding: 0.2rem;
        border-radius: 0.5rem;
      }
      p {
        font-size: 1rem;
        letter-spacing: 1px;
      }
    }
  }
  .right-card {
    padding: 0.1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.2rem;
    .brand {
      color: var(--bg-logo2);
      font-size: 0.8rem;
      margin-bottom: 0;
    }
    .card-heading {
      margin-bottom: 0;
    }
    .special-price {
      font-size: 0.8rem;
      margin-bottom: 0;
      color: red;
      s {
        color: black;
      }
    }
    .special-days {
      font-size: 0.6rem;
      margin-bottom: 0;
      span {
        color: white;
        background: red;
        padding: 0.4rem;
        border-radius: 100%;
      }
    }
    .special-availability {
      p {
        margin-bottom: 0;
      }
    }
    .star-rating {
      font-size: 0.8rem;
      margin-bottom: 0rem;
      color: gold;
    }
    button {
      color: white;
      background: var(--bg-one);
      font-size: 0.8rem;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      transition: var(--transition);
      &:hover {
        background: var(--bg-two);
        transition: var(--transition);
      }
    }
  }

  @media screen and (max-width: 1200px) {
    width: 48.5%;
  position: relative;
  .special-product-card {
    min-height: 36vh;
    height: fit-content;
    background-color: white;
    border-radius: 0.5rem;
    overflow: hidden;
    padding: 2rem 1rem;
    box-shadow: 0 0 10px #0000001a;
    display: flex;
    align-items: start;
    .add-to-cart {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      gap: 1rem;
      right: -5rem;
      top: 2.5rem;
      .one,
      .two,
      .three {
        font-size: 1rem;
        margin-bottom: 0;
        padding: 0.2rem 0.2rem;
        cursor: pointer;
        transition: var(--transition);
        &:hover {
          font-size: 1rem;
          margin-bottom: 0;
          cursor: pointer;
          background: var(--bg-logo);
          border-radius: 100%;
          padding: 0.2rem 0.2rem;
          transition: var(--transition);
        }
      }
    }

    &:hover {
      .add-to-cart {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        gap: 1rem;
        right: 0.5rem;
        top: 2.5rem;
        transition: var(--transition);
      }
    }
  }
  .left-card {
    width: calc(100% / 2);
    position: relative;
    overflow: hidden;
    .main-image {
      width: 10rem;
      height: 12rem;
      overflow: hidden;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-top: 2rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }
    .sub-image {
      display: flex;
      width: 100%;
      height: 7rem;
      align-items: center;
      justify-content: space-between;
      overflow: hidden;
      .s-image {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid var(--bg-grey);
        border-radius: 0.5rem;
        padding: 0.5rem 0.8rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }
      }
    }
    .discount-favourite {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0rem 0.5rem;
      position: absolute;
      top: 0rem;
      left: 0;
      .percentage {
        font-size: 0.6rem;
        font-weight: bolder;
        background: var(--bg-logo);
        padding: 0.2rem;
        border-radius: 0.5rem;
      }
      p {
        font-size: 1rem;
        letter-spacing: 1px;
      }
    }
  }
  .right-card {
    padding: 0.1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.2rem;
    .brand {
      color: var(--bg-logo2);
      font-size: 0.8rem;
      margin-bottom: 0;
    }
    .card-heading {
      margin-bottom: 0;
    }
    .special-price {
      font-size: 0.8rem;
      margin-bottom: 0;
      color: red;
      s {
        color: black;
      }
    }
    .special-days {
      font-size: 0.6rem;
      margin-bottom: 0;
      span {
        color: white;
        background: red;
        padding: 0.4rem;
        border-radius: 100%;
      }
    }
    .special-availability {
      p {
        margin-bottom: 0;
      }
    }
    .star-rating {
      font-size: 0.8rem;
      margin-bottom: 0rem;
      color: gold;
    }
    button {
      color: white;
      background: var(--bg-one);
      font-size: 0.8rem;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      transition: var(--transition);
      &:hover {
        background: var(--bg-two);
        transition: var(--transition);
      }
    }}
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    position: relative;
    .special-product-card {
      min-height: 36vh;
      height: fit-content;
      background-color: white;
      border-radius: 0.5rem;
      overflow: hidden;
      padding: 2rem 1rem;
      box-shadow: 0 0 10px #0000001a;
      display: flex;
      align-items: start;
      .add-to-cart {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        gap: 1rem;
        right: -5rem;
        top: 2.5rem;
        .one,
        .two,
        .three {
          font-size: 1rem;
          margin-bottom: 0;
          padding: 0.2rem 0.2rem;
          cursor: pointer;
          transition: var(--transition);
          &:hover {
            font-size: 1rem;
            margin-bottom: 0;
            cursor: pointer;
            background: var(--bg-logo);
            border-radius: 100%;
            padding: 0.2rem 0.2rem;
            transition: var(--transition);
          }
        }
      }

      &:hover {
        .add-to-cart {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          gap: 1rem;
          right: 0.5rem;
          top: 2.5rem;
          transition: var(--transition);
        }
      }
    }
    .left-card {
      width: calc(100% / 2);
      position: relative;
      overflow: hidden;
      .main-image {
        width: 10rem;
        height: 12rem;
        overflow: hidden;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 2rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }
      }
      .sub-image {
        display: flex;
        width: 100%;
        height: 7rem;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        .s-image {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid var(--bg-grey);
          border-radius: 0.5rem;
          padding: 0.5rem 0.8rem;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
        }
      }
      .discount-favourite {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0rem 0.5rem;
        position: absolute;
        top: 0rem;
        left: 0;
        .percentage {
          font-size: 0.6rem;
          font-weight: bolder;
          background: var(--bg-logo);
          padding: 0.2rem;
          border-radius: 0.5rem;
        }
        p {
          font-size: 1rem;
          letter-spacing: 1px;
        }
      }
    }
    .right-card {
      padding: 0.1rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 1.2rem;
      .brand {
        color: var(--bg-logo2);
        font-size: 0.8rem;
        margin-bottom: 0;
      }
      .card-heading {
        margin-bottom: 0;
      }
      .special-price {
        font-size: 0.8rem;
        margin-bottom: 0;
        color: red;
        s {
          color: black;
        }
      }
      .special-days {
        font-size: 0.6rem;
        margin-bottom: 0;
        span {
          color: white;
          background: red;
          padding: 0.4rem;
          border-radius: 100%;
        }
      }
      .special-availability {
        p {
          margin-bottom: 0;
        }
      }
      .star-rating {
        font-size: 0.8rem;
        margin-bottom: 0rem;
        color: gold;
      }
      button {
        color: white;
        background: var(--bg-one);
        font-size: 0.8rem;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        transition: var(--transition);
        &:hover {
          background: var(--bg-two);
          transition: var(--transition);
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    position: relative;
    .special-product-card {
      min-height: 36vh;
      height: fit-content;
      background-color: white;
      border-radius: 0.5rem;
      overflow: hidden;
      padding: 2rem 1rem;
      box-shadow: 0 0 10px #0000001a;
      display: flex;
      align-items: start;
      .add-to-cart {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        gap: 1rem;
        right: -5rem;
        top: 2.5rem;
        .one,
        .two,
        .three {
          font-size: 1rem;
          margin-bottom: 0;
          padding: 0.2rem 0.2rem;
          cursor: pointer;
          transition: var(--transition);
          &:hover {
            font-size: 1rem;
            margin-bottom: 0;
            cursor: pointer;
            background: var(--bg-logo);
            border-radius: 100%;
            padding: 0.2rem 0.2rem;
            transition: var(--transition);
          }
        }
      }

      &:hover {
        .add-to-cart {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          gap: 1rem;
          right: 0.5rem;
          top: 2.5rem;
          transition: var(--transition);
        }
      }
    }
    .left-card {
      width: calc(100% / 2);
      position: relative;
      overflow: hidden;
      .main-image {
        width: 10rem;
        height: 12rem;
        overflow: hidden;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 2rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }
      }
      .sub-image {
        display: flex;
        width: 100%;
        height: 7rem;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        .s-image {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid var(--bg-grey);
          border-radius: 0.5rem;
          padding: 0.5rem 0.8rem;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
          }
        }
      }
      .discount-favourite {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0rem 0.5rem;
        position: absolute;
        top: 0rem;
        left: 0;
        .percentage {
          font-size: 0.6rem;
          font-weight: bolder;
          background: var(--bg-logo);
          padding: 0.2rem;
          border-radius: 0.5rem;
        }
        p {
          font-size: 1rem;
          letter-spacing: 1px;
        }
      }
    }
    .right-card {
      padding: 0.1rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content:space-between;
      width:70%;
      gap: 1.2rem;
      .brand {
        color: var(--bg-logo2);
        font-size: 0.8rem;
        margin-bottom: 0;
      }
      .card-heading {
        margin-bottom: 0;
      }
      .special-price {
        font-size: 0.8rem;
        margin-bottom: 0;
        color: red;
        s {
          color: black;
        }
      }
      .special-days {
        font-size: 0.6rem;
        margin-bottom: 0;
        span {
          color: white;
          background: red;
          padding: 0.4rem;
          border-radius: 100%;
        }
      }
      .special-availability {
        p {
          margin-bottom: 0;
        }
      }
      .star-rating {
        font-size: 0.8rem;
        margin-bottom: 0rem;
        color: gold;
      }
      button {
        color: white;
        background: var(--bg-one);
        font-size: 0.8rem;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        transition: var(--transition);
        &:hover {
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
export default SpecialProductCard;
