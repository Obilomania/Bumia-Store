import React, { useState } from "react";
import styled from "styled-components";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoCloudUploadOutline } from "react-icons/io5";

const UploadImage = () => {
  const [productImageOne, setProductImageOne] = useState(null);

  // *********************HANDLE IMAGE ONE***************************
  const handleUploadImageOne = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setProductImageOne(null);
    }
    setProductImageOne(URL.createObjectURL(e.target.files[0]));
  };
  const removeImageOne = () => {
    setProductImageOne(null);
  };

  // *********************HANDLE IMAGE TWO***************************
  const [productImageTwo, setProductImageTwo] = useState(null);
  const handleUploadImageTwo = (e) => {
    const fileTwo = e.target.files[0];
    if (!fileTwo) {
      setProductImageTwo(null);
    }
    setProductImageTwo(URL.createObjectURL(e.target.files[0]));
  };
  const removeImageTwo = () => {
    setProductImageTwo(null);
  };

  // *********************HANDLE IMAGE THREE***************************
  const [productImageThree, setProductImageThree] = useState(null);
  const handleUploadImageThree = (e) => {
    const fileThree = e.target.files[0];
    if (!fileThree) {
      setProductImageThree(null);
    }
    setProductImageThree(URL.createObjectURL(e.target.files[0]));
  };
  const removeImageThree = () => {
    setProductImageThree(null);
  };

  // *********************HANDLE IMAGE FOUR***************************
  const [productImageFour, setProductImageFour] = useState(null);
  const handleUploadImageFour = (e) => {
    const fileFour = e.target.files[0];
    if (!fileFour) {
      setProductImageFour(null);
    }
    setProductImageFour(URL.createObjectURL(e.target.files[0]));
  };
  const removeImageFour = () => {
    setProductImageFour(null);
  };

  // *********************HANDLE IMAGE FOUR***************************
  const [productImageFive, setProductImageFive] = useState(null);
  const handleUploadImageFive = (e) => {
    const fileFour = e.target.files[0];
    if (!fileFour) {
      setProductImageFive(null);
    }
    setProductImageFive(URL.createObjectURL(e.target.files[0]));
  };
  const removeImageFive = () => {
    setProductImageFive(null);
  };

  return (
    <ImageUploadComponent>
      <div className="image-uploader">
        <input
          type="file"
          id="image-one"
          accept="image/*"
          onChange={handleUploadImageOne}
        />
        <label htmlFor="image-one" id="image-one-preview">
          <div className="upload-ta">
            <span>
              <IoCloudUploadOutline />
            </span>
            <p>PHOTO 1</p>
          </div>
        </label>
        <div
          className={productImageOne ? "image-preview" : "image-preview-close"}
        >
          <img src={productImageOne} alt="prod-img" />
          <span onClick={removeImageOne}>
            <FaRegTrashCan />
          </span>
        </div>
      </div>

      {/* ******************IMAGE TWO************************ */}
      <div className="image-uploader">
        <input
          type="file"
          id="image-two"
          accept="image/*"
          onChange={handleUploadImageTwo}
        />
        <label htmlFor="image-two" id="image-two-preview">
          <div className="upload-ta">
            <span>
              <IoCloudUploadOutline />
            </span>
            <p>PHOTO 2</p>
          </div>
        </label>
        <div
          className={productImageTwo ? "image-preview" : "image-preview-close"}
        >
          <img src={productImageTwo} alt="prod-img" />
          <span onClick={removeImageTwo}>
            <FaRegTrashCan />
          </span>
        </div>
      </div>

      {/* ******************IMAGE THREE************************ */}
      <div className="image-uploader">
        <input
          type="file"
          id="image-three"
          accept="image/*"
          onChange={handleUploadImageThree}
        />
        <label htmlFor="image-three" id="image-three-preview">
          <div className="upload-ta">
            <span>
              <IoCloudUploadOutline />
            </span>
            <p>PHOTO 3</p>
          </div>
        </label>
        <div
          className={
            productImageThree ? "image-preview" : "image-preview-close"
          }
        >
          <img src={productImageThree} alt="prod-img" />
          <span onClick={removeImageThree}>
            <FaRegTrashCan />
          </span>
        </div>
      </div>

      {/* ******************IMAGE FOUR************************ */}
      <div className="image-uploader">
        <input
          type="file"
          id="image-four"
          accept="image/*"
          onChange={handleUploadImageFour}
        />
        <label htmlFor="image-four" id="image-four-preview">
          <div className="upload-ta">
            <span>
              <IoCloudUploadOutline />
            </span>
            <p>PHOTO 4</p>
          </div>
        </label>
        <div
          className={productImageFour ? "image-preview" : "image-preview-close"}
        >
          <img src={productImageFour} alt="prod-img" />
          <span onClick={removeImageFour}>
            <FaRegTrashCan />
          </span>
        </div>
      </div>

      {/* ******************IMAGE FIVE************************ */}
      <div className="image-uploader">
        <input
          type="file"
          id="image-five"
          accept="image/*"
          onChange={handleUploadImageFive}
        />
        <label htmlFor="image-five" id="image-five-preview">
          <div className="upload-ta">
            <span>
              <IoCloudUploadOutline />
            </span>
            <p>PHOTO 5</p>
          </div>
        </label>
        <div
          className={productImageFive ? "image-preview" : "image-preview-close"}
        >
          <img src={productImageFive} alt="prod-img" />
          <span onClick={removeImageFive}>
            <FaRegTrashCan />
          </span>
        </div>
      </div>
    </ImageUploadComponent>
  );
};

const ImageUploadComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .image-uploader {
    width: 150px;
    height: 150px;
    box-shadow: 0 0 20px 5px rgba(100, 100, 100, 0.1);
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    label {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .upload-ta {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-weight: 500;
        span {
          font-size: 1.5rem;
          color: var(--bg-one);
        }
      }
    }
    input {
      display: none;
      visibility: hidden;
      width: 100%;
    }
  }

  .image-preview {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    span {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      font-size: 0.8rem;
      color: white;
      cursor: pointer;
      background: rgba(0, 0, 0, 0.7);
      padding: 0.5rem 0.5rem;
      border-radius: 100%;
    }
  }
  .image-preview-remove {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    .image-uploader {
      width: 100px;
      height: 100px;
      box-shadow: 0 0 20px 5px rgba(100, 100, 100, 0.1);
      position: relative;
      border-radius: 1rem;
      overflow: hidden;
      label {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .upload-ta {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          font-weight: 500;
          font-size: 0.8rem;
          span {
            font-size: 1.5rem;
            color: var(--bg-one);
          }
        }
      }
      input {
        display: none;
        visibility: hidden;
        width: 100%;
      }
    }

    .image-preview {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      span {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        font-size: 0.8rem;
        color: white;
        cursor: pointer;
        background: rgba(0, 0, 0, 0.7);
        padding: 0.5rem 0.5rem;
        border-radius: 100%;
      }
    }
    .image-preview-remove {
      display: none;
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    .image-uploader {
      width: 100px;
      height: 100px;
      box-shadow: 0 0 20px 5px rgba(100, 100, 100, 0.1);
      position: relative;
      border-radius: 1rem;
      overflow: hidden;
      label {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .upload-ta {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          font-weight: 500;
          font-size: 0.8rem;
          span {
            font-size: 1.5rem;
            color: var(--bg-one);
          }
        }
      }
      input {
        display: none;
        visibility: hidden;
        width: 100%;
      }
    }

    .image-preview {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      span {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        font-size: 0.8rem;
        color: white;
        cursor: pointer;
        background: rgba(0, 0, 0, 0.7);
        padding: 0.5rem 0.5rem;
        border-radius: 100%;
      }
    }
    .image-preview-remove {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-wrap: wrap;
    gap: 1rem;
    .image-uploader {
      width: 100px;
      height: 100px;
      box-shadow: 0 0 20px 5px rgba(100, 100, 100, 0.1);
      position: relative;
      border-radius: 1rem;
      overflow: hidden;
      label {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .upload-ta {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          font-weight: 500;
          font-size: 0.8rem;
          span {
            font-size: 1.5rem;
            color: var(--bg-one);
          }
        }
      }
      input {
        display: none;
        visibility: hidden;
        width: 100%;
      }
    }

    .image-preview {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      span {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        font-size: 0.8rem;
        color: white;
        cursor: pointer;
        background: rgba(0, 0, 0, 0.7);
        padding: 0.5rem 0.5rem;
        border-radius: 100%;
      }
    }
    .image-preview-remove {
      display: none;
    }
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-wrap: wrap;
    gap: 1.9rem;
    .image-uploader {
      width: 85px;
      height: 85px;
      box-shadow: 0 0 20px 5px rgba(100, 100, 100, 0.1);
      position: relative;
      border-radius: 1rem;
      overflow: hidden;
      label {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .upload-ta {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          font-weight: 500;
          font-size: 0.8rem;
          span {
            font-size: 1.5rem;
            color: var(--bg-one);
          }
        }
      }
      input {
        display: none;
        visibility: hidden;
        width: 100%;
      }
    }

    .image-preview {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      span {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        font-size: 0.8rem;
        color: white;
        cursor: pointer;
        background: rgba(0, 0, 0, 0.7);
        padding: 0.5rem 0.5rem;
        border-radius: 100%;
      }
    }
    .image-preview-remove {
      display: none;
    }
  }
  @media screen and (max-width: 350px) {
  }
`;
export default UploadImage;
