import { Link } from "react-router-dom";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
import styled from "styled-components";
import Logo from "../../img/Logo";

const DesktopContainer = () => {
  return (
    <StyledContainer className="container desktop_container">
      <div className="content">
        <div className="navbar-logo">
          <Link to={"/"}>
            <Logo width={110} />
            <title>인프런 브랜드 로고</title>
          </Link>
        </div>
        <div className="navbar-menu">
          <NavbarLeft />
          <NavbarRight />
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

  a svg {
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
