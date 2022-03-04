import styled from "styled-components";
import Logo from "../../img/Logo";
import MobileHeaderLeft from "../../img/MobileHeaderLeft";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsLeftModalOpen } from "../Redux modules/toggleMobileModal";

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

  .mobile-navbar-right .btn {
    font-size: 18px;
    color: #363636;
    font-size: 0.75rem;
    padding: 8px;
    background-color: #fff;
    white-space: nowrap;
    border-radius: 4px;
  }

  .mobile-navbar-right .btn.login {
  }

  .mobile-navbar-right .btn.signup {
    color: #fff;
    margin-left: 0.5rem;
    background-color: #ff7867;
  }
`;

const MobileContainer = () => {
  const dispatch = useDispatch();
  const toggleMobileLeftModal = () => {
    dispatch(setIsLeftModalOpen());
  };

  return (
    <StyledContainer className="container mobile_container">
      <div className="content">
        <div className="mobile-navbar-left">
          <span class="btn" onClick={toggleMobileLeftModal}>
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
          <div className="btn login">로그인</div>

          <Link to={"/signup"} className="btn signup">
            회원가입
          </Link>
        </div>
      </div>
    </StyledContainer>
  );
};

export default MobileContainer;
