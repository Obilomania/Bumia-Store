import React from 'react'
import { Helmet } from 'react-helmet';
import BreadCrumb from '../components/BreadCrumb';
import styled from 'styled-components';

const CompareProduct = () => {
  return (
    <ComparePage>
      <Helmet>
        <title>Compare Product</title>
        <meta name="description" content="Our Store" />
      </Helmet>
      <BreadCrumb title="Compare Product" />
    </ComparePage>
  );
}


const ComparePage = styled.div`
  width: 100%;
  min-height: 70vh;
  height: 100%;
  background: var(--bg-grey);
`;
export default CompareProduct