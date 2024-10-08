import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import BreadCrumb from "../../components/BreadCrumb";
import BlogSectionCard from "../../components/BlogSectionCard";
import { blogPostsData } from "../../assets/dummyData";

const Blogs = () => {
  return (
    <BlogSection>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="Our Store" />
      </Helmet>
      <BreadCrumb title="Blog" />

      <div className="store-wrapper py-5 home-wrapper">
        <div className="page-container">
          <div className="row">
            <div className="col-12">
              <div className="blog-cards">
                {blogPostsData.map((post) => (
                  <BlogSectionCard post={post} key={post.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlogSection>
  );
};

const BlogSection = styled.div`
  width: 100%;
  height: 100%;
  background: var(--bg-grey);
  .blog-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
  }
`;
export default Blogs;
