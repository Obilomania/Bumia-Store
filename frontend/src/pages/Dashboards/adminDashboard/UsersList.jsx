import React, { useEffect, useState } from 'react'
import { IoEyeOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { applicationUsers } from './chartData';
import ReactPaginate from 'react-paginate';
import { filtered_users } from '../../../redux/reducers/adminSlice';

const UsersList = () => {
    const [searchUsers, setSearchUsers] = useState("");
    const dispatch = useDispatch();
    const filteredUserList = useSelector(
      (state) => state.persistedReducer.admin.filteredUsers
  );
    

    //Beginning of Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredUserList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredUserList.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredUserList]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % filteredUserList.length;

    setItemOffset(newOffset);
  };
  //End of Pagination

    useEffect(() => {
        dispatch(
          filtered_users({ users: applicationUsers, searchUser: searchUsers })
        );
    },[dispatch, searchUsers])
    

  return (
    <TheUsersList>
      <div className="user-list">
        <h6 className="chart-heading text-center">APPLICATION USERS</h6>
        <div className="headSearch">
          <p>
            Total Users :{" "}
            <span>
              <b>20</b>
            </span>
          </p>
          <p>
            Blocked Users :{" "}
            <span className="text-danger">
              <b>5</b>
            </span>
          </p>
          <div className="search">
            <input
              type="text"
              className=""
              placeholder="Search Orders..."
              value={searchUsers}
              onChange={(e) => setSearchUsers(e.target.value)}
            />
          </div>
        </div>

        <div className="top-order">
          <p>No.</p>
          <p>Name</p>
          <p>Email</p>
          <p>Role</p>
         
          <p></p>
        </div>
        <div className="bottom-order">
          {currentItems?.map((user, index) => (
            <div className="bottom-order-content" key={user?.id}>
              <p>{index + 1}</p>
              <p>{user?.name}</p>
              <p>{user?.email}</p>
              <p>{user?.role}</p>
              
              <p>
                <IoEyeOutline />
              </p>
            </div>
          ))}
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel="Prev"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="prev-link"
            nextLinkClassName="next-link"
            activeLinkClassName="active"
          />
        </div>
      </div>
    </TheUsersList>
  );
}

