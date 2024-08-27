import React from "react";
import styled from "styled-components";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";

const FilterSort = ({ toggleGrid, toggleList }) => {
  return (
    <SortingFilter>
      <div className="sort-by d-flex align-items-center gap-4">
        <p className="mb-0">
          <b>Sort By:</b>
        </p>{" "}
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Best Selling
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>Alphabetical Order (A -Z)</li>
            <li>Cheapest &rarr; Expensive</li>
            <li>Latest Products</li>
          </ul>
        </div>
      </div>
      <div className="sort-appearance">
        <p className="mb-0"> 21 Products</p>
        <span>
          <BsGrid3X3GapFill onClick={toggleGrid} />
        </span>
        <span>
          <BsList onClick={toggleList} />
        </span>
      </div>
    </SortingFilter>
  );
};

const SortingFilter = styled.div`
  width: 100%;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px #0000001a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .sort-by {
    p {
      font-size: 0.8rem;
      color: var(--bg-one);
    }
    .dropdown button {
      color: grey;
      font-size: 0.9rem;
      line-height: 1.1rem;
      font-weight: 400;
      letter-spacing: 0.3;
      background: var(--bg-grey);
      border: none;
      letter-spacing: 0.8px;
      font-size: 0.8rem;
      padding: 0.5rem 2rem;
      &:focus {
        box-shadow: none;
      }
    }
    .dropdown .dropdown-menu {
      background-color: var(--bg-three);
      /* display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column; */
      width: 15rem;;
      li {        
        background-color: var(--bg-one);
        color: white;
        font-size: 0.8rem;
        border-bottom: 2px solid var(--bg-three);
        padding: 0.4rem 2rem;
        width:100%;
        text-align:center;
        &:hover {
          background-color: var(--bg-three);
        }
      }
    }
  }
  .sort-appearance {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    p {
      font-size: 0.8rem;
      color: grey;
    }
    span {
      text-decoration: none;
      font-size: 1.2rem;
      color: var(--bg-one);
      cursor:pointer;
    }
  }
`;
export default FilterSort;
