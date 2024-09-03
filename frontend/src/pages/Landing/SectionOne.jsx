import React from "react";
import styled from "styled-components";
import mainBannerIMG from "../../assets/images/main-banner-1.jpg";
import smallBannerOneIMG from "../../assets/images/catbanner-01.jpg";
import smallBannerTwoIMG from "../../assets/images/catbanner-02.jpg";
import smallBannerThreeIMG from "../../assets/images/catbanner-03.jpg";
import smallBannerFourIMG from "../../assets/images/catbanner-04.jpg";
// import { Link } from "react-router-dom";

const SectionOne = () => {
  return (
    <FirstSection>
      <div className="left">
        <div className="big-image">
          <img src={mainBannerIMG} alt="bannerIcon" />
        </div>
        <div className="big-image-content">
          <p className="superCharger">SUPERCHARGED FOR PROS</p>
          <h2>iPad S13+ Pro.</h2>
          <p className="big-desc">
            {" "}
            From $999.00 or $41.62/mo. <br /> for 24 mo. Footnote*{" "}
          </p>
          <button>BUY NOW</button>
        </div>
      </div>
      <div className="right">
        <div className="right-card">
          <div className="card-image">
            <img src={smallBannerOneIMG} alt="cardIcon" />
          </div>
          <div className="small-card-content">
            <p className="superCharger">BEST SALE</p>
            <h3 className="card-title">Laptops Max</h3>
            <p className="desc">
              From $1699.00 or <br /> $64.62/mo.
            </p>
          </div>
        </div>
        <div className="right-card">
          <div className="card-image">
            <img src={smallBannerThreeIMG} alt="cardIcon" />
          </div>
          <div className="small-card-content">
            <p className="superCharger">NEW ARRIVAL</p>
            <h3 className="card-title">Buy IPad Air</h3>
            <p className="desc">
              New Arrival Buy IPad Air From $599 or <br /> $49.91/mo. for 12 mo.
            </p>
          </div>
        </div>
        <div className="right-card">
          <div className="card-image">
            <img src={smallBannerTwoIMG} alt="cardIcon" />
          </div>
          <div className="small-card-content">
            <p className="superCharger">15% OFF</p>
            <h3 className="card-title">Smartwatch 7</h3>
            <p className="desc">
              Shop the latest band <br /> styles and colors.
            </p>
          </div>
        </div>
        <div className="right-card">
          <div className="card-image">
            <img src={smallBannerFourIMG} alt="cardIcon" />
          </div>
          <div className="small-card-content">
            <p className="superCharger">FREE ENGRAVING</p>
            <h3 className="card-title">AirPods Max</h3>
            <p className="desc">
              High-fidelity playback & <br /> ultra-low distortion
            </p>
          </div>
        </div>
      </div>
    </FirstSection>
  );
};

