import React from "react";
import styled from "styled-components";
import BreadCrumb from "../components/BreadCrumb";
import { Helmet } from "react-helmet";
import FilterOne from "./OurStore/FilterOne";
import FilterTwo from "./OurStore/FilterTwo";

const OurStore = () => {
  return (
    <MyStore>
      <Helmet>
        <title>Our Store</title>
        <meta name="description" content="Our Store" />
      </Helmet>
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper py-5 home-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <FilterTwo />
              </div>
              <div className="filter-card mb-3">
                <FilterOne />
              </div>
              <div className="filter-card mb-3"></div>
              <div className="filter-card mb-3"></div>
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </MyStore>
  );
};

const MyStore = styled.div`
  width: 100%;
  height: 100%;
  background: var(--bg-grey);
  .filter-title {
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 600;
    color: 100;
    margin-bottom: 1.2rem;
  }
`;
export default OurStore;
