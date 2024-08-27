import React, { useState } from "react";
import styled from "styled-components";
import BreadCrumb from "../components/BreadCrumb";
import { Helmet } from "react-helmet";
import FilterOne from "./OurStore/FilterOne";
import FilterTwo from "./OurStore/FilterTwo";
import FilterSort from "./OurStore/FilterSort";
import StoreList from "./OurStore/StoreList";
import { featuredProducts } from "../assets/dummyData";
import StoreGrid from "./OurStore/StoreGrid";

const OurStore = () => {
  const [gridList, setGridList] = useState(true);
  const toggleList = () => {
    setGridList(false);
  };
  const toggleGrid = () => {
    setGridList(true);
  };
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
            </div>
            <div className="col-9">
              <div className="sort-filter">
                <FilterSort toggleList={toggleList} toggleGrid={toggleGrid} />
              </div>
              <div className="store-list-and-grid mt-3">
                {gridList ? (
                  <div className="grid">
                    {featuredProducts.map((product) => (
                      <StoreGrid product={product} key={product.id} />
                    ))}
                  </div>
                ) : (
                  <div className="list">
                    <StoreList />
                    {featuredProducts.map((item) => (
                      <StoreList product={item} key={item.id} />
                    ))}
                  </div>
                )}
              </div>
            </div>
            
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
    color: var(--bg-one);
    margin-bottom: 1.2rem;
  }
  .store-list-and-grid {
    width: 100%;
    .list {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: flex-start;
      gap: 1rem;
    }
    .grid {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      /* padding: 20px; */
      width: 100%;
    }
  }
`;
export default OurStore;
