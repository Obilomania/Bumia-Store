import React from "react";
import styled from "styled-components";

const TopHeader = () => {
  return (
    <HeaderTop>
      <div className="main-container content">
        <p className="font-small">
          Free Shipping Over &#x20A6; 200,000 & Free Returns{" "}
        </p>
        <p className="font-small">HotLine : +2348033954540</p>
      </div>
    </HeaderTop>
  );
};

const HeaderTop = styled.div`
  width: 100%;
  background: var(--bg-one);
  padding: 0.5rem 0;
  border-bottom: 0.5px solid var(--bg-grey);
  .content {
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export default TopHeader;
