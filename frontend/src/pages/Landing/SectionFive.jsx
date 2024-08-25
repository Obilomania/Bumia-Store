import React from 'react'
import styled from 'styled-components'
import BlogCard from '../../components/BlogCard';

const SectionFive = () => {
  return (
      <FifthSection>
          <section className="blog-wrapper py-5 home-wrapper-2">
              <div className="container-xxl">
                  <div className="col-12">
                      <h3 className="section-heading">Latest Blog Post</h3>
                     
                  </div>
                <div className="row d-flex justify-content-between align-items-center">
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                </div>
            </div>
          </section>
    </FifthSection>
  )
}


const FifthSection = styled.div`
  width: 100%;
  height: 100%;
  background: var(--bg-grey);
`;
export default SectionFive