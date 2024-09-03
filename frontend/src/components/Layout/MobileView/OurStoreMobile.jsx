import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import OurStoreImage1 from "../../../assets/images/shop-banner-01.jpg";
import OurStoreImage2 from "../../../assets/images/shop-banner-02.jpg";

const OurStoreMobile = () => {
  const navigate = useNavigate();

  return (
    <MobileDropDown>
      <div className="the-open-content">
        <div className="the-top">
          <div className="appliances">
            <p onClick={() => navigate("/")} className="small-heading ">
              Appliances
            </p>
            <p onClick={() => navigate("/")} className="font-small ">
              Scan Printers
            </p>
            <p onClick={() => navigate("/")} className="font-small ">
              Mini Cameras
            </p>
            <p onClick={() => navigate("/")} className="font-small ">
              Chargers
            </p>
            <p onClick={() => navigate("/")} className="font-small ">
              Tablets
            </p>
            <p onClick={() => navigate("/")} className="font-small ">
              Wireless Mouuse
            </p>
          </div>
          <div className="phones">
            <p onClick={() => navigate("/")} className="small-heading ">
              Phones
            </p>
            <p onClick={() => navigate("/")} className="font-small ">
              Ear buds
            </p>
            <p onClick={() => navigate("/")} className="font-small ">
              Android Phones
            </p>
            <p onClick={() => navigate("/")} className="font-small ">
              Smart Phones
            </p>
            <p onClick={() => navigate("/")} className="font-small ">
              Wired Earbuds
            </p>
          </div>
        </div>
        <div className="image1">
          <div className="the-img1">
            <img src={OurStoreImage1} alt="" />
          </div>
          <div className="the-content">
            <p className="offer">OFFER</p>
            <h4 className="write-up">
              Flast 80% <br />
              OFF
            </h4>
          </div>
        </div>
        <div className="image2">
          <div className="the-img1">
            <img src={OurStoreImage2} alt="" />
          </div>
          <div className="the-content">
            <p className="offer">SPECIAL OFFER</p>
            <h4 className="write-up">UP to 30% OFF</h4>
            <h5 className="arrival">New Arrivals</h5>
          </div>
        </div>
      </div>
    </MobileDropDown>
  );
};

const MobileDropDown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 0.8rem;

  .the-open-content {
    width: 100%;
    height: fit-content;
    box-shadow: 0 0 10px #0000001a;
    border-radius: 0.3rem;
    color: var(--bg-one);
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    .the-top {
      display: flex;
      align-items: start;
      justify-content: space-between;
      width: 100%;
      .small-heading {
        font-size: 0.8rem;
      }
      .appliances,
      .phones {
        width: 100%;
        padding: 0.5rem 0.5rem;
        p {
          cursor: pointer;
          transition: var(--transition);
          width: 100%;
          margin-bottom: 0;
          padding: 0;
          font-size: 13px;
          border: none;
          &:hover {
            transition: var(--transition);
            color: var(--bg-logo);
          }
        }
      }
    }
    .image1 {
      position: relative;
      height: 10.5rem;
      overflow: hidden;
      border-radius: 0.5rem;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: center;
      }
      .the-content {
        position: absolute;
        top: 15%;
        left: 5%;
        .offer {
          font-size: 0.7rem;
          background: white;
          border-radius: 0.3rem;
          width: fit-content;
          margin-bottom: 0.3rem;
          padding: 0.2rem;
        }
        .write-up {
          font-weight: 500;
          font-size: 1rem;
        }
      }
    }
    .image2 {
      position: relative;
      height: fit-content;
      overflow: hidden;
      border-radius: 0.5rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: center;
      }
      .the-content {
        position: absolute;
        top: 8%;
        left: 5%;
        .offer {
          font-size: 0.7rem;
          background: white;
          border-radius: 0.3rem;
          width: fit-content;
          margin-bottom: 0rem;
          padding: 0.2rem;
        }
        .write-up {
          font-weight: 500;
          font-size: 1rem;
          margin-bottom:-.4rem;
        }
        .arrival {
          font-weight: 400;
          font-size: 1rem;
        }
      }
    }
  }
`;
export default OurStoreMobile;
