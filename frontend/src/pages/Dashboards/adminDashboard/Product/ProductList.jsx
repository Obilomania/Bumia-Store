import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useGetAllProductsQuery } from "../../../../redux/rtk-queries/adminAPI";
import { all_products } from "../../../../redux/reducers/adminSlice";
import Loader from "../../../../components/Loader";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading } = useGetAllProductsQuery(null);
  useEffect(() => {
    if (!isLoading) {
      dispatch(all_products(data));
    }
  }, [data, dispatch, isLoading]);
  return (
    <ListProduct>
      {isLoading && <Loader />}

      <div className="user-list">
        <h6 className="chart-heading text-center">PRODUCT LIST</h6>

        <div className="toppers">
          <p>
            <b>{data?.length}</b> &nbsp;<span>Products</span>
          </p>
          <Link to="/admin-dashboard/admin-create-product">CREATE PRODUCT</Link>
        </div>
        <div className="top-order">
          <p>No.</p>
          <p>Title</p>
          <p>Brand</p>
          <p>Category</p>
          <p></p>
        </div>
        <div className="bottom-order">
          {data?.map((product, index) => (
            <div className="bottom-order-content" key={index}>
              <p>{index + 1}</p>
              <p>{product?.title}</p>
              <p>{product?.brand}</p>
              <p>{product?.category}</p>
              <p className="edit-delete">
                <span
                  onClick={() =>
                    navigate(
                      `/admin-dashboard/admin-view-product/${product?._id}`
                    )
                  }
                >
                  <MdOutlineRemoveRedEye />
                </span>
                <span
                  onClick={() =>
                    navigate(
                      `/admin-dashboard/admin-edit-product/${product?._id}`
                    )
                  }
                >
                  <FaEdit />
                </span>
                <span>
                  <FaRegTrashCan />
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </ListProduct>
  );
};

const ListProduct = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  .toppers {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.8rem;
    a {
      background: var(--bg-logo);
      color: black;
      border: none;
      padding: 0.3rem 1rem;
      font-size: 0.8rem;
      font-weight: 500;
      border-radius: 0.3rem;
      transition: 400ms all ease;
      &:hover {
        background: var(--bg-one);
        color: white;
        transition: 400ms all ease;
      }
    }
  }
  .top-order {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;
    box-shadow: 0 0 10px #0000001a;
    padding: 1rem;
    border-radius: 0.5rem;
    background: white;
    p: nth-child(1) {
      width: 3%;
      text-align: center;
    }
    p: nth-child(2) {
      width: 30%;
      text-align: center;
    }
    p: nth-child(3) {
      width: 30%;
      text-align: center;
    }
    p: nth-child(4) {
      width: 30%;
      text-align: center;
    }
    p: nth-child(5) {
      width: 7%;
      text-align: center;
    }
  }
  .bottom-order {
    width: 100%;
    box-shadow: 0 0 10px #0000001a;
    padding: 1rem 1rem 0rem 1rem;
    border-radius: 0.5rem;
    background: white;
    min-height: 20vh;
    overflow-y: auto;

    .bottom-order-content {
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.8rem;
      border-bottom: 3px solid var(--bg-grey);
      transition: var(--transition);
      cursor: auto;
      &:hover {
        background: var(--bg-grey);
        transition: var(--transition);
        cursor: auto;
      }
      p: nth-child(1) {
        width: 3%;
        text-align: center;
      }
      p: nth-child(2) {
        width: 30%;
        text-align: center;
      }
      p: nth-child(3) {
        width: 30%;
        text-align: center;
      }
      p: nth-child(4) {
        width: 30%;
        text-align: center;
      }
      p: nth-child(5) {
        width: 7%;
        text-align: center;
      }
      .edit-delete {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        span {
          cursor: pointer;
        }
        span:nth-child(2) {
          color: var(--bg-red);
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .edit-modal {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      form {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        width: 100%;
        input {
          border: 1px solid var(--bg-grey);
          outline: none;
          padding: 0.5rem 1rem;
          font-size: 0.8rem;
          width: 65%;
        }
        button {
          background: var(--bg-logo);
          color: black;
          border: none;
          padding: 0.3rem 1rem;
        }
        .cancel-edit {
          cursor: pointer;
          border-bottom: 0.2rem solid var(--bg-one);
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
  }
  @media screen and (max-width: 600px) {
    .edit-modal {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      form {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        width: 100%;
        p:nth-child(1) {
          font-size: 0.7rem;
        }
        input {
          border: 1px solid var(--bg-grey);
          outline: none;
          padding: 0.5rem 1rem;
          font-size: 0.7rem;
          width: 65%;
        }
        button {
          background: var(--bg-logo);
          color: black;
          border: none;
          padding: 0.3rem 1rem;
          font-size: 0.7rem;
        }
        .cancel-edit {
          cursor: pointer;
          border-bottom: 0.2rem solid var(--bg-one);
          font-size: 0.7rem;
        }
      }
    }
  }
  @media screen and (max-width: 420px) {
    .edit-modal {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      form {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        width: 100%;
        p:nth-child(1) {
          font-size: 0.7rem;
        }
        input {
          border: 1px solid var(--bg-grey);
          outline: none;
          padding: 0.5rem 1rem;
          font-size: 0.7rem;
          width: 65%;
        }
        button {
          background: var(--bg-logo);
          color: black;
          border: none;
          padding: 0.3rem 1rem;
          font-size: 0.7rem;
        }
        .cancel-edit {
          cursor: pointer;
          border-bottom: 0.2rem solid var(--bg-one);
          font-size: 0.7rem;
        }
      }
    }
  }
  @media screen and (max-width: 350px) {
  }
`;

export default ProductList;
