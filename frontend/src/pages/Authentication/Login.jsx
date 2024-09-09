import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import BreadCrumb from "../../components/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/rtk-queries/authAPI";
import { useDispatch } from "react-redux";
import Loader from "../../components/Loader";
import toast from "react-hot-toast";
import {
  user_address,
  user_auth_status,
  user_cart,
  user_email,
  user_firstName,
  user_id,
  user_isBlocked,
  user_lastName,
  user_memberSince,
  user_phone,
  user_role,
  user_wishList,
} from "../../redux/reducers/authSlice";
import withoutAuth from "../../HOC/withoutAuth";

const Login = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInput.email === "" || userInput.password === "") {
      return toast.error("Please fill all Inputs");
    }
    const response = await loginUser({
      email: userInput.email,
      password: userInput.password,
    });
    if (response?.data?.isBlocked) {
      return toast.error("User Blocked, Contact Admin");
    }
    if (response?.data) {
      toast.success("Login Succesfull");
      const {
        firstname,
        lastname,
        email,
        role,
        id,
        isBlocked,
        phone,
        registrationDate,
        wishList,
        address,
        cart,
      } = response?.data;

      dispatch(user_firstName(firstname));
      dispatch(user_lastName(lastname));
      dispatch(user_email(email));
      dispatch(user_phone(phone));
      dispatch(user_id(id));
      dispatch(user_auth_status(true));
      dispatch(user_role(role));
      dispatch(user_isBlocked(isBlocked));
      dispatch(user_memberSince(registrationDate));
      dispatch(user_wishList(wishList));
      dispatch(user_address(address));
      dispatch(user_cart(cart));
      localStorage.setItem("userRole", role);
      localStorage.setItem("userName", firstname);

      navigate("/");
    } else if (response?.error) {
      return toast.error(response?.error?.data?.message);
    }
    navigate("/");
  };

  return (
    <LoginUser>
      {isLoading && <Loader />}
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Our Store" />
      </Helmet>
      <BreadCrumb title="Login" />
      <form action="" className="login-form" onSubmit={handleSubmit}>
        <h5 className="form-heading text-center">Login</h5>
        <br />
        <div className="inputs">
          <div className="inp">
            <input
              type="text"
              placeholder="Email Address *"
              name="email"
              value={userInput?.email}
              onChange={(e) => handleInputChange(e)}
            />
            <input
              type="password"
              placeholder="Password *"
              name="password"
              value={userInput.password}
              onChange={(e) => handleInputChange(e)}
            />
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
export default withoutAuth(Login);
