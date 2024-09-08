 import React from "react";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";
import { FaRegEye, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoIosShuffle } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const StoreList = ({product}) => {
  const navigate = useNavigate()
  return (
    <StoreProductList>
      <div className="list-img">
        <img src={product?.image} alt="" />
      </div>
      <div className="store-list-content">
        <div className="list-top">
          <p className="list-brand">{product.brand}</p>
          <p>
            <span className="percentage">50%</span>
            <FiHeart />
          </p>
        </div>
        <div className="list-middle">
          <h3 className="filter-title">{product.name}</h3>
          <div className="stars">
            <p>
              <FaStar />
            </p>
            <p>
              <FaStar />
            </p>
            <p>
              <FaStar />
            </p>
            <p>
              <FaStarHalfAlt />
            </p>
            <p>
              <FaRegStar />
            </p>
          </div>
        </div>
        <div className="list-bottom">
          <p className="list-price">&#x20A6; {product.price}</p>
          <div className="to-cart">
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
      </div>
    </StoreProductList>
  );
};

const StoreProductList = styled.div`
  background: white;
  width: 100%;
  padding: 0.3rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px #0000001a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .list-img {
    width: 7rem;
    height: 7rem;
    overflow: hidden;
    border: 5px solid var(--bg-grey);
    border-radius: 0.5rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
  .store-list-content {
    width: 100%;
    padding: 1rem;
    .list-top {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .percentage {
        font-size: 0.6rem;
        font-weight: bolder;
        background: var(--bg-logo);
        padding: 0.2rem;
        border-radius: 0.5rem;
        margin-right: 1.5rem;
      }
      .list-brand {
        font-size: 0.8rem;
        color: red;
        font-weight: 500;
      }
    }
  }
  .list-middle {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .stars {
      margin-bottom: 0rem;
      color: gold;
      display: flex;
      gap: 0.5rem;
      font-size: 0.8rem;
    }
  }
  .list-bottom {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .to-cart {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      p {
        font-size: 1rem;
        cursor:pointer;
      }
    }
  }
`;
export default StoreList;
