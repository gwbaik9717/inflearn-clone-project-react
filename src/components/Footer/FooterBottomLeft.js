import Logo from "../../img/Logo";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const StyledBottomLeft = styled.div`
  display: flex;
  flex-direction: column;

  .footer-info-top {
    margin-bottom: 8px;
  }

  .footer-info-top span:nth-child(2)::before,
  .footer-info-top span:nth-child(3)::before {
    color: #bdbdbd;
    margin: 0 8px;
    content: "|";
    display: inline-block;
    font-size: 12px;
  }

  .footer-info-top span a {
    color: #bdbdbd;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.5;
  }

  .footer-info-top span a svg {
    fill: #1dc078;
  }

  .footer-info-bottom {
    font-size: 12px;
    line-height: 1.5;
    color: #bdbdbd;
  }

  .info-label {
    display: none;
    cursor: pointer;
    margin-bottom: 8px;
  }

  .toggle-btns {
    font-size: 10px;
  }

  .info-dropdown {
    max-height: 54px;
    overflow: hidden;
    margin-bottom: 8px;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 24px;

    .logo {
      display: none;
    }

    .footer-info-bottom {
    }

    .info-label {
      display: inline-block;
    }

    .info-dropdown {
      max-height: ${({ isOpen }) => (isOpen ? "54px" : "0")};
      overflow: hidden;
      margin-bottom: 8px;
    }

    .footer-info-top span:nth-child(2)::before,
    .footer-info-top span:nth-child(3)::before {
      display: none;
    }

    .footer-info-top span:last-child {
      margin-left: 3px;
    }
  }
`;

const FooterBottomLeft = () => {
  const titles = ["개인정보취급방침", "이용약관"];
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen((current) => !current);
  };

  return (
    <StyledBottomLeft isOpen={isOpen} className="footer-bottom-left">
      <div className="footer-info-top">
        <span className="logo">
          <a href="#">
            <Logo width="85" />
            <title>인프런 브랜드 로고</title>
          </a>
        </span>
        {titles.map((title) => (
          <span key={title} className="terms">
            <a href="#">{title}</a>
          </span>
        ))}
      </div>
      <div className="footer-info-bottom">
        <div className="info-label" onClick={toggleDetails}>
          (주)인프랩 사업자 정보 &nbsp;
          <span className="toggle-btns">
            {isOpen ? (
              <FontAwesomeIcon icon={All.faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={All.faChevronDown} />
            )}
          </span>
        </div>
        <div className="info-dropdown">
          <span>(주)인프랩 | </span>
          <span>대표자: 이형주 | </span>
          <span>
            사업자번호: 499-81-00612
            <a
              href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=4998100612"
              target="_blank"
            >
              사업자 정보 확인
            </a>
          </span>
          <br />
          <span>통신판매업: 2018-성남분당B-0062 | </span>
          <span>개인정보보호책임자: 구자유 | </span>
          <span>
            이메일: <a href="mailto:info@inflearn.com">info@inflearn.com</a>
          </span>
          <br />
          <span>
            주소: 경기도 성남시 분당구 대왕판교로 660 유스페이스1 301-1호
          </span>
        </div>
        ©INFLAB. ALL RIGHTS RESERVED
      </div>
    </StyledBottomLeft>
  );
};

export default FooterBottomLeft;
