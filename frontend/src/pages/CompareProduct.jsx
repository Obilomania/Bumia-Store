import React from "react";
import { Helmet } from "react-helmet";
import BreadCrumb from "../components/BreadCrumb";
import styled from "styled-components";
import CompareProductCard from "../components/CompareProductCard";
import { specialProducts } from "../assets/dummyData";

const CompareProduct = () => {
  return (
    <ComparePage>
      <Helmet>
        <title>Compare Product</title>
        <meta name="description" content="Our Store" />
      </Helmet>
      <BreadCrumb title="Compare Product" />

      <div className="contact-wrapper py-5 home-wrapper">
        <div className="container-xxl">
          <div className="row the-cards">
            {specialProducts.slice(6, 15).map((prod) => (
              <div className="col-3 the-card" key={prod.id}>
                <CompareProductCard prod={prod} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ComparePage>
  );
};

const ComparePage = styled.div`
  width: 100%;
  min-height: 70vh;
  height: 100%;
  background: var(--bg-grey);
  .the-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
  }
  .the-card {
    width: 22.2%;
  }
`;
export default CompareProduct;
