import React, { useState } from "react";
import styled from "styled-components";
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import BottomeHeader from "./BottomeHeader";
import MobileNavBar from "./MobileView/MobileNavBar";

const Header = () => {
  const [navReveal, setNavReveal] = useState(false);
  const toggleNavReveal = () => setNavReveal(!navReveal);
  return (
    <HeadNavigation>
      <TopHeader />
      <MiddleHeader toggleNavReveal={toggleNavReveal} />
      <BottomeHeader />
      <div className="mobile-navigation">
        <MobileNavBar navReveal={navReveal} toggleNavReveal={toggleNavReveal} />
      </div>
    </HeadNavigation>
  );
};

const HeadNavigation = styled.div`
  position: relative;
  width: 100%;
  .mobile-navigation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display:none;
  }
  @media screen and (max-width: 1200px) {
    position: relative;
    width: 100%;
    .mobile-navigation {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      /* overflow-y: scroll; */
    }
  }
  @media screen and (max-width: 900px) {
    position: relative;
    width: 100%;
    .mobile-navigation {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      /* overflow-y: scroll; */
    }
  }
  @media screen and (max-width: 600px) {
    position: relative;
    width: 100%;
    .mobile-navigation {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      /* overflow-y: scroll; */
    }
  }
  @media screen and (max-width: 420px) {
    position: relative;
    width: 100%;
    .mobile-navigation {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      /* overflow-y: scroll; */
    }
  }
  @media screen and (max-width: 350px) {
    position: relative;
    width: 100%;
    .mobile-navigation {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      /* overflow-y: scroll; */
    }
  }
`;
export default Header;
