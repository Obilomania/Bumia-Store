import styled from "styled-components";
import { FaRegTrashCan } from "react-icons/fa6";

const UploadImage = ({ previewUrl, handleImageRemove, index }) => {

  return (
    <ImageUploadComponent>
      <div className="image-uploader" key={index}>
        <div className={previewUrl ? "image-preview" : "image-preview-close"}>
          <img src={previewUrl.url || previewUrl  } alt="prod-img" />
          <span onClick={() => handleImageRemove(index)}>
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
      input {
        display: flex;
        visibility: hidden;
        width: 100%;
      }
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
