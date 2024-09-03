import React from "react";
import styled from "styled-components";
import watchSpecial from "../../../assets/images/watch-special.webp";
import phoneSpecial from "../../../assets/images/phone-special.webp";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const SpecialMobile = () => {
  return (
    <MobileSpecial>
      <p className="small-heading ">Special</p>
      <div className="cards">
        <div className="card">
          <div className="img">
            <img src={watchSpecial} alt="prod-icon" />
          </div>
          <p className="card-heading">SwapMe Braided...</p>
          <div className="star-rating d-flex align-items-center gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <FaRegStar /> &nbsp; (3.5)
          </div>
          <p className="price">&#x20A6; 160,000</p>
          <p className="sale-tag">Sale</p>
        </div>
        <div className="card">
          <div className="img">
            <img src={phoneSpecial} alt="prod-icon" />
          </div>
          <p className="card-heading">Oppo A16 64GB, 4GB...</p>
          <div className="star-rating d-flex align-items-center gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <FaRegStar /> &nbsp; (3.5)
          </div>
          <p className="price">&#x20A6; 325,000</p>
          <p className="sale-tag">Sale</p>
        </div>
      </div>
    </MobileSpecial>
  );
};

const MobileSpecial = styled.div`
  width: 100%;
  height: fit-content;
  box-shadow: 0 0 10px #0000001a;
  border-radius: 0.3rem;
  color: var(--bg-one);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: var(--bg-grey);
  padding-bottom: 1rem;
  .small-heading {
    font-size: 0.8rem;
  }
  .cards {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    p {
      border: none;
    }
  }
  .card {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    padding: 0.1rem;
    box-shadow: 0 0 10px #0000001a;
    overflow: hidden;
    width: 48%;
    .sale-tag {
      font-size: 0.6rem;
      background: #e62a65;
      padding: 3px 0.3rem;
      border-radius: 0.3rem;
      color: white;
      position: absolute;
      left: 0.7rem;
      top: 0.7rem;
    }
    .card-heading {
      font-size: 0.8rem;
      font-weight: 500;
    }
    .img {
      width: 8rem;
      height: 8rem;
      overflow: hidden;
      border: none;
      img {
        width: 100%;
        height: 100%;
        border: none;
      }
    }
    .star-rating {
      color: gold;
      font-size: 0.8rem;
    }
  }
`;
export default SpecialMobile;
