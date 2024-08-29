import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BlogCard = ({post}) => {
  return (
    <BCard>
      <div className="blog-card">
        <div className="card-image">
          <img src={post.image} alt="blogImg" className="img-fluid" />
        </div>
        <div className="blog-card-content">
          <p className="blog-post-date">{post.postedOn}</p>
          <h6 className="blog-post-title">{post.title}</h6>
          <p className="blog-post-desc">{`${post.content.slice(0, 50)}...`}</p>
          <Link to={`/blog/${post.id}`}>READ MORE</Link>
        </div>
      </div>
    </BCard>
  );
};

const BCard = styled.div`
  width: 24%;
  background-color: white;
  border-radius: 0.5rem;
  padding: 0;
  box-shadow: 0 0 10px #0000001a;
  overflow:hidden;
  .card-image {
    width: 100%;
    height: 100%;
    transition: var(--transition);
  }
  .blog-post-title{
    min-height:3rem;
  }
  .blog-card img {
    width: 100%;
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
