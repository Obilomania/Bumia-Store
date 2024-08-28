import React from 'react'
import { Helmet } from 'react-helmet';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <CantFindPage>
      <Helmet>
        <title>Oops &#128532; !!!</title>
        <meta name="description" content="Our Store" />
      </Helmet>
      {/* <BreadCrumb title="Reset Password" /> */}

      <div className="notfound-container">
              <h1>PAGE NOT FOUND &#128532;</h1>
              <Link to="/">HOME</Link>
      </div>
    </CantFindPage>
  );
}


const CantFindPage = styled.div`
  width: 100%;
  min-height: 70vh;
  height: 100%;
  background: var(--bg-grey);
  position: relative;
  .notfound-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    a {
      color: white;
      background: var(--bg-one);
      font-size: 0.8rem;
      padding: 0.3rem 1.5rem;
      border-radius: 1rem;
      transition: var(--transition);
      font-weight: 500;
      &:hover {
        background: var(--bg-two);
        transition: var(--transition);
        font-weight: 500;
      }
    }
  }
`;
export default NotFound