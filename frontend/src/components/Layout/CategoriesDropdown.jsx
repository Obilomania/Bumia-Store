import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PowerBankIMG from "../../assets/images/powerbank.jpg";
import MouseIMG from "../../assets/images/mouse.jpg";
import FlsashDriveIMG from "../../assets/images/flashdrive.jpg";
import FridgeIMG from "../../assets/images/fridge.jpg";
import { FaStar } from "react-icons/fa6";

const CategoriesDropdown = ({ categoryHover, setCategoryHover }) => {
  const navigate = useNavigate();
  const HoverCategoryEnter = () => {
    setCategoryHover(true);
  };
  const HoverCategoryLeave = () => {
    setCategoryHover(false);
  };
  return (
    <DropDownCategory>
      <div
        className={
          categoryHover ? "open-category-content" : "the-open-category-vanish"
        }
        onMouseEnter={HoverCategoryEnter}
        onMouseLeave={HoverCategoryLeave}
      >
        <div className="left">
          <div className="appliances">
            <p onClick={() => navigate("/")} className="small-heading mb-2">
              Watches
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              Smart Watches
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              Rolex Watches
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              Omega Watches
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              Cartier Watches
            </p>
          </div>
          <div className="phones">
            <p onClick={() => navigate("/")} className="small-heading mb-2">
              Speakers
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              Yamaha Speakers
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              Sonos Speakers
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              RCF Speakers
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              Party Speakers
            </p>
          </div>
          <div className="appliances">
            <p onClick={() => navigate("/")} className="small-heading mb-2">
              Laptops
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              Apple Laptops
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              Dell Laptops
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              HP Laptops
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              Lenovo Laptops
            </p>
          </div>
          <div className="phones">
            <p onClick={() => navigate("/")} className="small-heading mb-2">
              Television
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              Panasonic TV
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              Sony TV
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              Samsung TV
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              Hisense TV
            </p>
          </div>
          <div className="appliances">
            <p onClick={() => navigate("/")} className="small-heading mb-2">
              Electronics
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              Applicances
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              Watches
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              Laptops
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              Others
            </p>
          </div>
          <div className="phones">
            <p onClick={() => navigate("/")} className="small-heading mb-2">
              Gaming
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              Headphones
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              Gaming Boards
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              Gaming Mouse
            </p>
            <p onClick={() => navigate("/")} className="font-small mb-2">
              Video Gams
            </p>
          </div>
        </div>
        <div className="right">
          <p className="small-heading text-center">Appliances</p>
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
                <img src={FlsashDriveIMG} alt="card-img" />
              </div>
              <div className="right-card-content">
                <Link to={"/"} className="card-heading">
                  Phonokart USB Type C OTG Pendrive Cable
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
                <img src={MouseIMG} alt="card-img" />
              </div>
              <div className="right-card-content">
                <Link to={"/"} className="card-heading">
                  Logitech M350 WHITE Optical Wireless Mouse
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
          </div>
        </div>
      </div>
    </DropDownCategory>
  );
};

const DropDownCategory = styled.div`
  .open-category-content {
    width: 100%;
    height: 36vh;
    box-shadow: 0 0 10px #0000001a;
    border-radius: 0.3rem;
    color: var(--bg-one);
    display: flex;
    align-items: start;
    justify-content: space-between;
    padding-top: 1rem;
    .left {
      background: white;
      height: 100%;
      width: 50%;
      padding: 1rem 1.5rem;
      display: flex;
      align-items: start;
      justify-content: space-between;
      flex-wrap: wrap;
      .appliances,
      .phones {
        flex: 0 0 calc(33.333% - 10px);
        margin-bottom: 1rem;
        height: 50%;
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
              min-height: 2rem;
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
  .the-open-category-vanish {
    display: none;
  }
`;

export default CategoriesDropdown;
