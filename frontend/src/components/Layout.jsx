import React from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import styled from 'styled-components'
// import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <TheMainLayout>
      <Header />
      <div className="outLet">
        {/* <Outlet /> */}
      </div>
      <Footer />
    </TheMainLayout>
  );
}
const TheMainLayout = styled.div`
  position:relative;
  width:100%;
  height:fit-content;
  .outLet{
    min-height:70vh;
    height:fit-content;
  }
`
export default Layout