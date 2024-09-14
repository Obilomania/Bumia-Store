import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaRegUser } from "react-icons/fa";
import { BsHandbagFill } from "react-icons/bs";
import { newOrders } from "./chartData";
import { IoEyeOutline } from "react-icons/io5";
import { BsBagXFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_PRODUCTS } from "../../../redux/reducers/orderSlice";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaFirstOrderAlt } from "react-icons/fa6";
import ReactPaginate from "react-paginate";
import UsersList from "./UsersList";

const AdminTopComponent = () => {
  const [searchOrder, setSearchOrder] = useState("");
  const dispatch = useDispatch();
  const filteredOrderList = useSelector((state) => state.order.filteredOrders);

  //Beginning of Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredOrderList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredOrderList.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredOrderList]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % filteredOrderList.length;

    setItemOffset(newOffset);
  };
  //End of Pagination

  useEffect(() => {
    dispatch(FILTER_PRODUCTS({ orders: newOrders, search: searchOrder }));
  }, [dispatch, searchOrder]);

  return (
    <TopLanding>
      <div className="topest-contest">
        <div className="cards">
          <div className="card">
            <div className="card-icon">
              <p className="naira">&#8358;</p>
            </div>
            <p className="card-heading">Total Revenue</p>
            <p className="card-value">&#8358; 100,000</p>
          </div>
          <div className="card">
            <div className="card-icon">
              <p className="naira">
                <FaRegUser />
              </p>
            </div>
            <p className="card-heading">Users</p>
            <p className="card-value">298</p>
          </div>
          <div className="card">
            <div className="card-icon">
              <p className="naira">
                <BsHandbagFill />
              </p>
            </div>
            <p className="card-heading">Total Products</p>
            <p className="card-value">1854</p>
          </div>
          <div className="card">
            <div className="card-icon">
              <p className="naira">
                <BsBagXFill />
              </p>
            </div>
            <p className="card-heading">Out Of Stock</p>
            <p className="card-value">38</p>
          </div>
          <div className="card">
            <div className="card-icon">
              <p className="naira">
                <FaFirstOrderAlt />
              </p>
            </div>
            <p className="card-heading">New Order</p>
            <p className="card-value">38</p>
          </div>
          <div className="card">
            <div className="card-icon">
              <p className="naira">
                <LiaShippingFastSolid />
              </p>
            </div>
            <p className="card-heading">Shipped Out</p>
            <p className="card-value">38</p>
          </div>
        </div>
        <div className="new-orders">
          <h6 className="chart-heading text-center">ORDERS</h6>
          <div className="headSearch">
            <p>
              Total Orders :{" "}
              <span>
                <b>20</b>
              </span>
            </p>
            <p>
              New Orders :{" "}
              <span className="text-danger">
                <b>5</b>
              </span>
            </p>
            <div className="search">
              <input
                type="text"
                className=""
                placeholder="Search Orders..."
                value={searchOrder}
                onChange={(e) => setSearchOrder(e.target.value)}
              />
            </div>
          </div>

          <div className="top-order">
            <p>No.</p>
            <p>Customer</p>
            <p>date</p>
            <p>Product</p>
            <p>Price</p>
            <p>Qty</p>
            <p>Image</p>
            <p></p>
          </div>
          <div className="bottom-order">
            {currentItems?.map((order, index) => (
              <div className="bottom-order-content" key={order.id}>
                <p>{index + 1}</p>
                <p>{order.customer}</p>
                <p>{order.date}</p>
                <p>{order.product}</p>
                <p>&#x20A6; {order.quantity * order.price}</p>
                <p>{order.quantity}</p>
                <div className="img">
                  <img src={order.image} alt="order-img" />
                </div>
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
      </div>
      <div className="user-list-section">
        <UsersList />
      </div>
    </TopLanding>
  );
};

const TopLanding = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  .topest-contest {
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: start;
    justify-content: space-between;
  }
  .user-list-section {
    width: 100%;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 1.2rem;
    grid-row-gap: 1.2rem;
    width: 29.5%;
    .card {
      width: 100%;
      height: 100%;
      padding: 1rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      box-shadow: 0 0 10px #0000001a;
      .card-icon {
        font-size: 1.5rem;
        background: var(--bg-grey);
        padding: 1rem 1.5rem;
        border-radius: 100%;
      }
      .card-heading {
        font-weight: 500;
      }
      .card-value {
        font-size: 0.8rem;
      }
    }
  }
  .new-orders {
    width: 69%;
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
        width: 20%;
        text-align: center;
      }
      p: nth-child(3) {
        width: 25%;
        text-align: center;
      }
      p: nth-child(4) {
        width: 20%;
        text-align: center;
      }
      p: nth-child(5) {
        width: 13%;
        text-align: center;
      }
      p: nth-child(6) {
        width: 3%;
        text-align: center;
      }
      p: nth-child(7) {
        width: 5%;
        text-align: center;
        margin-left: 2%;
      }
      p: nth-child(8) {
        width: 5%;
        text-align: center;
      }
    }
    .bottom-order {
      width: 100%;
      box-shadow: 0 0 10px #0000001a;
      padding: 1rem 1rem 0rem 1rem;
      border-radius: 0.5rem;
      background: white;
      height: 37.5vh;
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
          width: 20%;
          text-align: center;
        }
        p: nth-child(3) {
          width: 25%;
          text-align: center;
        }
        p: nth-child(4) {
          width: 20%;
          text-align: center;
        }
        p: nth-child(5) {
          width: 13%;
          text-align: center;
        }
        p: nth-child(6) {
          width: 3%;
          text-align: center;
        }
        .img {
          width: 5%;
          height: 2.5rem;
          text-align: center;
          overflow: hidden;
          margin-left: 2%;
          border-radius: 0.5rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        p: nth-child(8) {
          width: 5%;
          text-align: center;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 500;
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
    padding: 1rem 0;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    .topest-contest {
      width: 100%;
      padding: 1rem;
      display: flex;
      align-items: start;
      justify-content: space-between;
      flex-direction: column;
      gap: 1rem;
    }
    .user-list-section {
      width: 100%;
    }
    .cards {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 1rem;
      grid-row-gap: 1rem;
      width: 100%;
      .card {
        width: 100%;
        height: 100%;
        padding: 0.8rem;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        box-shadow: 0 0 10px #0000001a;
        .card-icon {
          font-size: 1rem;
          background: var(--bg-grey);
          padding: 0.5rem 1rem;
          border-radius: 100%;
        }
        .card-heading {
          font-weight: 500;
          font-size: 0.8rem;
        }
        .card-value {
          font-size: 0.7rem;
        }
      }
    }
    .new-orders {
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
        /* p:nth-child(1) {
          display: none;
        } */
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
          width: 30%;
          text-align: center;
        }
        p: nth-child(3) {
          width: 25%;
          text-align: center;
        }
        p: nth-child(4) {
          width: 20%;
          text-align: center;
        }
        p: nth-child(5) {
          width: 13%;
          text-align: center;
          display: none;
        }
        p: nth-child(6) {
          width: 3%;
          text-align: center;
          display: none;
        }
        p: nth-child(7) {
          width: 5%;
          text-align: center;
          margin-left: 2%;
          display: none;
        }
        p: nth-child(8) {
          width: 5%;
          text-align: center;
        }
      }
      .bottom-order {
        width: 100%;
        box-shadow: 0 0 10px #0000001a;
        padding: 1rem 1rem 0rem 1rem;
        border-radius: 0.5rem;
        background: white;
        height: 37.5vh;
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
            width: 25%;
            text-align: center;
          }
          p: nth-child(4) {
            width: 20%;
            text-align: center;
          }
          p: nth-child(5) {
            width: 13%;
            text-align: center;
            display: none;
          }
          p: nth-child(6) {
            width: 3%;
            text-align: center;
            display: none;
          }
          .img {
            display: none;

            width: 5%;
            height: 2.5rem;
            text-align: center;
            overflow: hidden;
            margin-left: 2%;
            border-radius: 0.5rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          p: nth-child(8) {
            width: 5%;
            text-align: center;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 500;
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
    padding: 1rem 0;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    .topest-contest {
      width: 100%;
      padding: 1rem;
      display: flex;
      align-items: start;
      justify-content: space-between;
      flex-direction: column;
      gap: 1rem;
    }
    .user-list-section {
      width: 100%;
    }
    .cards {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 1rem;
      grid-row-gap: 1rem;
      width: 100%;
      .card {
        width: 100%;
        height: 100%;
        padding: 0.8rem;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        box-shadow: 0 0 10px #0000001a;
        .card-icon {
          font-size: 1rem;
          background: var(--bg-grey);
          padding: 0.5rem 1rem;
          border-radius: 100%;
        }
        .card-heading {
          font-weight: 500;
          font-size: 0.8rem;
        }
        .card-value {
          font-size: 0.7rem;
        }
      }
    }
    .new-orders {
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
        /* p:nth-child(1) {
          display: none;
        } */
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
          width: 30%;
          text-align: center;
        }
        p: nth-child(3) {
          width: 25%;
          text-align: center;
        }
        p: nth-child(4) {
          width: 20%;
          text-align: center;
        }
        p: nth-child(5) {
          width: 13%;
          text-align: center;
          display: none;
        }
        p: nth-child(6) {
          width: 3%;
          text-align: center;
          display: none;
        }
        p: nth-child(7) {
          width: 5%;
          text-align: center;
          margin-left: 2%;
          display: none;
        }
        p: nth-child(8) {
          width: 5%;
          text-align: center;
        }
      }
      .bottom-order {
        width: 100%;
        box-shadow: 0 0 10px #0000001a;
        padding: 1rem 1rem 0rem 1rem;
        border-radius: 0.5rem;
        background: white;
        height: 37.5vh;
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
            width: 25%;
            text-align: center;
          }
          p: nth-child(4) {
            width: 20%;
            text-align: center;
          }
          p: nth-child(5) {
            width: 13%;
            text-align: center;
            display: none;
          }
          p: nth-child(6) {
            width: 3%;
            text-align: center;
            display: none;
          }
          .img {
            display: none;

            width: 5%;
            height: 2.5rem;
            text-align: center;
            overflow: hidden;
            margin-left: 2%;
            border-radius: 0.5rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          p: nth-child(8) {
            width: 5%;
            text-align: center;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 500;
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
    padding: 1rem 0;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    .topest-contest {
      width: 100%;
      padding: 1rem;
      display: flex;
      align-items: start;
      justify-content: space-between;
      flex-direction: column;
      gap: 1rem;
    }
    .user-list-section {
      width: 100%;
    }
    .cards {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 1rem;
      grid-row-gap: 1rem;
      width: 100%;
      .card {
        width: 100%;
        height: 100%;
        padding: 0.8rem;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        box-shadow: 0 0 10px #0000001a;
        .card-icon {
          font-size: 1rem;
          background: var(--bg-grey);
          padding: 0.5rem 1rem;
          border-radius: 100%;
        }
        .card-heading {
          font-weight: 500;
          font-size: 0.8rem;
        }
        .card-value {
          font-size: 0.7rem;
        }
      }
    }
    .new-orders {
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
        p:nth-child(1) {
          display: none;
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
          width: 30%;
          text-align: center;
        }
        p: nth-child(3) {
          width: 25%;
          text-align: center;
        }
        p: nth-child(4) {
          width: 20%;
          text-align: center;
        }
        p: nth-child(5) {
          width: 13%;
          text-align: center;
          display: none;
        }
        p: nth-child(6) {
          width: 3%;
          text-align: center;
          display: none;
        }
        p: nth-child(7) {
          width: 5%;
          text-align: center;
          margin-left: 2%;
          display: none;
        }
        p: nth-child(8) {
          width: 5%;
          text-align: center;
        }
      }
      .bottom-order {
        width: 100%;
        box-shadow: 0 0 10px #0000001a;
        padding: 1rem 1rem 0rem 1rem;
        border-radius: 0.5rem;
        background: white;
        height: 37.5vh;
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
            width: 25%;
            text-align: center;
          }
          p: nth-child(4) {
            width: 20%;
            text-align: center;
          }
          p: nth-child(5) {
            width: 13%;
            text-align: center;
            display: none;
          }
          p: nth-child(6) {
            width: 3%;
            text-align: center;
            display: none;
          }
          .img {
            display: none;

            width: 5%;
            height: 2.5rem;
            text-align: center;
            overflow: hidden;
            margin-left: 2%;
            border-radius: 0.5rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          p: nth-child(8) {
            width: 5%;
            text-align: center;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 500;
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
    padding: 1rem 0;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    .topest-contest {
      width: 100%;
      padding: 1rem;
      display: flex;
      align-items: start;
      justify-content: space-between;
      flex-direction: column;
      gap: 1rem;
    }
    .user-list-section {
      width: 100%;
    }
    .cards {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 1rem;
      grid-row-gap: 1rem;
      width: 100%;
      .card {
        width: 100%;
        height: 100%;
        padding: 0.8rem;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        box-shadow: 0 0 10px #0000001a;
        .card-icon {
          font-size: 1rem;
          background: var(--bg-grey);
          padding: 0.5rem 1rem;
          border-radius: 100%;
        }
        .card-heading {
          font-weight: 500;
          font-size: 0.8rem;
        }
        .card-value {
          font-size: 0.7rem;
        }
      }
    }
    .new-orders {
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
        p:nth-child(1) {
          display: none;
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
          width: 30%;
          text-align: center;
        }
        p: nth-child(3) {
          width: 25%;
          text-align: center;
        }
        p: nth-child(4) {
          width: 20%;
          text-align: center;
        }
        p: nth-child(5) {
          width: 13%;
          text-align: center;
          display: none;
        }
        p: nth-child(6) {
          width: 3%;
          text-align: center;
          display: none;
        }
        p: nth-child(7) {
          width: 5%;
          text-align: center;
          margin-left: 2%;
          display: none;
        }
        p: nth-child(8) {
          width: 5%;
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
            width: 30%;
            text-align: center;
          }
          p: nth-child(3) {
            width: 25%;
            text-align: center;
          }
          p: nth-child(4) {
            width: 20%;
            text-align: center;
          }
          p: nth-child(5) {
            width: 13%;
            text-align: center;
            display: none;
          }
          p: nth-child(6) {
            width: 3%;
            text-align: center;
            display: none;
          }
          .img {
            display: none;

            width: 5%;
            height: 2.5rem;
            text-align: center;
            overflow: hidden;
            margin-left: 2%;
            border-radius: 0.5rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          p: nth-child(8) {
            width: 5%;
            text-align: center;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 500;
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
  }
`;
export default AdminTopComponent;
