import React from "react";
import styled from "styled-components";

const FilterOne = () => {
  return (
    <FirstFilter>
      <h3 className="filter-title">Filter By :</h3>
      <div className="availability">
        <p className="m-0 filter-head">Availability</p>
        <div className="checkit ">
          <input type="checkbox" name="" id="" />
          <p>In Stock (241)</p>
        </div>
        <div className="checkit ">
          <input type="checkbox" name="" id="" />
          <p>Out Of Stock (12)</p>
        </div>
      </div>{" "}
      <br />
      <div className="filter-price">
        <p className="filter-head m-0">Price </p>
        <div className="the-price">
          <div className="priceit">
            <p>
              <b>&#x20A6;</b>
            </p>
            <input type="text" placeholder="From" />
          </div>
          <div className="priceit">
            <p>
              <b>&#x20A6;</b>
            </p>
            <input type="text" placeholder="To" />
          </div>
        </div>
      </div>{" "}
      <br />
      <div className="filter-color">
        <p className="filter-head mb-2">Color </p>
        <div className="the-color">
          <div className="black"></div>
          <div className="grey"></div>
          <div className="red"></div>
          <div className="blue"></div>
          <div className="pink"></div>
          <div className="yellow"></div>
          <div className="others">Others</div>
        </div>{" "}
        <br />
        <div className="filter-sizes">
          <p className="m-0 filter-head">Sizes</p>
          <div className="sizeit ">
            <input type="checkbox" name="" id="" />
            <p>Medum</p>
          </div>
          <div className="sizeit ">
            <input type="checkbox" name="" id="" />
            <p>Small</p>
          </div>
        </div>{" "}
      </div>
    </FirstFilter>
  );
};

const FirstFilter = styled.div`
  background: white;
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px #0000001a;
  .filter-head {
    font-weight: 600;
    font-size: 0.8rem;
  }

  .availability {
    display: flex;
    align-items: flex-start;
    justify-content: start;
    flex-direction: column;
    gap: 0.5rem;
    .checkit {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 0.5rem;
      font-size: 0.7rem;
      p {
        margin-bottom: 0;
        opacity: 0.7;
      }
    }
  }
  .the-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
  }
  .filter-price {
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .priceit {
      display: flex;
      align-items: center;
      gap: 0rem;
      p {
        margin-bottom: 0;
        opacity: 0.7;
      }
      input {
        font-size: 0.7rem;
        padding: 0.2rem 0.4rem;
        background-color: var(--bg-grey);
        border: 1px solid var(--bg-grey);
        border-radius: 0.3rem;
        width: 70%;
        outline: none;
        &::placeholder {
        }
      }
    }
  }
  .filter-color {
    width: 90%;
    .the-color {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .black {
        background: black;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 100%;
        cursor: pointer;
      }
      .grey {
        background: grey;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 100%;
        cursor: pointer;
      }
      .red {
        background: red;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 100%;
        cursor: pointer;
      }
      .blue {
        background: blue;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 100%;
        cursor: pointer;
      }
      .pinkyellow {
        background: pinkyellow;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 100%;
        cursor: pointer;
      }
      .yellow {
        background: yellow;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 100%;
        cursor: pointer;
      }
      .others {
        color: white;
        background: var(--bg-one);
        font-size: 0.8rem;
        padding: 0.2rem 1rem;
        border-radius: 1rem;
        transition: var(--transition);
        cursor: pointer;
        &:hover {
          background: var(--bg-two);
          transition: var(--transition);
          cursor: pointer;
        }
      }
    }
  }
  .filter-sizes {
    display: flex;
    align-items: flex-start;
    justify-content: start;
    flex-direction: column;
    gap: 0.5rem;
    .sizeit {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 0.5rem;
      font-size: 0.7rem;
      p {
        margin-bottom: 0;
        opacity: 0.7;
      }
    }
  }
`;

export default FilterOne;
