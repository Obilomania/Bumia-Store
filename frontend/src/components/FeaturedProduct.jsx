import React from "react";
import styled from "styled-components";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoIosShuffle } from "react-icons/io";

const FeaturedProduct = ({ product }) => {
  return (
    <FeaturedProductCard>
      <div key={product.id} className="main-card-content">
        <div className="product-image">
          {" "}
          <img src={product.image} alt="" />
        </div>
        <div className="card-content">
          <p className="product-brand">{product.brand}</p>
          <h6 className="product-title">{product?.name}</h6>
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
          <p>
            <FiHeart />
          </p>
        </div>
        <div className="add-to-cart">
          <p className="one">
            <IoIosShuffle />
          </p>
          <p className="two">
            <FaRegEye />
          </p>
          <p className="three">
            <LiaShoppingBagSolid />
          </p>
        </div>
      </div>
    </FeaturedProductCard>
  );
};

const FeaturedProductCard = styled.div`
  width: 16%;
  background-color: white;
  border-radius: 0.5rem;
  padding: 0;
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
        padding: 0.2rem  0.2rem;
        cursor: pointer;
        transition: var(--transition);
        &:hover {
          font-size: 1rem;
          margin-bottom: 0;
          cursor: pointer;
          background: var(--bg-logo);
          border-radius: 100%;
          padding: 0.2rem  0.2rem;
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
    color:var(--bg-logo2);
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
`;
export default FeaturedProduct;
