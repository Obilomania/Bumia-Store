import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogSectionCard = ({post}) => {
  return (
    <BCard>
      <div className="blog-card" key={post.id}>
        <div className="card-image">
          <img src={post.image} alt="blogImg" className="img-fluid" />
        </div>
        <div className="blog-card-content">
          <p className="blog-post-date mt-1">{post.postedOn} <span> by: {post.author}</span></p>
          <h6 className="blog-post-title ">{post.title}</h6>
          <p className="blog-post-desc m-0">{`${post.content.slice(
            0,
            180
          )} ...`}</p>
          <Link to={`/blog/${post.id}`}>READ MORE</Link>
        </div>
      </div>
    </BCard>
  );
}

const BCard = styled.div`
  width: 48%;
  background-color: white;
  border-radius: 0.5rem;
  padding: 0;
  box-shadow: 0 0 10px #0000001a;
  overflow: hidden;
  .card-image {
    width: 100%;
    height: 100%;
    transition: var(--transition);
  }
  .blog-card img {
    width: 100%;
  }
  .blog-post-title{
    min-height:3rem;
    color:var(--bg-one);
  } .blog-card-content {
    padding: 1rem;
    line-height:1.5rem;
    .blog-post-title {
      color: var(--bg-one);
    }
    .blog-post-date,
    .blog-post-desc {
      color: #918f8f;
      font-size: 0.8rem;
      display:flex;
      align-items:center;
      justify-content:space-between;
      span{
        font-weight:500;
        text-transform:uppercase;
      }
    }
    a {
      color: white;
      background: var(--bg-one);
      font-size: 0.8rem;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      transition: var(--transition);
      margin-top:1rem;
      &:hover {
        background: var(--bg-two);
        transition: var(--transition);
      }
    }
  }
`;
export default BlogSectionCard