import React from 'react'
import { Helmet } from 'react-helmet';
import styled from 'styled-components'
import BreadCrumb from '../../components/BreadCrumb';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <ResetP>
      <Helmet>
        <title>Forgot Password</title>
        <meta name="description" content="Our Store" />
      </Helmet>
      <BreadCrumb title="Forgot Password" />

      <form action="" className="login-form">
        <h5 className="form-heading text-center">Recover Password</h5>
        <br />
        <div className="inputs">
          <div className="inp">
            <input type="text" placeholder="Enter Your Registered Email Address *" />
          </div>
          <Link to={"/account/login"}>Remembered Password? Login </Link>
        </div>
         <div className="form-bottons mt-4">
          <button type="submit">Reset</button>
          <Link to={"/account/register"}>Cancel</Link>
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
    flex-direction: column;
    justify-content: center;
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
      border-bottom: 1px solid var(--bg-one);
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
  min-height: 70vh;
  height: 100%;
  background: var(--bg-grey);
  form {
    width: 60%;
    margin: 10vh auto;
    background-color: white;
    border-radius: 0.5rem;
    padding: 1rem 1rem 2rem 1rem;
    box-shadow: 0 0 10px #0000001a;
  }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  min-height: 70vh;
  height: 100%;
  background: var(--bg-grey);
  form {
    width: 40%;
    margin: 10vh auto;
    background-color: white;
    border-radius: 0.5rem;
    padding: 1rem 1rem 2rem 1rem;
    box-shadow: 0 0 10px #0000001a;
  }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  min-height: 70vh;
  height: 100%;
  background: var(--bg-grey);
  padding:0 1rem;
  form {
    width: 100%;
    margin: 5vh auto;
    background-color: white;
    border-radius: 0.5rem;
    padding: 1rem 1rem 2rem 1rem;
    box-shadow: 0 0 10px #0000001a;
  }
  }
  @media screen and (max-width: 420px) {
    width: 100%;
  min-height: 70vh;
  height: 100%;
  background: var(--bg-grey);
  padding:0 1rem;
  form {
    width: 100%;
    margin: 5vh auto;
    background-color: white;
    border-radius: 0.5rem;
    padding: 1rem 1rem 2rem 1rem;
    box-shadow: 0 0 10px #0000001a;
  }
  }
  @media screen and (max-width: 350px) {
    width: 100%;
  min-height: 70vh;
  height: 100%;
  background: var(--bg-grey);
  padding:0 1rem;
  form {
    width: 100%;
    margin: 5vh auto;
    background-color: white;
    border-radius: 0.5rem;
    padding: 1rem 1rem 2rem 1rem;
    box-shadow: 0 0 10px #0000001a;
  }
  }
`;
export default ForgotPassword