import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import styled from "styled-components";

const Review = () => {
  return (
    <ReviewSection>
      <div className="ratings">
        <p className="star-rating d-flex align-items-center gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <FaRegStar />
        </p>
        <p>
          on : <span>20 July 2023</span>
        </p>
      </div>
      <div className="review-comment">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi a,
          cumque, inventore magni fuga ipsum rerum similique necessitatibus
          aspernatur voluptatibus commodi nisi incidunt illum minima.
        </p>
        <p>
          by : <span>Obilomania Ishmael</span>
        </p>
      </div>
    </ReviewSection>
  );
};

const ReviewSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 2px solid var(--bg-grey);
  padding: 1rem 0;
  .ratings {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-direction: row-reverse;
    .star-rating {
      color: gold;
    }
    p {
      font-size: 0.8rem;
      margin-bottom: 0;
    }
    span {
      font-weight: 500;
    }
  }
  .review-comment {
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 0.5rem;
    p {
      font-size: 0.8rem;
      margin-bottom: 0;
    }
    span {
      font-weight: 500;
    }
  }
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 900px) {
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 0.5rem;
    border-bottom: 2px solid var(--bg-grey);
    margin-bottom: 2rem;
    padding: 0;
    .ratings {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-direction: row-reverse;
      .star-rating {
        color: gold;
      }
      p {
        font-size: 0.8rem;
        margin-bottom: 0;
      }
      span {
        font-weight: 500;
      }
    }
    .review-comment {
      display: flex;
      align-items: start;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;
      p {
        font-size: 0.8rem;
        margin-bottom: 0;
      }
      span {
        font-weight: 500;
      }
    }
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 0.5rem;
    border-bottom: 2px solid var(--bg-grey);
    margin-bottom: 2rem;
    padding: 0;
    .ratings {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-direction: row-reverse;
      .star-rating {
        color: gold;
      }
      p {
        font-size: 0.8rem;
        margin-bottom: 0;
      }
      span {
        font-weight: 500;
      }
    }
    .review-comment {
      display: flex;
      align-items: start;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;
      p {
        font-size: 0.8rem;
        margin-bottom: 0;
      }
      span {
        font-weight: 500;
      }
    }
  }
  @media screen and (max-width: 350px) {
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 0.5rem;
    border-bottom: 2px solid var(--bg-grey);
    margin-bottom: 2rem;
    padding: 0;
    .ratings {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-direction: row-reverse;
      .star-rating {
        color: gold;
      }
      p {
        font-size: 0.8rem;
        margin-bottom: 0;
      }
      span {
        font-weight: 500;
      }
    }
    .review-comment {
      display: flex;
      align-items: start;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;
      p {
        font-size: 0.8rem;
        margin-bottom: 0;
      }
      span {
        font-weight: 500;
      }
    }
  }
`;
export default Review;