const TheUsersList = styled.div`
  width: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: start;
  justify-content: space-between;
  .user-list {
    width: 100%;
    height: 100%;
    box-shadow: 0 0 10px #0000001a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    border-radius: 0.5rem;
    padding: 1rem 0rem 0rem 0rem;
    .headSearch {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0 1rem;
      p {
        font-size: 0.8rem;
      }
      .search {
        width: 50%;
        input {
          padding: 0.2rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid var(--bg-one);
          outline: none;
          width: 100%;
          font-size: 0.8rem;
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
        width: 25%;
        text-align: center;
      }
      p: nth-child(3) {
        width: 35%;
        text-align: center;
      }
      p: nth-child(4) {
        width: 20%;
        text-align: center;
      }
      p: nth-child(5) {
        width: 17%;
        text-align: center;
      }
    }
    .bottom-order {
      width: 100%;
      box-shadow: 0 0 10px #0000001a;
      padding: 1rem 1rem 0rem 1rem;
      border-radius: 0.5rem;
      background: white;
      height: 41vh;
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
          width: 25%;
          text-align: center;
        }
        p: nth-child(3) {
          width: 35%;
          text-align: center;
        }
        p: nth-child(4) {
          width: 20%;
          text-align: center;
        }
        p: nth-child(5) {
          width: 17%;
          text-align: center;
        }
      }
      .pagination {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        font-size: 0.8rem;
        margin-top: 1.5rem;
        .page-num {
          color: var(--bg-one);
          width: 1.5rem;
          text-align: center;
          transition: var(--transition);
          border: 1px solid var(--bg-one);
          font-weight: 500;
        }
        .next-btn {
          color: var(--bg-logo);
        }
        .active {
          background: var(--bg-logo);
          color: black;
          font-weight: 500;
          transition: var(--transition);
          padding: 0.1rem 0;
          border: 1px solid var(--bg-one);
        }
        .prev-link,
        .next-link {
          background: var(--bg-logo);
          color: var(--bg-one);
          font-weight: 500;
          border: 1px solid var(--bg-one);
          padding: 0.1rem 0.5rem;
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: start;
    justify-content: space-between;
    /* .headSearch .totalusers {
      display: none;
    } */
    .user-list {
      width: 100%;
      height: 100%;
      box-shadow: 0 0 10px #0000001a;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      border-radius: 0.5rem;
      padding: 1rem 0rem 0rem 0rem;
      .headSearch {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 1rem;
        p {
          font-size: 0.8rem;
        }
        .search {
          width: 50%;
          input {
            padding: 0.2rem 1rem;
            border-radius: 0.5rem;
            border: 1px solid var(--bg-one);
            outline: none;
            width: 100%;
            font-size: 0.8rem;
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
          width: 25%;
          text-align: center;
        }
        p: nth-child(3) {
          width: 35%;
          text-align: center;
          /* display: none; */
        }
        p: nth-child(4) {
          width: 20%;
          text-align: center;
          /* display: none; */
        }
        p: nth-child(5) {
          width: 17%;
          text-align: center;
        }
      }
      .bottom-order {
        width: 100%;
        box-shadow: 0 0 10px #0000001a;
        padding: 1rem 1rem 0rem 1rem;
        border-radius: 0.5rem;
        background: white;
        height: fit-content;
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
            width: 25%;
            text-align: center;
          }
          p: nth-child(3) {
            width: 35%;
            text-align: center;
            /* display: none; */
          }
          p: nth-child(4) {
            width: 20%;
            text-align: center;
            /* display: none; */
          }
          p: nth-child(5) {
            width: 17%;
            text-align: center;
          }
        }
        .pagination {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-size: 0.8rem;
          margin-top: 1.5rem;
          .page-num {
            color: var(--bg-one);
            width: 1.5rem;
            text-align: center;
            transition: var(--transition);
            border: 1px solid var(--bg-one);
            font-weight: 500;
          }
          .next-btn {
            color: var(--bg-logo);
          }
          .active {
            background: var(--bg-logo);
            color: black;
            font-weight: 500;
            transition: var(--transition);
            padding: 0.1rem 0;
            border: 1px solid var(--bg-one);
          }
          .prev-link,
          .next-link {
            background: var(--bg-logo);
            color: var(--bg-one);
            font-weight: 500;
            border: 1px solid var(--bg-one);
            padding: 0.1rem 0.5rem;
          }
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: start;
    justify-content: space-between;
    /* .headSearch .totalusers {
      display: none;
    } */
    .user-list {
      width: 100%;
      height: 100%;
      box-shadow: 0 0 10px #0000001a;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      border-radius: 0.5rem;
      padding: 1rem 0rem 0rem 0rem;
      .headSearch {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 1rem;
        p {
          font-size: 0.8rem;
        }
        .search {
          width: 50%;
          input {
            padding: 0.2rem 1rem;
            border-radius: 0.5rem;
            border: 1px solid var(--bg-one);
            outline: none;
            width: 100%;
            font-size: 0.8rem;
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
          width: 25%;
          text-align: center;
        }
        p: nth-child(3) {
          width: 35%;
          text-align: center;
          /* display: none; */
        }
        p: nth-child(4) {
          width: 20%;
          text-align: center;
          /* display: none; */
        }
        p: nth-child(5) {
          width: 17%;
          text-align: center;
        }
      }
      .bottom-order {
        width: 100%;
        box-shadow: 0 0 10px #0000001a;
        padding: 1rem 1rem 0rem 1rem;
        border-radius: 0.5rem;
        background: white;
        height: fit-content;
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
            width: 25%;
            text-align: center;
          }
          p: nth-child(3) {
            width: 35%;
            text-align: center;
            /* display: none; */
          }
          p: nth-child(4) {
            width: 20%;
            text-align: center;
            /* display: none; */
          }
          p: nth-child(5) {
            width: 17%;
            text-align: center;
          }
        }
        .pagination {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-size: 0.8rem;
          margin-top: 1.5rem;
          .page-num {
            color: var(--bg-one);
            width: 1.5rem;
            text-align: center;
            transition: var(--transition);
            border: 1px solid var(--bg-one);
            font-weight: 500;
          }
          .next-btn {
            color: var(--bg-logo);
          }
          .active {
            background: var(--bg-logo);
            color: black;
            font-weight: 500;
            transition: var(--transition);
            padding: 0.1rem 0;
            border: 1px solid var(--bg-one);
          }
          .prev-link,
          .next-link {
            background: var(--bg-logo);
            color: var(--bg-one);
            font-weight: 500;
            border: 1px solid var(--bg-one);
            padding: 0.1rem 0.5rem;
          }
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: start;
    justify-content: space-between;
    .headSearch .totalusers {
      display: none;
    }
    .user-list {
      width: 100%;
      height: 100%;
      box-shadow: 0 0 10px #0000001a;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      border-radius: 0.5rem;
      padding: 1rem 0rem 0rem 0rem;
      .headSearch {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 1rem;
        p:nth-child(2){
          display:none;
        }
        p {
          font-size: 0.8rem;
        }
        .search {
          width: 50%;
          input {
            padding: 0.2rem 1rem;
            border-radius: 0.5rem;
            border: 1px solid var(--bg-one);
            outline: none;
            width: 100%;
            font-size: 0.8rem;
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
          width: 25%;
          text-align: center;
        }
        p: nth-child(3) {
          width: 35%;
          text-align: center;
          display: none;
        }
        p: nth-child(4) {
          width: 20%;
          text-align: center;
          display: none;
        }
        p: nth-child(5) {
          width: 17%;
          text-align: center;
        }
      }
      .bottom-order {
        width: 100%;
        box-shadow: 0 0 10px #0000001a;
        padding: 1rem 1rem 0rem 1rem;
        border-radius: 0.5rem;
        background: white;
        height: fit-content;
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
            width: 25%;
            text-align: center;
          }
          p: nth-child(3) {
            width: 35%;
            text-align: center;
            display: none;
          }
          p: nth-child(4) {
            width: 20%;
            text-align: center;
            display: none;
          }
          p: nth-child(5) {
            width: 17%;
            text-align: center;
          }
        }
        .pagination {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-size: 0.8rem;
          margin-top: 1.5rem;
          .page-num {
            color: var(--bg-one);
            width: 1.5rem;
            text-align: center;
            transition: var(--transition);
            border: 1px solid var(--bg-one);
            font-weight: 500;
          }
          .next-btn {
            color: var(--bg-logo);
          }
          .active {
            background: var(--bg-logo);
            color: black;
            font-weight: 500;
            transition: var(--transition);
            padding: 0.1rem 0;
            border: 1px solid var(--bg-one);
          }
          .prev-link,
          .next-link {
            background: var(--bg-logo);
            color: var(--bg-one);
            font-weight: 500;
            border: 1px solid var(--bg-one);
            padding: 0.1rem 0.5rem;
          }
        }
      }
    }
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: start;
    justify-content: space-between;
    .headSearch .totalusers {
      display: none;
    }
    .user-list {
      width: 100%;
      height: 100%;
      box-shadow: 0 0 10px #0000001a;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      border-radius: 0.5rem;
      padding: 1rem 0rem 0rem 0rem;
      .headSearch {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 1rem;
        p:nth-child(2){
          display:none;
        }
        p {
          font-size: 0.8rem;
        }
        .search {
          width: 50%;
          input {
            padding: 0.2rem 1rem;
            border-radius: 0.5rem;
            border: 1px solid var(--bg-one);
            outline: none;
            width: 100%;
            font-size: 0.8rem;
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
          width: 25%;
          text-align: center;
        }
        p: nth-child(3) {
          width: 35%;
          text-align: center;
          display: none;
        }
        p: nth-child(4) {
          width: 20%;
          text-align: center;
          display: none;
        }
        p: nth-child(5) {
          width: 17%;
          text-align: center;
        }
      }
      .bottom-order {
        width: 100%;
        box-shadow: 0 0 10px #0000001a;
        padding: 1rem 1rem 0rem 1rem;
        border-radius: 0.5rem;
        background: white;
        height: fit-content;
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
            width: 25%;
            text-align: center;
          }
          p: nth-child(3) {
            width: 35%;
            text-align: center;
            display: none;
          }
          p: nth-child(4) {
            width: 20%;
            text-align: center;
            display: none;
          }
          p: nth-child(5) {
            width: 17%;
            text-align: center;
          }
        }
        .pagination {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-size: 0.8rem;
          margin-top: 1.5rem;
          .page-num {
            color: var(--bg-one);
            width: 1.5rem;
            text-align: center;
            transition: var(--transition);
            border: 1px solid var(--bg-one);
            font-weight: 500;
          }
          .next-btn {
            color: var(--bg-logo);
          }
          .active {
            background: var(--bg-logo);
            color: black;
            font-weight: 500;
            transition: var(--transition);
            padding: 0.1rem 0;
            border: 1px solid var(--bg-one);
          }
          .prev-link,
          .next-link {
            background: var(--bg-logo);
            color: var(--bg-one);
            font-weight: 500;
            border: 1px solid var(--bg-one);
            padding: 0.1rem 0.5rem;
          }
        }
      }
    }
  }
  @media screen and (max-width: 350px) {
    width: 100%;
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: start;
    justify-content: space-between;
    .headSearch .totalusers {
      display: none;
    }
    .user-list {
      width: 100%;
      height: 100%;
      box-shadow: 0 0 10px #0000001a;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      border-radius: 0.5rem;
      padding: 1rem 0rem 0rem 0rem;
      .headSearch {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 1rem;
        p:nth-child(2){
          display:none;
        }
        p {
          font-size: 0.8rem;
        }
        .search {
          width: 50%;
          input {
            padding: 0.2rem 1rem;
            border-radius: 0.5rem;
            border: 1px solid var(--bg-one);
            outline: none;
            width: 100%;
            font-size: 0.8rem;
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
          width: 25%;
          text-align: center;
        }
        p: nth-child(3) {
          width: 35%;
          text-align: center;
          display: none;
        }
        p: nth-child(4) {
          width: 20%;
          text-align: center;
          display: none;
        }
        p: nth-child(5) {
          width: 17%;
          text-align: center;
        }
      }
      .bottom-order {
        width: 100%;
        box-shadow: 0 0 10px #0000001a;
        padding: 1rem 1rem 0rem 1rem;
        border-radius: 0.5rem;
        background: white;
        height: fit-content;
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
            width: 25%;
            text-align: center;
          }
          p: nth-child(3) {
            width: 35%;
            text-align: center;
            display: none;
          }
          p: nth-child(4) {
            width: 20%;
            text-align: center;
            display: none;
          }
          p: nth-child(5) {
            width: 17%;
            text-align: center;
          }
        }
        .pagination {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-size: 0.8rem;
          margin-top: 1.5rem;
          .page-num {
            color: var(--bg-one);
            width: 1.5rem;
            text-align: center;
            transition: var(--transition);
            border: 1px solid var(--bg-one);
            font-weight: 500;
          }
          .next-btn {
            color: var(--bg-logo);
          }
          .active {
            background: var(--bg-logo);
            color: black;
            font-weight: 500;
            transition: var(--transition);
            padding: 0.1rem 0;
            border: 1px solid var(--bg-one);
          }
          .prev-link,
          .next-link {
            background: var(--bg-logo);
            color: var(--bg-one);
            font-weight: 500;
            border: 1px solid var(--bg-one);
            padding: 0.1rem 0.5rem;
          }
        }
      }
    }
  }
`;
export default UsersList