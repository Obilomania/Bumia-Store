import React from "react";
import styled from "styled-components";
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import BottomeHeader from "./BottomeHeader";

const Header = () => {
  return (
    <HeadNavigation>
      <TopHeader />
      <MiddleHeader />
      <BottomeHeader/>
    </HeadNavigation>
  );
};

const HeadNavigation = styled.div``;
export default Header;
