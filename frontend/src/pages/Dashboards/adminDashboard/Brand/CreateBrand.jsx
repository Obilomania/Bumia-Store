import React, { useState } from 'react'
import styled from 'styled-components'
import Loader from '../../../../components/Loader';
import { useCreateBrandMutation } from '../../../../redux/rtk-queries/adminAPI';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const CreateBrand = () => {
    const [brand, setBrand] = useState("")
     const [createBraand, { isLoading }] = useCreateBrandMutation();
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (brand === "") {
        return toast.error("Please fill all Inputs");
      }
      const response = await createBraand({ title: brand });
      if (response?.data) {
        toast.success("Brand Created Successfully");
        setBrand("");
        navigate("/admin-dashboard/admin-list-brands");
      } else if (response?.error) {
        return toast.error(response?.error?.data?.message);
      }
    };
  return (
    <CreateBrandPage>
      {isLoading && <Loader />}
      <div className="create-container">
        <p className="sub-heading text-center">CREATE BRAND</p>
        <form onSubmit={handleSubmit}>
          <div className="form-div">
            <label>Brand Name :</label>
            <input
              type="text"
              className="form-input"
              name="category"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>{" "}
          <div className="call-to-action">
            <Link to="/admin-dashboard">CANCEL</Link>
            <button type="submit">CREATE</button>
          </div>
        </form>
      </div>
    </CreateBrandPage>
  );
}


const CreateBrandPage = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 4rem;
  .create-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
  .sub-heading {
    font-weight: 500;
  }
  form {
    width: 60%;
    .form-div {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      margin-bottom: 1rem;
      width: 100%;
      height: 100%;
      gap: 0.1rem;
      label {
        font-size: 0.8rem;
        font-weight: 500;
      }
      .form-input {
        width: 100%;
        border-radius: 0.5rem;
        border: 1px solid lightgrey;
        outline: none;
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
      }
    }
  }
  .call-to-action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    button {
      color: white;
      background: var(--bg-one);
      font-size: 0.8rem;
      padding: 0.3rem 1.5rem;
      border-radius: 1rem;
      transition: var(--transition);
      font-weight: 500;
      width: 40%;
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
      width: 40%;
      text-align: center;
      &:hover {
        background: var(--bg-logo2);
        transition: var(--transition);
        font-weight: 500;
      }
    }
  }
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 900px) {
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    padding-top: 4rem;
    .create-container {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
    }
    .sub-heading {
      font-weight: 500;
    }
    form {
      width: 90%;
      .form-div {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        margin-bottom: 1rem;
        width: 100%;
        height: 100%;
        gap: 0.1rem;
        label {
          font-size: 0.8rem;
          font-weight: 500;
        }
        .form-input {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid lightgrey;
          outline: none;
          padding: 0.5rem 1rem;
          font-size: 0.8rem;
        }
      }
    }
    .call-to-action {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      button {
        color: white;
        background: var(--bg-one);
        font-size: 0.8rem;
        padding: 0.3rem 1.5rem;
        border-radius: 1rem;
        transition: var(--transition);
        font-weight: 500;
        width: 40%;
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
        width: 40%;
        text-align: center;
        &:hover {
          background: var(--bg-logo2);
          transition: var(--transition);
          font-weight: 500;
        }
      }
    }
  }
  @media screen and (max-width: 420px) {
  }
  @media screen and (max-width: 350px) {
  }
`;
export default CreateBrand