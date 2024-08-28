import React from 'react'
import { Helmet } from 'react-helmet';
import styled from 'styled-components'
import BreadCrumb from '../../components/BreadCrumb';

const Login = () => {
  return (
    <LoginUser>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Our Store" />
      </Helmet>
      <BreadCrumb title="Login" />
    </LoginUser>
  );
}

const LoginUser = styled.div`
  width: 100%;
  min-height: 70vh;
  height: 100%;
  background: var(--bg-grey);
`;
export default Login