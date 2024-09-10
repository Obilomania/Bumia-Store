import React, { useEffect } from "react";
import styled from "styled-components";
import { useGetUserAddressQuery } from "../../redux/rtk-queries/authAPI";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/BreadCrumb";
import store from "../../redux/store";
import { user_address } from "../../redux/reducers/authSlice";
import { Link, useNavigate } from "react-router-dom";

const MyProfile = () => {
  const userInfo = useSelector((state) => state.persistedReducer.auth);
  const { data, isLoading } = useGetUserAddressQuery(userInfo?.id);
  useEffect(() => {
    if (!isLoading) {
      store.dispatch(user_address(data?.addresses[0]));
    }
  });
  const navigate = useNavigate()
  return (
    <ProfilePage>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="My Profile" />
      </Helmet>
      <BreadCrumb title="My Profile" />
      <div className="profile-container">
        <h5 className="form-heading text-center">My Profile</h5>
        <div className="profile-info">
          <p>
            First Name: <span>{userInfo?.firstName}</span>
          </p>
          <p>
            Last Name: <span>{userInfo?.lastName}</span>
          </p>
          <p>
            Email: <span>{userInfo?.email}</span>
          </p>
          <p>
            Phone Number: <span>{userInfo?.phone}</span>
          </p>
          <p>
            Member Since : <span>{userInfo?.memberSince}</span>
          </p>
          <p>
            Local Government :{" "}
            <span>{userInfo?.address?.localGovernmentArea}</span>
          </p>
          <p>
            Zip Code :{" "}
            {userInfo?.address?.zipCode === 0 ? (
              ""
            ) : (
              <span>{userInfo?.address?.zipCode}</span>
            )}
          </p>
          <p>
            State : <span>{userInfo?.address?.state}</span>
          </p>
          <div className="form-bottons mt-4">
            <Link to={"/"}>HOME</Link>
            <button type="submit" onClick={() => navigate("/edit-profile")}>EDIT PROFILE</button>
          </div>
        </div>
      </div>
    </ProfilePage>
  );
};

const ProfilePage = styled.div`
  width: 100%;
  min-height: 70vh;
  height: fit-content;
  background: var(--bg-grey);
  overflow: hidden;
  .profile-container {
    width: 100%;
    padding: 2rem 8rem;
    .profile-info {
      width: 50%;
      margin: 0 auto;
      background-color: white;
      border-radius: 0.5rem;
      padding: 1rem 1rem 2rem 1rem;
      box-shadow: 0 0 10px #0000001a;
      position: relative;
      p {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        font-size: 0.8rem;
        border-bottom: 2px solid var(--bg-grey);
        span {
          font-weight: 500;
        }
      }
      .form-bottons {
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
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    min-height: 70vh;
    height: fit-content;
    background: var(--bg-grey);
    overflow: hidden;
    .profile-container {
      width: 100%;
      padding: 2rem 8rem;
      .profile-info {
        width: 100%;
        margin: 0 auto;
        background-color: white;
        border-radius: 0.5rem;
        padding: 1rem 1rem 2rem 1rem;
        box-shadow: 0 0 10px #0000001a;
        position: relative;
        p {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          font-size: 0.8rem;
          border-bottom: 2px solid var(--bg-grey);
          span {
            font-weight: 500;
          }
        }
        .form-bottons {
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
    }
  }
  @media screen and (max-width: 900px) {
  }
  @media screen and (max-width: 600px) {
    .profile-container {
      width: 100%;
      padding: 2rem 1rem;
      .profile-info {
        width: 100%;
        margin: 0 auto;
        background-color: white;
        border-radius: 0.5rem;
        padding: 1rem 1rem 2rem 1rem;
        box-shadow: 0 0 10px #0000001a;
        position: relative;
        p {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          font-size: 0.8rem;
          border-bottom: 2px solid var(--bg-grey);
          span {
            font-weight: 500;
          }
        }
        .form-bottons {
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
    }
  }
  @media screen and (max-width: 420px) {
    .profile-container {
      width: 100%;
      padding: 2rem 1rem;
      .profile-info {
        width: 100%;
        margin: 0 auto;
        background-color: white;
        border-radius: 0.5rem;
        padding: 1rem 1rem 2rem 1rem;
        box-shadow: 0 0 10px #0000001a;
        position: relative;
        p {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          font-size: 0.6rem;
          border-bottom: 2px solid var(--bg-grey);
          span {
            font-weight: 500;
          }
        }
        .form-bottons {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          button {
            color: white;
            background: var(--bg-one);
            font-size: 0.6rem;
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
            font-size: 0.6rem;
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
    }
  }
  @media screen and (max-width: 350px) {
  }
`;
export default MyProfile;
