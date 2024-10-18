import React, { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import WithAuth from "../../HOC/withAuth";
import { useUserChangePasswordMutation } from "../../redux/rtk-queries/authAPI";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [changeUserPassword, { isLoading }] = useUserChangePasswordMutation();
  const [userInput, setUserInput] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
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
    if (
      userInput.oldPassword === "" ||
      userInput.newPassword === "" ||
      userInput.confirmNewPassword === ""
    ) {
      return toast.error("Please fill all Inputs");
    }
    if (userInput.newPassword !== userInput.confirmNewPassword) {
      return toast.error("New Passwords dont match");
    }
    const res = await changeUserPassword({ userInput });
    if (res?.data) {
      toast.success("Password Changed");
      navigate("/profile");
    }
    if (res?.error) {
      toast.error(res?.error?.data?.message);
    }
    return;
  };
  return (
    <ResetP>
      {isLoading && <Loader/>}
      <Helmet>
        <title>Change Password</title>
        <meta name="description" content="Our Store" />
      </Helmet>
      <BreadCrumb title="Change Password" />

      <form action="" className="login-form" onSubmit={handleSubmit}>
        <h5 className="form-heading text-center">Change Password</h5>
        <br />
        <div className="inputs">
          <div className="inp">
            <input
              type="Password"
              placeholder="Old Password *"
              name="oldPassword"
              value={userInput?.oldPassword}
              onChange={(e) => handleInputChange(e)}
            />
            <input
              type="Password"
              placeholder="New Password *"
              name="newPassword"
              value={userInput?.newPassword}
              onChange={(e) => handleInputChange(e)}
            />
            <input
              type="Password"
              placeholder="Confirm New Password *"
              name="confirmNewPassword"
              value={userInput?.confirmNewPassword}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div className="form-bottons mt-4">
          <Link to={"/profile"}>Cancel</Link>
          <button type="submit">Change</button>
        </div>
      </form>
    </ResetP>
  );
};

const ResetP = styled.div`
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
    padding: 0 1rem;
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
    padding: 0 1rem;
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
    padding: 0 1rem;
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
export default WithAuth(ChangePassword);
