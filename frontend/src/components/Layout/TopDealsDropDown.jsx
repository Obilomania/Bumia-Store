import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import WatchIMG from "../../assets/images/watches.jpg";
import Headphone from "../../assets/images/Headphones.jpg";
import Earbud from "../../assets/images/EarBuds.jpg";
import Phones from "../../assets/images/Phones.jpg";
import Speakers from "../../assets/images/Speakers.jpg";
import Tablet from "../../assets/images/tab.jpg";
import Gaming from "../../assets/images/Gaming.jpg";
import Cameras from "../../assets/images/Cameras.jpg";
import { FaStar } from "react-icons/fa6";
import PowerBankIMG from "../../assets/images/powerbank.jpg";
import SamsungR6 from "../../assets/images/SamsungR6.jpg";
import FridgeIMG from "../../assets/images/fridge.jpg";
import Printer from "../../assets/images/HP Laser Jet.jpg";


const TopDealsDropDown = ({ topDealsHover, setTopDealsHover }) => {
  const navigate = useNavigate();
  const HoverTopDealsEnter = () => {
    setTopDealsHover(true);
  };
  const HoverTopDealsLeave = () => {
    setTopDealsHover(false);
  };
  return (
    <DropDownTopDeals>
      <div
        className={
          topDealsHover ? "top-deals-content" : "top-deals-content-vanish"
        }
        onMouseEnter={HoverTopDealsEnter}
        onMouseLeave={HoverTopDealsLeave}
      >
        <div className="left">
          <p onClick={() => navigate("/")} className="small-heading mb-2">
            Shop By
          </p>
          <div className="top-deal-left-content">
            <div className="a-one">
              <div className="img">
                <img src={WatchIMG} alt="product-icon" />
              </div>
              <p onClick={() => navigate("/")} className="small-heading mb-2">
                Watches
              </p>
            </div>
            <div className="a-one">
              <div className="img">
                <img src={Headphone} alt="product-icon" />
              </div>
              <p onClick={() => navigate("/")} className="small-heading mb-2">
                Headphones
              </p>
            </div>
            <div className="a-one">
              <div className="img">
                <img src={Earbud} alt="product-icon" />
              </div>
              <p onClick={() => navigate("/")} className="small-heading mb-2">
                Ear Buds
              </p>
            </div>
            <div className="a-one">
              <div className="img">
                <img src={Phones} alt="product-icon" />
              </div>
              <p onClick={() => navigate("/")} className="small-heading mb-2">
                Phones
              </p>
            </div>
            <div className="a-one">
              <div className="img">
                <img src={Speakers} alt="product-icon" />
              </div>
              <p onClick={() => navigate("/")} className="small-heading mb-2">
                Speakers
              </p>
            </div>
            <div className="a-one">
              <div className="img">
                <img src={Tablet} alt="product-icon" />
              </div>
              <p onClick={() => navigate("/")} className="small-heading mb-2">
                Tablets
              </p>
            </div>
            <div className="a-one">
              <div className="img">
                <img src={Gaming} alt="product-icon" />
              </div>
              <p onClick={() => navigate("/")} className="small-heading mb-2">
                Gaming
              </p>
            </div>
            <div className="a-one">
              <div className="img">
                <img src={Cameras} alt="product-icon" />
              </div>
              <p onClick={() => navigate("/")} className="small-heading mb-2">
                Cameras
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <p className="small-heading text-center">Top Deals</p>
          <div className="right-content">
            <div className="right-card">
              <div className="img">
                <img src={PowerBankIMG} alt="card-img" />
              </div>
              <div className="right-card-content">
                <Link to={"/"} className="card-heading">
                  Vybrix Magnetic Power Bank Wireless Charging
                </Link>
                <div className="star-rating d-flex align-items-center gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="right-content-price">&#x20A6; 25,000</p>
              </div>
            </div>
            <div className="right-card">
              <div className="img">
                <img src={SamsungR6} alt="card-img" />
              </div>
              <div className="right-card-content">
                <Link to={"/"} className="card-heading">
                  Samsung R6 Wireless 360&deg; Multiroom Speaker
                </Link>
                <div className="star-rating d-flex align-items-center gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="right-content-price">&#x20A6; 18,500</p>
              </div>
            </div>
            <div className="right-card">
              <div className="img">
                <img src={Gaming} alt="card-img" />
              </div>
              <div className="right-card-content">
                <Link to={"/"} className="card-heading">
                  Microwave 9 Cap DualSense Wireless Controller
                </Link>
                <div className="star-rating d-flex align-items-center gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="right-content-price">&#x20A6; 80,000</p>
              </div>
            </div>
            <div className="right-card">
              <div className="img">
                <img src={FridgeIMG} alt="card-img" />
              </div>
              <div className="right-card-content">
                <Link to={"/"} className="card-heading">
                  LG 674 litres Side by Side Refrigerator, Noble Steel
                </Link>
                <div className="star-rating d-flex align-items-center gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="right-content-price">&#x20A6; 325,000</p>
              </div>
            </div>
            <div className="right-card">
              <div className="img">
                <img src={Tablet} alt="card-img" />
              </div>
              <div className="right-card-content">
                <Link to={"/"} className="card-heading">
                  Lenovo Tab M9 Tablet 4GB RAM 64GB
                </Link>
                <div className="star-rating d-flex align-items-center gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="right-content-price">&#x20A6; 325,000</p>
              </div>
            </div>
            <div className="right-card">
              <div className="img">
                <img src={Printer} alt="card-img" />
              </div>
              <div className="right-card-content">
                <Link to={"/"} className="card-heading">
                  HP LaserJet p1108 Mono Single Function Laser Printer
                </Link>
                <div className="star-rating d-flex align-items-center gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="right-content-price">&#x20A6; 325,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DropDownTopDeals>
  );
};

