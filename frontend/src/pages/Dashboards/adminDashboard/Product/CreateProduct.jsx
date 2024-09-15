// import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UploadImage from "../../../../components/UploadImage";
// import uploadImage from "../../../../helpers/uploadImage";

const CreateProduct = () => {
  //   const [productData, setProductData] = useState({
  //     title: "",
  //     description: "",
  //     slug: "",
  //     category: "",
  //     price: "",
  //     quantity: "",
  //     productImage: [],
  //   });

  return (
    <ProductCreation>
      <div className="create-container">
        <p className="sub-heading text-center">CREATE PRODUCT</p>
        <form>
          <div className="form-div">
            <label>Product Name :</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-div">
            <label>Product Description : </label>
            <textarea name="" id="" rows={4} cols={30}></textarea>
          </div>
          <div className="form-div">
            <label>Slug :</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-div">
            <label>Price :</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-div">
            <label>Category :</label>
            <select name="" id="" className="form-input">
              <option value="">Select A Category</option>
              <option value="">Phone</option>
              <option value="">Laptops</option>
              <option value="">Accessories</option>
              <option value="">Accessories</option>
            </select>
          </div>
          <div className="form-div">
            <label>Brand :</label>
            <select name="" id="" className="form-input">
              <option value="">Select A Brand</option>
              <option value="">Apple</option>
              <option value="">Samsung</option>
              <option value="">LG</option>
              <option value="">Techno</option>
              <option value="">Others</option>
            </select>
          </div>
          <div className="form-div">
            <label>Quantity :</label>
            <input type="number" className="form-input" />
          </div>
          <div className="form-div">
            <label>Color :</label>
            <select name="" id="" className="form-input">
              <option value="">Select A Color</option>
              <option value="">Red</option>
              <option value="">Yellow</option>
              <option value="">Blue</option>
              <option value="">Green</option>
              <option value="">Black</option>
            </select>
          </div>
          <div className="product-images">
            <UploadImage />
          </div>
          <div className="call-to-action">
            <Link to="/admin-dashboard">CANCEL</Link>
            <button type="submit">CREATE</button>
          </div>
        </form>
      </div>
    </ProductCreation>
  );
};

const ProductCreation = styled.div`
  width: 100%;
  height: 100%;
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
      textarea {
        width: 100%;
        resize: none;
        border-radius: 0.5rem;
        border: 1px solid lightgrey;
        outline: none;
        padding: 0.2rem 1rem;
        font-size: 0.8rem;
      }
    }
  }
  .product-images {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 2rem 0;
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
    width: 100%;
    height: 100%;
    padding: 1rem;
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
      width: 100%;
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
        textarea {
          width: 100%;
          resize: none;
          border-radius: 0.5rem;
          border: 1px solid lightgrey;
          outline: none;
          padding: 0.2rem 1rem;
          font-size: 0.8rem;
        }
      }
    }
    .product-images {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin: 2rem 0;
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
        width: 48%;
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
        width: 48%;
        text-align: center;
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
    height: 100%;
    padding: 1rem;
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
        textarea {
          width: 100%;
          resize: none;
          border-radius: 0.5rem;
          border: 1px solid lightgrey;
          outline: none;
          padding: 0.2rem 1rem;
          font-size: 0.8rem;
        }
      }
    }
    .product-images {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin: 2rem 0;
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
        width: 48%;
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
        width: 48%;
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
    width: 100%;
    height: 100%;
    padding: 1rem;
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
      width: 100%;
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
        textarea {
          width: 100%;
          resize: none;
          border-radius: 0.5rem;
          border: 1px solid lightgrey;
          outline: none;
          padding: 0.2rem 1rem;
          font-size: 0.8rem;
        }
      }
    }
    .product-images {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin: 2rem 0;
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
        width: 48%;
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
        width: 48%;
        text-align: center;
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
export default CreateProduct;
