import React from 'react'
import styled from 'styled-components'

const FilterTwo = () => {
  return (
    <SecondFilter>
          <h3 className="filter-title">Shop By Categories : </h3>
          <div className="category-content">
              <li>Watches</li>
              <li>Computer & Laptops</li>
              <li>Sounds</li>
              <li>Mobile & Tablets</li>
              <li>Others</li>
          </div>
    </SecondFilter>
  );
}

const SecondFilter = styled.div`
  background: white;
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px #0000001a;
  .category-content {
    display: flex;
    align-items: flex-start;
    justify-content: start;
    flex-direction: column;
    gap: 0.5rem;
    li {
      margin-bottom: 0;
      opacity: 0.7;
      font-size: 0.7rem;
      cursor:pointer;
    }
  }
`;
export default FilterTwo