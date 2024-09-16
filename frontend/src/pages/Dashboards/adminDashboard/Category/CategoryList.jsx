import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  useDeleteCategoryMutation,
  useEditCategoryMutation,
  useGetAllCategoriesQuery,
} from "../../../../redux/rtk-queries/adminAPI";
import Loader from "../../../../components/Loader";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  all_categories,
  category_id,
} from "../../../../redux/reducers/adminSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const { data, isLoading } = useGetAllCategoriesQuery(null);
  const dispatch = useDispatch();
  const [editModal, setEditModal] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      dispatch(all_categories(data));
    }
  }, [data, dispatch, isLoading]);

  const revealEdit = (id) => {
    dispatch(category_id(id));
    setEditModal(true);
  };
  const closeRevealEdit = () => {
    dispatch(category_id(""));
    setEditModal(false);
  };

  const allCategories = useSelector(
    (state) => state?.persistedReducer?.admin?.allCategories
  );
  const theCategory_id = useSelector(
    (state) => state?.persistedReducer?.admin?.categoryID
  );

  const theCategory = allCategories?.find(
    (category) => category._id === theCategory_id
  );
  const [editCategory, setEditCategory] = useState({
    title: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setEditCategory({ ...editCategory, [name]: value });
  };
  const [updateCategory, { isLoading: isUpdating }] = useEditCategoryMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await updateCategory({
      _id: theCategory._id,
      title: editCategory,
    });
    if (res?.data) {
      toast.success("Category Updated Successfully");
      setEditModal(false);
      setEditCategory("");
    } else if (res?.error) {
      return toast.error(res?.error?.data?.message);
    }
  };

  const [deleteCategory] = useDeleteCategoryMutation();
  const handleCategoryDelete = async (_id) => {
    const response = await deleteCategory(_id);
    if (response?.data) {
      toast.success("Category Deleted Successfully");
    } else if (response?.error) {
      return toast.error(response?.error?.data?.message);
    }
  };
  return (
    <ListCategory>
      {isLoading || (isUpdating && <Loader />)}

      <div className="user-list">
        <h6 className="chart-heading text-center">CATEGORY LIST</h6>
        <br />
        {editModal && (
          <>
            <div className="edit-modal">
              <form onSubmit={handleSubmit}>
                <p>{theCategory?.title}</p>
                <input
                  type="text"
                  name="title"
                  value={editCategory.title}
                  onChange={handleInput}
                />
                <button type="submit">Update</button>
                <p className="cancel-edit" onClick={closeRevealEdit}>
                  Cancel
                </p>
              </form>
            </div>
            <br />
          </>
        )}
        <div className="toppers">
          <p>
            <b>{data?.length}</b> &nbsp;<span>Categories</span>
          </p>
          <Link to="/admin-dashboard/admin-create-category">
            CREATE CATEGORY
          </Link>
        </div>
        <div className="top-order">
          <p>No.</p>
          <p>Category</p>
          <p></p>
        </div>
        <div className="bottom-order">
          {data?.map((category, index) => (
            <div className="bottom-order-content" key={index}>
              <p>{index + 1}</p>
              <p>{category?.title}</p>
              <p className="edit-delete">
                {!editModal ? (
                  <span>
                    <FaEdit onClick={() => revealEdit(category?._id)} />
                  </span>
                ) : null}
                <span onClick={() => handleCategoryDelete(category?._id)}>
                  <FaRegTrashCan />
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </ListCategory>
  );
};

const ListCategory = styled.div`
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
  .active {
    background: var(--bg-grey);
  }
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
        width: 20%;
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
      width: 97%;
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
        width: 97%;
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
`;
export default CategoryList;
