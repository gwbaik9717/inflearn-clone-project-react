import AltDesktopContainer from "./AltDesktopContainer";
import AltMobileContainer from "./AltMobileContainer";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isMedium = useMediaQuery({ maxWidth: 1024 });

  return (
    <StyledHeader>
      <nav className="navbar">
        {isMedium ? <AltMobileContainer /> : <AltDesktopContainer />}
      </nav>
    </StyledHeader>
  );
};

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

  @media (max-width: 1024px) {
    .navbar {
      height: 50px !important;
    }
  }
`;

export default Header;
