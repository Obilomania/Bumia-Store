import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import UploadImage from "../../../../components/UploadImage";
import { IoCloudUploadOutline } from "react-icons/io5";
import {
  useGetAllBrandsQuery,
  useGetAllCategoriesQuery,
} from "../../../../redux/rtk-queries/adminAPI";
import Loader from "../../../../components/Loader";
import { createNewProduct } from "../../../../redux/axiosCalls/productAPI";
import toast from "react-hot-toast";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { data: categoryList, isLoading: isLoadingCategories } =
    useGetAllCategoriesQuery(null);
  const { data: brandList, isLoading: isLoadingBrands } =
    useGetAllBrandsQuery(null);

  const [productData, setProductData] = useState({
    title: "",
    description: "",
    slug: "",
    category: "",
    price: "",
    quantity: "",
    // productImage: [],
  });

  // ***************************HANDLE FORM INPUT ************************
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [images, setImages] = useState([]); // Array to hold selected images
  const [previews, setPreviews] = useState([]); // Array to hold image preview URLs

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Get the first file selected
    if (!file) return;

    // Allow only up to 5 images
    if (images.length >= 5) {
      alert("You can only upload up to 5 images");
      return;
    }

    // Create a preview URL for the image
    const previewUrl = URL.createObjectURL(file);

    // Update images and previews arrays
    setImages([...images, file]);
    setPreviews([...previews, previewUrl]);

    // Clear input value so the same file can be uploaded again
    e.target.value = "";
  };

  const handleImageRemove = (index) => {
    // Remove the image and its preview by index
    setImages(images.filter((_, i) => i !== index));
    setPreviews(previews.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (
      !productData.title ||
      !productData.description ||
      !productData.price ||
      !productData.slug ||
      !productData.category ||
      !productData.quantity
    ) {
      setIsLoading(false);
      return toast.error("Please fill in all the fields");
    }
    if (images.length <= 0) {
      toast.error("Please at an image");
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", productData.title);
    formData.append("description", productData.description);
    formData.append("slug", productData.slug);
    formData.append("category", productData.category);
    formData.append("brand", productData.brand);
    formData.append("color", productData.color);
    formData.append("price", productData.price);
    formData.append("quantity", productData.quantity);
    images.forEach((image) => {
      formData.append("images", image);
    });

    const res = await createNewProduct(formData);
    if (res.success) {
      toast.success("Product created successfully");
      navigate("/admin/products");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      toast.error(res.message);
    }
    setIsLoading(false);
  };

  return (
    <ProductCreation>
      {isLoading || isLoadingCategories || (isLoadingBrands && <Loader />)}
      <div className="create-container">
        <p className="sub-heading text-center">CREATE PRODUCT</p>
        <form onSubmit={handleSubmit}>
          <div className="form-div">
            <label>Product Name :</label>
            <input
              type="text"
              className="form-input"
              name="title"
              value={productData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-div">
            <label>Product Description : </label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleInputChange}
              id=""
              rows={4}
              cols={30}
            ></textarea>
          </div>
          <div className="form-div">
            <label>Slug :</label>
            <input
              type="text"
              className="form-input"
              name="slug"
              value={productData.slug}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-div">
            <label>Price :</label>
            <input
              type="text"
              name="price"
              value={productData.price}
              className="form-input"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-div">
            <label>Category :</label>
            <select
              id=""
              className="form-input"
              name="category"
              value={productData.category}
              onChange={handleInputChange}
            >
              <option value="">Select A Category</option>
              {categoryList?.map((category) => (
                <option key={category?._id} value={category?.title}>
                  {category?.title}
                </option>
              ))}
            </select>
          </div>
          <div className="form-div">
            <label>Brand :</label>
            <select
              name="brand"
              value={productData.brand}
              onChange={handleInputChange}
              id=""
              className="form-input"
            >
              <option value="">Select A Brand</option>
              {brandList?.map((brand) => (
                <option key={brand?._id} value={brand?.title}>
                  {brand?.title}
                </option>
              ))}
            </select>
          </div>
          <div className="form-div">
            <label>Quantity :</label>
            <input
              type="number"
              className="form-input"
              name="quantity"
              value={productData.quantity}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-div">
            <label>Color :</label>
            <select
              id=""
              className="form-input"
              name="color"
              value={productData.color}
              onChange={handleInputChange}
            >
              <option value="">Select A Color</option>
              <option value="Red">Red</option>
              <option value="Yellow">Yellow</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
              <option value="Black">Black</option>
            </select>
          </div>
          <div className={images.length >= 5 ? "close-uploader" : " uploader"}>
            <label>
              Upload Images{" "}
              <span>
                <IoCloudUploadOutline />
              </span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={images.length >= 5}
              />
            </label>
          </div>
          <div className="product-images">
            {previews.map((previewUrl, index) => (
              <div className="an-image" key={index}>
                <UploadImage
                  previewUrl={previewUrl}
                  handleImageRemove={handleImageRemove}
                  index={index}
                />
              </div>
            ))}
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
export default CreateProduct;
