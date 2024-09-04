import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <LoginUser>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Our Store" />
      </Helmet>
      <BreadCrumb title="Login" />
      <form action="" className="login-form">
        <h5 className="form-heading text-center">Login</h5>
        <br />
        <div className="inputs">
          <div className="inp">
            <input type="text" placeholder="Email Address *" />
            <input type="password" placeholder="Password *" />
          </div>
          <Link to={"/account/forgot-password"}>Forgot Your Password?</Link>
        </div>
        <div className="form-bottons">
          <button type="submit">Login</button>
          <Link to={"/account/register"}>Sign Up</Link>
        </div>
      </form>
    </LoginUser>
  );
};

const LoginUser = styled.div`
  width: 100%;
  min-height: 70vh;
  height: 100%;
  background: var(--bg-grey);
  overflow: hidden;
  form {
    width: 25%;
    margin: 10vh auto;
    background-color: white;
    border-radius: 0.5rem;
    padding: 1rem 1rem 2rem 1rem;
    box-shadow: 0 0 10px #0000001a;
    position: relative;
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
      color: black;
      border: 1px solid var(--bg-logo);
      background: var(--bg-logo);
      font-size: 0.8rem;
      padding: 0.3rem 1.5rem;
      border-radius: 1rem;
      transition: var(--transition);
      font-weight: 500;
      &:hover {
        background: var(--bg-logo2);
        transition: var(--transition);
        font-weight: 500;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    min-height: 70vh;
    height: 100%;
    background: var(--bg-grey);
    overflow: hidden;
    form {
      width: 40%;
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
        color: black;
        border: 1px solid var(--bg-logo);
        background: var(--bg-logo);
        font-size: 0.8rem;
        padding: 0.3rem 1.5rem;
        border-radius: 1rem;
        transition: var(--transition);
        font-weight: 500;
        &:hover {
          background: var(--bg-logo2);
          transition: var(--transition);
          font-weight: 500;
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    min-height: 70vh;
    height: 100%;
    background: var(--bg-grey);
    overflow: hidden;
    form {
      width: 60%;
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
        color: black;
        border: 1px solid var(--bg-logo);
        background: var(--bg-logo);
        font-size: 0.8rem;
        padding: 0.3rem 1.5rem;
        border-radius: 1rem;
        transition: var(--transition);
        font-weight: 500;
        &:hover {
          background: var(--bg-logo2);
          transition: var(--transition);
          font-weight: 500;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    min-height: 70vh;
    height: 100%;
    background: var(--bg-grey);
    overflow: hidden;
    padding: 0 1rem;
    form {
      width: 100%;
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
        color: black;
        border: 1px solid var(--bg-logo);
        background: var(--bg-logo);
        font-size: 0.8rem;
        padding: 0.3rem 1.5rem;
        border-radius: 1rem;
        transition: var(--transition);
        font-weight: 500;
        &:hover {
          background: var(--bg-logo2);
          transition: var(--transition);
          font-weight: 500;
        }
      }
    }
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    min-height: 70vh;
    height: 100%;
    background: var(--bg-grey);
    overflow: hidden;
    padding: 0;
    /* display:none; */
    form {
      width: 80%;
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
        color: black;
        border: 1px solid var(--bg-logo);
        background: var(--bg-logo);
        font-size: 0.8rem;
        padding: 0.3rem 1.5rem;
        border-radius: 1rem;
        transition: var(--transition);
        font-weight: 500;
        &:hover {
          background: var(--bg-logo2);
          transition: var(--transition);
          font-weight: 500;
        }
      }
    }
  }
  @media screen and (max-width: 350px) {
  }
`;
export default Login;
