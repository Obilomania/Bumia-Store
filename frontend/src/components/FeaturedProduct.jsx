import React from "react";
import styled from "styled-components";
import productIMG from "../assets/images/tab.jpg";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";


const FeaturedProduct = ({product}) => {
  return (
    <FeaturedProductCard>
      <div key={product.id}>
        <div className="product-image">
          {" "}
          <img src={productIMG} alt="" />
        </div>
        <div className="card-content">
          <p className="product-brand">Sony</p>
          <h6 className="product-title">{product?.name}</h6>
          <div className="star-rating d-flex align-items-center gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <FaRegStar />
          </div>
          <p className="product-price">&#x20A6;180,000</p>
        </div>
        <div className="discount-favourite ">
          <p className="percentage">-50%</p>
          <p>
            <FiHeart />
          </p>
        </div>
      </div>
    </FeaturedProductCard>
  );
};

const FeaturedProductCard = styled.div`
  width: 19%;
  background-color: white;
  border-radius: 0.8rem;
  padding: 0;
  box-shadow: 0 0 10px #0000001a;
  position: relative;
  .product-brand {
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
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
      border-top-right-radius: 0.8rem;
      border-top-left-radius: 0.8rem;
    }
  }
  .product-price{
    font-size:.8rem;
  } .card-content {
    padding: 0 1rem;
    .star-rating {
      font-size: 0.8rem;
      margin-bottom: 0.6rem;
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
