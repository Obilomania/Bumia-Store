import React from "react";
import styled from "styled-components";
import OurStoreImage1 from "../../assets/images/shop-banner-01.jpg";
import OurStoreImage2 from "../../assets/images/shop-banner-02.jpg";
import { useNavigate } from "react-router-dom";

const StoreDropDown = ({ setOurStoreHover, ourStoreHover }) => {
  const navigate = useNavigate();
  const HoverStoreEnter = () => {
    setOurStoreHover(true);
  };
  const HoverStoreLeave = () => {
    setOurStoreHover(false);
  };
  return (
    <StoreDwopdown>
      <div
        className={
          ourStoreHover ? "the-open-content" : "the-open-content-vanish"
        }
        onMouseEnter={HoverStoreEnter}
        onMouseLeave={HoverStoreLeave}
      >
        <div className="appliances">
          <p onClick={() => navigate("/")} className="small-heading mb-2">
            Appliances
          </p>
          <p onClick={() => navigate("/")} className="font-small mb-2">
            Scan Printers
          </p>
          <p onClick={() => navigate("/")} className="font-small mb-2">
            Mini Cameras
          </p>
          <p onClick={() => navigate("/")} className="font-small mb-2">
            Chargers
          </p>
          <p onClick={() => navigate("/")} className="font-small mb-2">
            Tablets
          </p>
          <p onClick={() => navigate("/")} className="font-small mb-2">
            Wireless Mouuse
          </p>
        </div>
        <div className="phones">
          <p onClick={() => navigate("/")} className="small-heading mb-2">
            Phones
          </p>
          <p onClick={() => navigate("/")} className="font-small mb-2">
            Ear buds
          </p>
          <p onClick={() => navigate("/")} className="font-small mb-2">
            Android Phones
          </p>
          <p onClick={() => navigate("/")} className="font-small mb-2">
            Smart Phones
          </p>
          <p onClick={() => navigate("/")} className="font-small mb-2">
            Wired Earbuds
          </p>
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
    </StoreDwopdown>
  );
};

const StoreDwopdown = styled.div`
  .the-open-content {
    width: 100%;
    height: fit-content;
    box-shadow: 0 0 10px #0000001a;
    border-radius: 0.3rem;
    padding: 2rem 1.5rem;
    color: var(--bg-one);
    display: flex;
    align-items: start;
    justify-content: space-between;
    .appliances,
    .phones {
      p {
        cursor: pointer;
        transition: var(--transition);
        &:hover {
          transition: var(--transition);
          color: var(--bg-logo);
        }
      }
    }
    .image1 {
      position: relative;
      height: 10.5rem;
      overflow: hidden;
      border-radius: 0.5rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: center;
      }
      .the-content {
        position: absolute;
        top: 25%;
        left: 10%;
        .offer {
          font-size: 0.8rem;
          background: white;
          border-radius: 0.3rem;
          width: fit-content;
          margin-bottom: 0.8rem;
        }
        .write-up {
          font-weight: 500;
        }
      }
    }
    .image2 {
      position: relative;
      height: 10.5rem;
      overflow: hidden;
      border-radius: 0.5rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: center;
      }
      .the-content {
        position: absolute;
        top: 25%;
        left: 10%;
        .offer {
          font-size: 0.8rem;
          background: white;
          border-radius: 0.3rem;
          width: fit-content;
          margin-bottom: 0.8rem;
        }
        .write-up {
          font-weight: 500;
        }
        .arrival {
          font-weight: 400;
        }
      }
    }
  }
  .the-open-content-vanish {
    display: none;
  }
`;
export default StoreDropDown;