const FirstSection = styled.div`
  width: 100%;
  height: fit-content;
  padding: 3rem 8rem;
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1%;
  .left {
    width: 49.5%;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    z-index: 1;
    .big-image {
      position: relative;
    }
    .big-image-content {
      position: absolute;
      z-index: 5;
      top: 4rem;
      left: 3rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .superCharger {
        font-size: 1.2rem;
        letter-spacing: 1px;
        color: var(--bg-logo2);
      }
      h2 {
        font-size: 3.5rem;
      }
      p {
        font-size: 1rem;
        line-height: 2rem;
      }
      button {
        border: none;
        background: var(--bg-one);
        color: white;
        width: fit-content;
        padding: 1rem 2rem;
        border-radius: 2rem;
        transition: var(--transition);
        &:hover {
          transition: var(--transition);
          background: var(--bg-logo);
          color: var(--bg-one);
        }
      }
    }
  }
  .right {
    width: 49.5%;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: space-between;
    gap: 1rem;
    .right-card {
      position: relative;
      width: 48%;
      margin-bottom: 0.2rem;
      .superCharger {
        font-size: 1rem;
        letter-spacing: 1px;
        color: var(--bg-logo2);
      }
      .img {
        width: 100%;
        overflow: hidden;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .small-card-content {
        position: absolute;
        top: 2rem;
        left: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: fit-content;
    padding: 3rem 1rem;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    .left {
      width: 100%;
      height: 25vh;
      border-radius: 1rem;
      overflow: hidden;
      position: relative;
      z-index: 1;
      .big-image {
        position: relative;
        width: 100%;
        height: 25vh;
        img {
          object-fit: cover;
          height: 100%;
          width: 100%;
          object-position:top;
        }
      }
      .big-image-content {
        position: absolute;
        z-index: 5;
        top: 2rem;
        left: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        .superCharger {
          font-size: 1rem;
          letter-spacing: 1px;
          color: var(--bg-logo2);
        }
        h2 {
          font-size: 2rem;
        }
        .big-desc {
          font-size: 1rem;
          line-height: 1.1rem;
          display: none;
        }
        button {
          border: none;
          background: var(--bg-one);
          color: white;
          width: fit-content;
          padding: 1rem 2rem;
          border-radius: 2rem;
          transition: var(--transition);
          &:hover {
            transition: var(--transition);
            background: var(--bg-logo);
            color: var(--bg-one);
          }
        }
      }
    }
    .right {
      width: 100%;
      border-radius: 1rem;
      overflow: hidden;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: start;
      justify-content: space-between;
      gap: 0rem;
      height: fit-content;
      .right-card {
        position: relative;
        width: 48.5%;
        height: 15vh;
        margin-bottom: 0.2rem;
        overflow: hidden;
        margin-bottom: 1rem;
        border-radius: 1rem;
        .superCharger {
          font-size: 1.2rem;
          letter-spacing: 0px;
          color: var(--bg-logo2);
        }
        .card-image {
          width: 100%;
          height: 15vh;
          overflow: hidden;
          img {
            object-fit: cover;
            height: 100%;
            width: 100%;
            object-position: left;
          }
        }
        .small-card-content {
          position: absolute;
          top: 0.5rem;
          left: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          h3 {
            font-size: 1.2rem;
          }
          p {
            font-size: 1rem;
            width: 100%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: fit-content;
    padding: 3rem 1rem;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    .left {
      width: 100%;
      height: 25vh;
      border-radius: 1rem;
      overflow: hidden;
      position: relative;
      z-index: 1;
      .big-image {
        position: relative;
        width: 100%;
        height: 25vh;
        img {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
      }
      .big-image-content {
        position: absolute;
        z-index: 5;
        top: 2rem;
        left: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        .superCharger {
          font-size: 1rem;
          letter-spacing: 1px;
          color: var(--bg-logo2);
        }
        h2 {
          font-size: 2rem;
        }
        .big-desc {
          font-size: 1rem;
          line-height: 1.1rem;
          display: none;
        }
        button {
          border: none;
          background: var(--bg-one);
          color: white;
          width: fit-content;
          padding: 1rem 2rem;
          border-radius: 2rem;
          transition: var(--transition);
          &:hover {
            transition: var(--transition);
            background: var(--bg-logo);
            color: var(--bg-one);
          }
        }
      }
    }
    .right {
      width: 100%;
      border-radius: 1rem;
      overflow: hidden;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: start;
      justify-content: space-between;
      gap: 0rem;
      height: fit-content;
      .right-card {
        position: relative;
        width: 48.5%;
        height: 15vh;
        margin-bottom: 0.2rem;
        overflow: hidden;
        margin-bottom: 1rem;
        border-radius: 1rem;
        .superCharger {
          font-size: 1rem;
          letter-spacing: 0px;
          color: var(--bg-logo2);
        }
        .card-image {
          width: 100%;
          height: 15vh;
          overflow: hidden;
          img {
            object-fit: cover;
            height: 100%;
            width: 100%;
            object-position: left;
          }
        }
        .small-card-content {
          position: absolute;
          top: 0.5rem;
          left: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          h3 {
            font-size: 1rem;
          }
          p {
            font-size: 0.8rem;
            width: 100%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    height: fit-content;
    padding: 1rem 1rem;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    .left {
      width: 100%;
      height: 25vh;
      border-radius: 1rem;
      overflow: hidden;
      position: relative;
      z-index: 1;
      .big-image {
        position: relative;
        width: 100%;
        height: 25vh;
        img {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
      }
      .big-image-content {
        position: absolute;
        z-index: 5;
        top: 2rem;
        left: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        .superCharger {
          font-size: 0.8rem;
          letter-spacing: 1px;
          color: var(--bg-logo2);
        }
        h2 {
          font-size: 1.5rem;
        }
        .big-desc {
          font-size: 1rem;
          line-height: 1.1rem;
          display: none;
        }
        button {
          border: none;
          background: var(--bg-one);
          color: white;
          width: fit-content;
          padding: 0.5rem 2rem;
          border-radius: 2rem;
          transition: var(--transition);
          font-size: 0.8rem;
          &:hover {
            transition: var(--transition);
            background: var(--bg-logo);
            color: var(--bg-one);
          }
        }
      }
    }
    .right {
      width: 100%;
      border-radius: 1rem;
      overflow: hidden;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: start;
      justify-content: space-between;
      gap: 0rem;
      height: fit-content;
      .right-card {
        position: relative;
        width: 48.5%;
        height: 15vh;
        margin-bottom: 0.2rem;
        overflow: hidden;
        margin-bottom: 1rem;
        border-radius: 1rem;
        .superCharger {
          font-size: 0.8rem;
          letter-spacing: 0px;
          color: var(--bg-logo2);
        }
        .card-image {
          width: 100%;
          height: 15vh;
          overflow: hidden;
          img {
            object-fit: cover;
            height: 100%;
            width: 100%;
            object-position: left;
          }
        }
        .small-card-content {
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          h3 {
            font-size: 0.8rem;
          }
          p {
            font-size: 0.6rem;
            width: 100%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 350px) {
  }
`;
export default SectionOne;
