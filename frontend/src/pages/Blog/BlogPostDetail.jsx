import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { blogPostsData } from "../../assets/dummyData";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa6";

const BlogPostDetail = () => {
  const { id } = useParams();
  // eslint-disable-next-line eqeqeq
  const postDetail = blogPostsData.find((x) => (x.id == id));
  return (
    <BlogDetail>
      <Helmet>
        <title>{`Blog Post - ${postDetail.title}`}</title>
        <meta name="description" content="Our Store" />
      </Helmet>
      <div className="page-container">
        <div className="row">
          <h3 className="post-heading text-center w-full mt-5">
            {postDetail.title}
          </h3>
          <div className="blog-detail">
            <div className="detail-image">
              <img src={postDetail.image} alt="" />
            </div>
            <p className="post-desc">{postDetail.content}</p>
            <p className="post-time-author">
              {postDetail.postedOn}
              <span>Author : {postDetail.author}</span>
            </p>
            <div className="post-navigation-socials">
              <Link to="/blog">
                <IoIosArrowRoundBack /> Back to blog
              </Link>
              <p className="socials">
                <Link to="">
                  <FaFacebook />
                </Link>
                <Link to="">
                  <AiOutlineTwitter />
                </Link>
                <Link to="">
                  <FaPinterest />
                </Link>
              </p>
            </div>
          </div>
        </div>
        <form action="">
          <h5 className="leave-comment">Leave A Comment</h5>
          <div className="inputs">
            <input type="text" placeholder="Name *" />
            <input type="email" placeholder="Email *" />
          </div>
          <textarea name="" rows="5" id="" placeholder="Comment *"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </BlogDetail>
  );
};

const BlogDetail = styled.div`
  width: 100%;
  min-height: 70vh;
  height: 100%;
  background: var(--bg-grey);
  padding: 0 0 2rem 0;
  .blog-detail {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 0 1rem 0;
    .detail-image {
      width: 50%;
      height: 29rem;
      margin: auto;
      border-radius: 0.5rem;
      box-shadow: 0 0 10px #0000001a;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }
    p {
      font-size: 0.8rem;
      color: var(--bg-two);
      margin-bottom: 0;
    }
    .post-time-author {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.7rem;
      span {
        font-weight: 500;
      }
    }
    .post-navigation-socials {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.7rem;
      font-weight: 500;
      .socials {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      }
      a {
        color: var(--bg-one);
      }
    }
  }
  form {
    box-shadow: 0 0 10px #0000001a;
    width: 100%;
    padding: 2rem;
    background: white;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
    .inputs {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      input {
        width: 50%;
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
`;
export default BlogPostDetail;
