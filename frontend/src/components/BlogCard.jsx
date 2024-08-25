import React from "react";
import styled from "styled-components";
import blogOneIMG from "../assets/images/blog-1.jpg";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <BCard>
      <div className="blog-card">
        <div className="card-image">
          <img src={blogOneIMG} alt="blogImg" className="img-fluid" />
        </div>
        <div className="blog-card-content">
          <p className="blog-post-date">20 JUNE, 2024</p>
          <h6 className="blog-post-title">A Beautiful VR world</h6>
          <p className="blog-post-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            natus et voluptatum.
          </p>
          <Link to="/">READ MORE</Link>
        </div>
      </div>
    </BCard>
  );
};

const BCard = styled.div`
  width: 24%;
  background-color: white;
  border-radius: 0.8rem;
  padding: 0;
  box-shadow: 0 0 10px #0000001a;
  .card-image {
    width: 100%;
    height: 100%;
    transition: var(--transition);
  }
  .blog-card img {
    width: 100%;
    border-top-right-radius: 0.8rem;
    border-top-left-radius: 0.8rem;
  }
  .blog-card-content {
    padding: 1rem;
    .blog-post-title {
      color: var(--bg-one);
    }
    .blog-post-date,
    .blog-post-desc {
      color: #918f8f;
      font-size: 0.8rem;
    }
    a {
      color: white;
      background: var(--bg-one);
      font-size: 0.8rem;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      transition: var(--transition);
      &:hover {
        background: var(--bg-two);
        transition: var(--transition);
      }
    }
  }
`;
export default BlogCard;
