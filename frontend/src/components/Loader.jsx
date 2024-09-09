import React from "react";
import styled from "styled-components";

const Loader = () => {
    return <LoaderComponent>
        <div className="loader-content">
            <p>Bumia <span>Store</span></p>
      </div>
  </LoaderComponent>;
};

const LoaderComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .loader-content {
    display: inline-block;
    animation: scaleInOut 800ms infinite;
    p {
      font-weight: 500;
      font-size: 2rem;
      span {
        color: var(--bg-logo);
        margin-left: -0.3rem;
      }
    }
  }
  @keyframes scaleInOut {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5); /* Scale up */
    }
    100% {
      transform: scale(1); /* Scale down */
    }
  }
`;
export default Loader;
