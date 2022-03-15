import { Link } from "react-router-dom";
import NavbarLeft from "../Header/NavbarLeft";
import AltNavbarRight from "./AltNavbarRight";
import styled from "styled-components";
import Logo from "../../img/Logo";

const DesktopContainer = () => {
  return (
    <StyledContainer className="container">
      <div className="content">
        <div className="navbar-logo">
          <Link to={"/"}>
            <Logo width={110} />
          </Link>
        </div>
        <div className="navbar-menu">
          <NavbarLeft />
          <AltNavbarRight />
        </div>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 0 10px;

  .content {
    display: flex;
  }

  .navbar-logo {
    margin-right: 8px;
    width: 110px;
    height: 64px;
  }

  a {
    height: 100%;
    display: flex;
    align-items: center;
  }

  svg {
    fill: #1dc078;
  }

  .navbar-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;

export default DesktopContainer;
