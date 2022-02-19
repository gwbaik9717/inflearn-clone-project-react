//import { useState } from "react";
import AltDesktopContainer from "./AltDesktopContainer";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 72;
  background-color: #fff;

  .navbar {
    z-index: 75;
    height: 64px;
    box-shadow: 0 2px 4px 0 hsl(0deg 0% 81% / 50%);
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <nav className="navbar">
        <AltDesktopContainer /> {/* 추후 MobileContainer 추가 예정 */}
      </nav>
    </StyledHeader>
  );
};

export default Header;