const DropDownTopDeals = styled.div`
  .top-deals-content {
    width: 100%;
    height: 52vh;
    box-shadow: 0 0 10px #0000001a;
    border-radius: 0.3rem;
    color: var(--bg-one);
    display: flex;
    align-items: start;
    justify-content: space-between;
    padding-top: 1rem;
    .left {
      height: 100%;
      width: 50%;
      padding: 1rem 1.5rem;
      display: flex;
      align-items: center;
      gap: 2rem;
      flex-direction: column;
      .top-deal-left-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        height: 90%;
        .a-one {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 0.5rem;
          width: 24%;
          margin-bottom: 3rem;
          .small-heading {
            font-size: 0.8rem;
            font-weight: 500;
          }
          .img {
            width: 8rem;
            border-radius: 100%;
            overflow: hidden;
            border: 3px solid var(--bg-grey);
            transition: var(--transition);
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
          &:hover {
            .img {
              border: 5px solid #c9c7c7;
              transition: var(--transition);
            }
          }
        }
      }
    }
    .right {
      width: 50%;
      height: 100%;
      background: var(--bg-grey);
      padding: 1rem 1.5rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.5rem;
      .right-content {
        width: 100%;
        display: flex;
        align-items: start;
        flex-wrap: wrap;
        justify-content: space-between;
        .right-card {
          display: flex;
          align-items: start;
          width: 48%;
          margin-bottom: 1.5rem;
          background: white;
          border-radius: 0.5rem;
          padding: 0.8rem 1rem;
          .img {
            width: 5rem;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .right-card-content {
            display: flex;
            align-items: start;
            flex-direction: column;
            justify-content: space-between;
            gap: 0.5rem;
            .card-heading {
              font-weight: 500;
              font-size: 0.8rem;
              color: black;
              transition: var(--transition);
              min-height: 2.5rem;
              &:hover {
                color: var(--bg-logo);
                transition: var(--transition);
              }
            }
            .star-rating {
              font-size: 0.8rem;
              color: lightgray;
            }
            .right-content-price {
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
  .top-deals-content-vanish {
    display: none;
  }
`;
export default TopDealsDropDown;
