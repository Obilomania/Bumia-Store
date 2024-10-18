import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import {
  useEditUserAddressMutation,
  useGetUserAddressQuery,
} from "../../redux/rtk-queries/authAPI";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { user_address } from "../../redux/reducers/authSlice";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import BreadCrumb from "../../components/BreadCrumb";
import styled from "styled-components";
import WithAuth from "../../HOC/withAuth";
import store from "../../redux/store";

const EditAddress = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state?.persistedReducer?.auth);
  const { data, isLoading } = useGetUserAddressQuery(userInfo.id);

  useEffect(() => {
    if (!isLoading) {
      store.dispatch(user_address(data?.addresses[0]));
    }
  });

  const [addressInfo, setAddressInfo] = useState({
    address: userInfo?.address?.address,
    localGovernmentArea: userInfo?.address?.localGovernmentArea,
    state: userInfo?.address?.state,
    zipcode: userInfo?.address?.zipcode,
  });
  const [saveAddress] = useEditUserAddressMutation();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAddressInfo({ ...addressInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await saveAddress({
      _id: data?.addresses[0]._id,
      userInput: addressInfo,
    });
    console.log(res);
    if (res?.data) {
      toast.success("Address Updated Succesfully");
      dispatch(user_address(res?.data?.updateAddress));

        navigate("/profile");
    } else if (res?.error) {
      return toast.error(res?.error?.data?.message);
    }
    navigate("/profile");
  };
  return (
    <AddressPage>
      {isLoading && <Loader />}
      <Helmet>
        <title>Edit Address</title>
        <meta name="description" content="Edit Address" />
      </Helmet>
      <BreadCrumb title="Address" />
      <form action="" className="login-form" onSubmit={handleSubmit}>
        <h5 className="form-heading text-center">Edit Address</h5>
        <br />
        <div className="inputs">
          <div className="inp">
            <input
              type="text"
              placeholder="House Address "
              name="address"
              value={addressInfo.address}
              onChange={(e) => handleInput(e)}
            />
            <input
              type="text"
              placeholder="Local Government Area "
              name="localGovernmentArea"
              value={addressInfo.localGovernmentArea}
              onChange={(e) => handleInput(e)}
            />
            <input
              type="text"
              placeholder="State "
              name="state"
              value={addressInfo.state}
              onChange={(e) => handleInput(e)}
            />
            <input
              type="text"
              placeholder="Zip Code"
              name="zipcode"
              value={addressInfo.zipcode}
              onChange={(e) => handleInput(e)}
            />
          </div>
        </div>
        <div className="form-bottons mt-4">
          <Link to={"/profile"}>View Profile</Link>
          <button type="submit">Save Address</button>
        </div>
      </form>
    </AddressPage>
  );
};

const AddressPage = styled.div`
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
export default WithAuth(EditAddress);
