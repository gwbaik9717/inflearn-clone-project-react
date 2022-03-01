import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Logo from "../../img/Logo";
import MobileHeaderLeft from "../../img/MobileHeaderLeft";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsModalOpen } from "../Redux modules/toggleMobileModal";

const StyledContainer = styled.div`
  height: 100%;
  padding: 0 10px;

  .content {
    display: flex;
    height: 100%;
  }

  .mobile-navbar-left {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .mobile-navbar-logo {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mobile-navbar-logo a {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .mobile-navbar-logo svg {
    fill: #1dc078;
  }

  .mobile-navbar-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .mobile-navbar-right a {
    font-size: 18px;
    color: #495057;
  }

  .mobile-navbar-right .profile {
    position: relative;
  }

  .mobile-navbar-right .profile_cover {
    height: 24px;
    width: 24px;
    border-radius: 100%;
    overflow: hidden;
    margin-left: 24px;
    display: block;
  }

  .mobile-navbar-right .profile_cover img {
  }
`;

const MobileContainer = () => {
  const dispatch = useDispatch();
  const toggleMobileModal = () => {
    dispatch(setIsModalOpen());
  };

  return (
    <StyledContainer className="container mobile_container">
      <div className="content">
        <div className="mobile-navbar-left">
          <span class="btn">
            <MobileHeaderLeft />
          </span>
        </div>
        <div className="mobile-navbar-logo">
          <Link to={"/"}>
            <Logo width={110} />
            <title>인프런 브랜드 로고</title>
          </Link>
        </div>
        <div className="mobile-navbar-right">
          <Link to={"/"}>
            <div className="icon">
              <FontAwesomeIcon icon={All.faShoppingCart} />
            </div>
          </Link>

          <span className="profile" onClick={toggleMobileModal}>
            <span className="profile_cover">
              <img
                src="https://cdn.inflearn.com/public/main/profile/default_profile.png"
                alt="profile_img"
              />
            </span>
          </span>
        </div>
      </div>
    </StyledContainer>
  );
};

export default MobileContainer;
