import React from "react";
import styled from "styled-components";
import BreadCrumb from "../components/BreadCrumb";
import { Helmet } from "react-helmet";
import WishListCard from "../components/WishListCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WishList = () => {
  const userName = localStorage.getItem("userName");

  const wishList = useSelector(
    (state) => state.persistedReducer.wishlist.wishList
  );

  if (!userName) {
    return (
      <WishlistPage>
        <Helmet>
          <title>Wish List</title>
          <meta name="description" content="Our Store" />
        </Helmet>
        <BreadCrumb title="Wishlist" />
        <div className="not-logged-in">
          <h3>You need to be logged in to view your wishlist</h3>
          <Link to="/login">Login</Link>
        </div>
      </WishlistPage>
    );
  }
  return (
    <WishlistPage>
      <Helmet>
        <title>Wish List</title>
        <meta name="description" content="Our Store" />
      </Helmet>
      <BreadCrumb title="Wishlist" />

      <div className="contact-wrapper py-5 home-wrapper">
        <div className="page-container">
          <div className="row the-cards">
            {wishList.length === 0 ? (
              <>
                <h3>No Items In Your Wishlist</h3>
                <Link to="/">Continue Shopping</Link>
              </>
            ) : (
              <>
                {wishList.map((prod) => (
                  <div className="col-3 the-card" key={prod._id}>
                    <WishListCard prod={prod} />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </WishlistPage>
  );
};

const WishlistPage = styled.div`
  width: 100%;
  min-height: 70vh;
  height: 100%;
  background: var(--bg-grey);
  padding: 0 8rem;
  .the-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    h3 {
      width: 100%;
      text-align: center;
      font-size: 1.5rem;
    }
    a {
      width: fit-content;
      text-align: center;
      font-size: 1rem;
      background-color: var(--bg-one);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      cursor: pointer;
      margin: 0 auto;
    }
  }
  .the-card {
    width: 22.2%;
  }
  .not-logged-in {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 3rem auto;
    a{
      width:fit-content;
      background:var(--bg-one);
      color:white;
      padding:0.5rem 3rem;
      border-radius:5px;
      cursor:pointer;
    }
  }
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 900px) {
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    min-height: 70vh;
    height: 100%;
    background: var(--bg-grey);
    padding: 1rem;
    .the-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 1rem;
    }
    .the-card {
      width: 100%;
    }
  }
  @media screen and (max-width: 420px) {
  }
  @media screen and (max-width: 350px) {
  }
`;
export default WishList;
