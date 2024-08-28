import React from 'react'
import { Helmet } from 'react-helmet';
import BreadCrumb from '../../components/BreadCrumb';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <ResetP>
      <Helmet>
        <title>Reset Password</title>
        <meta name="description" content="Our Store" />
      </Helmet>
      <BreadCrumb title="Reset Password" />

      <form action="" className="login-form">
        <h5 className="form-heading text-center">Reset Password</h5>
        <br />
        <div className="inputs">
          <div className="inp">
            <input type="password" placeholder="Enter New Password *" />
            <input type="password" placeholder="Confirm New Password *" />
          </div>
        </div>
        <div className="form-bottons mt-4">
          <button type="submit">Reset</button>
          <Link to={"/account/login"}>Cancel</Link>
        </div>
      </form>
    </ResetP>
  );
}
const ResetP = styled.div`
  width: 100%;
  min-height: 70vh;
  height: 100%;
  background: var(--bg-grey);
  form {
    width: 25%;
    margin: 10vh auto;
    background-color: white;
    border-radius: 0.5rem;
    padding: 1rem 1rem 2rem 1rem;
    box-shadow: 0 0 10px #0000001a;
  }
  form .inputs {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 0rem;
    width: 100%;
    .inp {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 1rem;
      width: 100%;
      input {
        width: 100%;
        border: none;
        background: var(--bg-grey);
        outline: none;
        padding: 0.8rem;
        font-size: 0.8rem;
        resize: none;
        border-radius: 0.5rem;
        opacity: 0.7;
        &::placeholder {
          opacity: 0.7;
          color: var(--bg-one);
        }
      }
    }
    a {
      font-size: 0.8rem;
      margin: 1rem 0.5rem;
      font-weight: 500;
      text-decoration: none;
      color: var(--bg-one);
    }
  }
  form .form-bottons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    gap: 1rem;
    button {
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
    a {
      color: var(--bg-one);
      font-size: 0.8rem;
      font-weight: 500;
      border-bottom:1px solid var(--bg-one);
    }
  }
`;
export default ResetPassword