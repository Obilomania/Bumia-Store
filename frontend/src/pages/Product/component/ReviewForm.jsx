import React from "react";
import { FaRegStar } from "react-icons/fa";
import styled from "styled-components";
import Review from "./Review";

const ReviewForm = () => {
  return (
    <RevForm>
      <div className="page-container">
        <div className="row">
          <h5>Reviews</h5>
          <div className="col-12 the-review">
            <div className="the-review-part">
              <Review /> <Review /> <Review /> <Review /> <Review />
            </div>
            <form action="">
              <p className="star-rating d-flex align-items-center gap-1">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </p>
              <textarea
                name=""
                rows="2"
                id=""
                placeholder="message *"
              ></textarea>
              <button type="submit" className="mt-2">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </RevForm>
  );
};

const RevForm = styled.div`
  width: 100%;
  height: fit-content;
  .the-review-part{
    width:50%;
  } .the-review {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    background-color: white;
    border-radius: 0.5rem;
    padding: 2rem;
    gap: 2rem;
    box-shadow: 0 0 10px #0000001a;
    form {
      display: flex;
      align-items: end;
      flex-direction: column;
      gap: 0.5rem;
      width: 50%;
      p {
        margin-bottom: 0;
      }
      .star-rating {
        font-size: 0.8rem;
        color: gold;
      }
      textarea {
        width: 100%;
        border: none;
        background: var(--bg-grey);
        outline: none;
        padding: 0.8rem;
        font-size: 0.8rem;
        resize: none;
        border-radius: 0.5rem;
        opacity: 0.7;
        &::placeholder {
          opacity: 0.7;
          color: var(--bg-one);
        }
      }
      button {
        color: white;
        background: var(--bg-one);
        font-size: 0.8rem;
        padding: 0.3rem 1.5rem;
        border-radius: 1rem;
        transition: var(--transition);
        &:hover {
          background: var(--bg-two);
          transition: var(--transition);
        }
      }
    }
  }
`;
export default ReviewForm;
