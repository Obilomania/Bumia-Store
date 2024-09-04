import React from "react";
import styled from "styled-components";
import BreadCrumb from "../components/BreadCrumb";
import { Helmet } from "react-helmet";
import { specialProducts } from "../assets/dummyData";
import WishListCard from "../components/WishListCard";

const WishList = () => {
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
            {specialProducts.slice(12, 19).map((prod) => (
              <div className="col-3 the-card" key={prod.id}>
                <WishListCard prod={prod} />
              </div>
            ))}
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
  }
  .the-card {
    width: 22.2%;
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
      justify-content:space-between;
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
