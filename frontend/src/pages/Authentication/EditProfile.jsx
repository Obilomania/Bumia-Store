import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import BreadCrumb from "../../components/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useEditUserProfileMutation } from "../../redux/rtk-queries/authAPI";
import {
  user_email,
  user_firstName,
  user_lastName,
  user_phone,
} from "../../redux/reducers/authSlice";
import Loader from "../../components/Loader";
import WithAuth from "../../HOC/withAuth";

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state?.persistedReducer?.auth);
  const [editUserProfile, { isLoading }] = useEditUserProfileMutation();
  const [registerInfo, setRegisterInfo] = useState({
    firstname: userInfo.firstName,
    lastname: userInfo.lastName,
    phone: userInfo.phone,
    email: userInfo.email,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegisterInfo({ ...registerInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await editUserProfile({
      firstname: registerInfo.firstname,
      lastname: registerInfo.lastname,
      email: registerInfo.email,
      phone: registerInfo.phone,
    });
    if (res?.data) {
      toast.success("Profile Updated Succesfully");
      const { firstname, lastname, email, phone } = res?.data;

      dispatch(user_firstName(firstname));
      dispatch(user_lastName(lastname));
      dispatch(user_email(email));
      dispatch(user_phone(phone));
      localStorage.setItem("userName", firstname);

      navigate("/profile");
    } else if (res?.error) {
      return toast.error(res?.error?.data?.message);
    }
    navigate("/profile");
  };
  return (
    <EditPro>
      {isLoading && <Loader />}
      <Helmet>
        <title>Edit Profile</title>
        <meta name="description" content="Edit Profile" />
      </Helmet>
      <BreadCrumb title="Edit Profile" />
      <form action="" className="login-form" onSubmit={handleSubmit}>
        <h5 className="form-heading text-center">Edit Profile</h5>
        <br />
        <div className="inputs">
          <div className="inp">
            <input
              type="text"
              placeholder="First Name *"
              name="firstname"
              value={registerInfo.firstname}
              onChange={(e) => handleInput(e)}
            />
            <input
              type="text"
              placeholder="Last Name *"
              name="lastname"
              value={registerInfo.lastname}
              onChange={(e) => handleInput(e)}
            />
            <input
              type="text"
              placeholder="Phone Number *"
              name="phone"
              value={registerInfo.phone}
              onChange={(e) => handleInput(e)}
            />
            <input
              type="text"
              placeholder="Email Address *"
              name="email"
              value={registerInfo.email}
              onChange={(e) => handleInput(e)}
            />
          </div>
        </div>
        <div className="form-bottons mt-4">
          <Link to={"/edit-address"}>Edit Address</Link>
          <button type="submit">Update Profile</button>
          <Link to={"/account/change-password"}>Change Password</Link>
        </div>
      </form>
    </EditPro>
  );
};

const EditPro = styled.div`
  width: 100%;
  min-height: 70vh;
  height: 100%;
  background: var(--bg-grey);
  overflow: hidden;
  form {
    width: 25%;
    margin: 5vh auto;
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
    .form-checkbox {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 1rem;
      font-weight: 500;
      input {
        width: fit-content;
      }
      p {
        width: 100%;
        margin-top: 0rem;
        font-size: 0.8rem;
        font-weight: 400;
        a {
          text-decoration: none;
          color: var(--primary);
          font-weight: 600;
        }
      }
    }
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
      text-align: center;
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
      text-align: center;
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
      width: 60%;
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
    padding: 0 1rem;
    background: var(--bg-grey);
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
    padding: 0 1rem;
    background: var(--bg-grey);
    form {
      width: 100%;
      margin: 5vh auto;
      background-color: white;
      border-radius: 0.5rem;
      padding: 1rem 1rem 2rem 1rem;
      box-shadow: 0 0 10px #0000001a;
      .form-bottons {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        a,
        button {
          width: 100%;
          text-align: center;
        }
      }
    }
  }
  @media screen and (max-width: 350px) {
    width: 100%;
    min-height: 70vh;
    height: 100%;
    padding: 0 1rem;
    background: var(--bg-grey);
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
export default WithAuth(EditProfile);
