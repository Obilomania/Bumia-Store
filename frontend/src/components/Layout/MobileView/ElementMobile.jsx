import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const ElementMobile = () => {
  const navigate = useNavigate();

  return (
    <MobileElement>
      <div className="element-dropdown">
        <p onClick={() => navigate("/")}>About</p>
        <p onClick={() => navigate("/")}>Blogs</p>
        <p onClick={() => navigate("/")}>Faqs</p>
        <p onClick={() => navigate("/")}>Compare</p>
        <p onClick={() => navigate("/")}>Wishlist</p>
      </div>
    </MobileElement>
  );
}

const MobileElement = styled.div`
width:100%;
overflow:hidden;
.element-dropdown {
    display: block;
    width: 100%;
    position: absolute;
    padding-top: 1rem;
    box-shadow: 0 0 10px #0000001a;
    color: black;
    overflow:hidden;
    P {
      padding: 0.4rem;
      border-bottom: 1px solid var(--bg-one);
      text-align: center;
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        color: var(--bg-logo);
        transition: var(--transition);
      }
    }
  }
`;
export default ElementMobile