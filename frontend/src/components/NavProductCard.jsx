import React from 'react'
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaRegEye, FaRegStar, FaStar } from 'react-icons/fa6';
import { FiHeart } from 'react-icons/fi';
import { IoIosShuffle } from 'react-icons/io';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const NavProductCard = ({ product }) => {
  const navigate = useNavigate();
    
  return (
    <NavCard>
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
          <p className="percentage">SALE</p>
        </div>
        <div className="add-to-cart">
          <p className='heart'>
            <FiHeart />
          </p>
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
    </NavCard>
  );
}


const NavCard = styled.div`
  width: 16%;
  min-height: 24rem;
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
      gap: .7rem;
      right: -5rem;
      top: 1rem;
      .one,
      .two,
      .three,
      .heart {
        font-size: .8rem;
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
        gap: .7rem;
        right: 1rem;
        top: 1rem;
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
    position:relative;
    p {
      font-size: 0.8rem;
    }
    img {
      width: 100%;
      object-fit:contain;
      object-position:center;
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
    min-height: 1rem;
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
      background: #df3030;
      padding: 0.2rem;
      border-radius: 0.5rem;
      color:white;
    }
    p {
      font-size: 1rem;
      letter-spacing: 1px;
    }
  }
`;
export default NavProductCard