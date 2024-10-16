import React, { useEffect, useState } from "react";
import { useGetOneProductsQuery } from "../../../../redux/rtk-queries/adminAPI";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../../../../components/Loader";
import UploadImage from "../../../../components/UploadImage";
import styled from "styled-components";

const ViewProduct = () => {
  const { id: _id } = useParams();
  const navigate = useNavigate();
  const [trueImages, setTrueImages] = useState(false);
  const { data: oneProduct, isLoading } = useGetOneProductsQuery(_id);
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    slug: "",
    category: "",
    brand: "",
    color: "",
    price: 0,
    quantity: 0,
  });

  //   const [images, setImages] = useState([]); // Array to hold selected images
  const [previews, setPreviews] = useState([]); // Array to hold image preview URLs
  useEffect(() => {
    setTrueImages(true);
    if (oneProduct) {
      setProductData({
        title: oneProduct.title || "",
        description: oneProduct.description || "",
        slug: oneProduct.slug || "",
        category: oneProduct.category || "",
        brand: oneProduct.brand || "",
        color: oneProduct.color || "",
        price: oneProduct.price || 0,
        quantity: oneProduct.quantity || 0,
        images: oneProduct.images || [],
      });
      //   setImages(oneProduct.images || []);
      setPreviews(oneProduct.images || []);
    }
  }, [oneProduct]);

  if (!oneProduct || !oneProduct.images || !previews) {
    return <Loader />;
  }
  if (isLoading) {
    return <Loader />;
  }

  return (
    <ProductView>
      <div className="create-container">
        <p className="sub-heading text-center">EDIT PRODUCT</p>
        <form>
          <div className="form-div">
            <label>Product Name : </label>
            <input
              disabled
              type="text"
              className="form-input"
              name="title"
              value={productData?.title}
            />
          </div>
          <div className="form-div">
            <label>Product Description : </label>
            <textarea
              disabled
              name="description"
              value={productData?.description}
              id=""
              rows={4}
              cols={30}
            ></textarea>
          </div>
          <div className="form-div">
            <label>Slug :</label>
            <input
              disabled
              type="text"
              className="form-input"
              name="slug"
              value={productData?.slug}
            />
          </div>
          <div className="form-div">
            <label>Price :</label>
            <input
              disabled
              type="text"
              name="price"
              value={productData?.price}
              className="form-input"
            />
          </div>
          <div className="form-div">
            <label>Category :</label>
            <input
              disabled
              type="text"
              className="form-input"
              name="category"
              value={productData?.category}
            />
          </div>
          <div className="form-div">
            <label>Brand :</label>
            <input
              disabled
              type="text"
              className="form-input"
              name="brand"
              value={productData?.brand}
            />
          </div>
          <div className="form-div">
            <label>Quantity :</label>
            <input
              disabled
              type="number"
              className="form-input"
              name="quantity"
              value={productData?.quantity}
            />
          </div>
          <div className="form-div">
            <label>Color :</label>
            <input
              disabled
              type="number"
              className="form-input"
              name="quantity"
              value={productData?.color}
            />
          </div>

          <div className="product-images">
            {previews?.map((previewUrl, index) => (
              <div className="an-image" key={index}>
                <UploadImage
                  previewUrl={previewUrl?.url || previewUrl}
                  index={index}
                  trueImages={trueImages}
                />
              </div>
            ))}
          </div>

          <div className="call-to-action">
            <Link to="/admin-dashboard/admin-product-list">BACK</Link>
            <button
              onClick={() =>
                navigate(`/admin-dashboard/admin-edit-product/${_id}`)
              }
            >
              EDIT
            </button>
          </div>
        </form>
      </div>
    </ProductView>
  );
};

const ProductView = styled.div`
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
  b {
    color: red;
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
      select {
        background: white;
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
  .close-uploader {
    display: none;
  }
  .uploader {
    width: 10rem;
    background: var(--bg-logo);
    text-align: center;
    border-radius: 1rem;
    label {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 0.5rem 1rem 0.5rem 2rem;
      cursor: pointer;
      span {
        font-size: 1.5rem;
        font-weight: 500;
      }
      input {
        display: flex;
        visibility: hidden;
        width: 100%;
      }
    }
  }
  .product-images {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    gap: 2rem;
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
export default ViewProduct;
