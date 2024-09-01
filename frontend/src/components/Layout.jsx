import React from 'react'
// import { Outlet } from 'react-router-dom'
import Header from './Layout/Header'
// import Footer from './Footer'
import styled from 'styled-components'

const Layout = () => {
  return (
    <TheMainLayout>
      <Header />
      {/* <div className="outLet">
        <Outlet />
      </div> */}
      {/* <Footer /> */}
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