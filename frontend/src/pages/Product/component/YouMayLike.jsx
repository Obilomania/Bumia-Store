import React from "react";
import styled from "styled-components";
import { featuredProducts } from "../../../assets/dummyData";
import FeaturedProduct from "../../../components/FeaturedProduct";

const YouMayLike = () => {
  return (
    <YouMay>
      <div className="container-xxl py-5">
        <div className="row">
          <h5>YOU MAY ALSO LIKE</h5>
          <div className="col-12 you-like mt-1">
            <div className="featured-cards">
              {featuredProducts
                .slice(0, 6)
                .map((product) => (
                  <FeaturedProduct product={product} key={product.id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </YouMay>
  );
};
const YouMay = styled.div`
  width: 100%;
  height: fit-content;
  .featured-cards {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export default YouMayLike;
