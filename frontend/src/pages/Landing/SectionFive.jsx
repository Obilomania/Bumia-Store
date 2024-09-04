import React from "react";
import styled from "styled-components";
import BlogCard from "../../components/BlogCard";
import { blogPostsData } from "../../assets/dummyData";

const SectionFive = () => {
  return (
    <FifthSection>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="page-container">
            <h3 className="section-heading">Latest Blog Post</h3>
          </div>
          <div className="row d-flex justify-content-between align-items-center blog-card">
            {blogPostsData.map((post) => (
              <BlogCard post={post} key={post.id} />
            ))}
        </div>
      </section>
    </FifthSection>
  );
};

const FifthSection = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 8rem;
  background: var(--bg-grey);
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100%;
    padding: 1rem;
    background: var(--bg-grey);
    .blog-card {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    height: 100%;
    padding: 1rem;
    background: var(--bg-grey);
    .blog-card {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    padding: 1rem;
    background: var(--bg-grey);
    .blog-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction:column;
    }
    .section-heading {
      font-size: 1rem;
    }
    .blog-card {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
    }
  }
  @media screen and (max-width: 420px) {
  }
  @media screen and (max-width: 350px) {
  }
`;
export default SectionFive;
