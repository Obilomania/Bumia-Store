import React from "react";
import styled from "styled-components";
import {  FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoIosShuffle } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const FeaturedProduct = ({ product, addItem, addItemToWishList }) => {
  const navigate = useNavigate()
  const userName = localStorage.getItem("userName");

  return (
    <FeaturedProductCard>
      <div key={product.id} className="main-card-content">
        <div className="product-image">
          {" "}
          <img src={product.images[0].url} alt="" />
        </div>
        <div className="card-content">
          <p className="product-brand">{product.brand}</p>
          <h6 className="product-title">{product?.title}</h6>
          <div className="star-rating d-flex align-items-center gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <FaRegStar />
          </div>
          <p className="product-price">&#x20A6;{product.price}</p>
        </div>
        <div className="discount-favourite ">
          <p className="percentage">-50%</p>
          <p onClick={() => addItemToWishList(product)} style={{ cursor: "pointer" }}>
            {/* {!loveToRed ? <FiHeart /> : <FaHeart style={{ color: "red" }} />} */}
           {userName && <FiHeart />}
          </p>
        </div>
        <div className="add-to-cart">
          <p className="one">
            <IoIosShuffle />
          </p>
          <p className="two" onClick={() => navigate(`/product/detail/${product._id}`)}>
            <FaRegEye />
          </p>
          <p className="three" onClick={() =>addItem(product)}>
            <LiaShoppingBagSolid />
          </p>
        </div>
      </div>
    </FeaturedProductCard>
  );
};

const FeaturedProductCard = styled.div`
  width: 16%;
  min-height: 18rem;
  background-color: white;
  border-radius: 0.5rem;
  padding: 0.8rem 0;
  box-shadow: 0 0 10px #0000001a;
  position: relative;
  overflow: hidden;
  transition: var(--transition);
  .main-card-content {
    .add-to-cart {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      gap: 1rem;
      right: -5rem;
      top: 3rem;
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
        right: 1rem;
        top: 3rem;
        transition: var(--transition);
      }
    }
  }
  .product-brand {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    color: var(--bg-logo2);
  }
  .product-image {
    width: 100%;
    height: 100%;
    transition: var(--transition);
    p {
      font-size: 0.8rem;
    }
    img {
      width: 100%;
    }
  }
  .product-price {
    font-size: 0.8rem;
  }
  .card-content {
    padding: 0 1rem;
    .star-rating {
      font-size: 0.8rem;
      margin-bottom: 0.6rem;
      color: gold;
    }
  }
  .product-title {
    min-height: 3rem;
  }
  .discount-favourite {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    position: absolute;
    top: 1rem;
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
  @media screen and (max-width: 1200px) {
    width: 16%;
    min-height: 18rem;
    background-color: white;
    border-radius: 0.5rem;
    padding: 0.8rem 0;
    box-shadow: 0 0 10px #0000001a;
    position: relative;
    overflow: hidden;
    transition: var(--transition);
    .main-card-content {
      .add-to-cart {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        gap: 1rem;
        right: -5rem;
        top: 3rem;
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
          right: 1rem;
          top: 3rem;
          transition: var(--transition);
        }
      }
    }
    .product-brand {
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
      color: var(--bg-logo2);
    }
    .product-image {
      width: 100%;
      height: 100%;
      transition: var(--transition);
      p {
        font-size: 0.8rem;
      }
      img {
        width: 100%;
      }
    }
    .product-price {
      font-size: 0.8rem;
    }
    .card-content {
      padding: 0 1rem;
      .star-rating {
        font-size: 0.8rem;
        margin-bottom: 0.6rem;
        color: gold;
      }
    }
    .product-title {
      min-height: 3.5rem;
    }
    .discount-favourite {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      position: absolute;
      top: 1rem;
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
  @media screen and (max-width: 900px) {
  }
  @media screen and (max-width: 600px) {
    width: 48%;
    min-height: 18rem;
    background-color: white;
    border-radius: 0.5rem;
    padding: 0.8rem 0;
    box-shadow: 0 0 10px #0000001a;
    position: relative;
    overflow: hidden;
    transition: var(--transition);
    .main-card-content {
      width: 100%;
      .add-to-cart {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        gap: 1rem;
        right: -5rem;
        top: 3rem;
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
          right: 1rem;
          top: 3rem;
          transition: var(--transition);
        }
      }
    }
    .product-brand {
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
      color: var(--bg-logo2);
    }
    .product-image {
      width: 100%;
      height: 100%;
      transition: var(--transition);
      p {
        font-size: 0.8rem;
      }
      img {
        width: 100%;
      }
    }
    .product-price {
      font-size: 0.8rem;
    }
    .card-content {
      padding: 0 1rem;
      .star-rating {
        font-size: 0.8rem;
        margin-bottom: 0.6rem;
        color: gold;
      }
    }
    .product-title {
      min-height: 2rem;
    }
    .discount-favourite {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      position: absolute;
      top: 1rem;
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
  @media screen and (max-width: 420px) {
    width: 48%;
    min-height: 18rem;
    background-color: white;
    border-radius: 0.5rem;
    padding: 0.8rem 0;

    box-shadow: 0 0 10px #0000001a;
    position: relative;
    overflow: hidden;
    transition: var(--transition);
    .main-card-content {
      width: 100%;
      .add-to-cart {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        gap: 1rem;
        right: -5rem;
        top: 3rem;
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
          right: 1rem;
          top: 3rem;
          transition: var(--transition);
        }
      }
    }
    .product-brand {
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
      color: var(--bg-logo2);
    }
    .product-image {
      width: 100%;
      height: 100%;
      transition: var(--transition);
      p {
        font-size: 0.8rem;
      }
      img {
        width: 100%;
      }
    }
    .product-price {
      font-size: 0.8rem;
    }
    .card-content {
      padding: 0 1rem;
      .star-rating {
        font-size: 0.8rem;
        margin-bottom: 0.6rem;
        color: gold;
      }
    }
    .product-title {
      min-height: 3rem;
    }
    .discount-favourite {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      position: absolute;
      top: 1rem;
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
  @media screen and (max-width: 350px) {
  }
`;
export default FeaturedProduct;
