import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import { StudyIcon, InflearnHire } from "../../img/MobileNavMore";
import { useState } from "react";

const StyledBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(11, 19, 30, 0.37);
  z-index: 20;
  display: ${({ isMoreOpen }) => (isMoreOpen ? "block" : "none")};
`;

const StyledNav = styled.nav`
  display: none;

  @media (max-width: 1024px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: block;
    z-index: 75;

    .more-content {
      display: ${({ isMoreOpen }) => (isMoreOpen ? "block" : "none")};
      position: relative;
    }

    .more-items {
      padding: 1rem 1rem 0;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      background: #fff;
      position: absolute;
      bottom: 0;
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      z-index: -1;
    }

    .more-item {
      margin-right: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 70px;
      margin-bottom: 16px;
      position: relative;
      width: calc(100% / 6 - 10px);
    }

    .more-item:nth-child(6n) {
      margin-right: 0;
    }

    .more-item a {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      z-index: 1;
    }

    .more-item .icon-cover {
      position: relative;
      font-size: 20px;
      color: #212529;
      margin-bottom: 2px;
    }

    .more-item .icon {
      background-color: #f1f3f5;
      border-radius: 50%;
      width: 48px;
      height: 48px;
    }

    .more-title {
      color: #343a40;
      font-size: 0.875rem;
    }

    .nav-content {
      height: 66px;
      box-shadow: 0 -2px 4px 0 rgb(33 37 41 / 8%);
      background-color: #fff;
    }

    .nav-items {
      display: flex;
      justify-content: space-evenly;
      height: 100%;
    }

    .nav-item {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 72px;
      height: 100%;
      padding: 8px;
      position: relative;
      color: #495057;
    }

    .nav-item a {
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
    }

    .nav-item .icon {
      font-size: 18px;
      width: 24px;
      height: 24px;
    }

    .nav-title {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 768px) {
    .more-item {
      margin-right: 14px;
      width: calc(100% / 3 - 9.33px);
    }

    .more-item:nth-child(3n) {
      margin-right: 0;
    }
  }
`;

const MobileBottomNavigation = () => {
  const navItems = [
    { icon: <FontAwesomeIcon icon={All.faChartBar} />, title: "????????????" },
    { icon: <FontAwesomeIcon icon={All.faListUl} />, title: "??????" },
    { icon: <FontAwesomeIcon icon={All.faHomeLgAlt} />, title: "???" },
    { icon: <FontAwesomeIcon icon={All.faRoad} />, title: "?????????" },
  ];
  const moreItems = [
    { icon: <FontAwesomeIcon icon={All.faRocket} />, title: "?????? ??????" },
    { icon: <FontAwesomeIcon icon={All.faStar} />, title: "?????????" },
    { icon: <FontAwesomeIcon icon={All.faCommentAlt} />, title: "?????? ?????????" },
    { icon: <StudyIcon />, title: "?????????" },
    { icon: <FontAwesomeIcon icon={All.faLightbulb} />, title: "?????????" },
    { icon: <FontAwesomeIcon icon={All.faStar} />, title: "????????? ??????" },
    { icon: <FontAwesomeIcon icon={All.faBullhorn} />, title: "????????????" },
    { icon: <FontAwesomeIcon icon={All.faBullhorn} />, title: "????????? ??????" },
    {
      icon: <FontAwesomeIcon icon={All.faPaperPlane} />,
      title: "????????? ?????????",
    },
    { icon: <FontAwesomeIcon icon={All.faFeatherAlt} />, title: "?????????" },
    { icon: <FontAwesomeIcon icon={All.faLeaf} />, title: "????????? ??????" },
  ];

  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const toggleMore = () => {
    setIsMoreOpen((current) => !current);
  };

  return (
    <>
      <StyledBg
        className="dimmed-bg"
        onClick={toggleMore}
        isMoreOpen={isMoreOpen}
      ></StyledBg>
      <StyledNav className="mobile-bottom-navigation" isMoreOpen={isMoreOpen}>
        <div className="more-content">
          <div className="more-items">
            {moreItems.map(({ icon, title }) => (
              <div className="more-item">
                <a href="#" />
                <div className="icon-cover">
                  <span className="icon">{icon}</span>
                </div>
                <div className="more-title">{title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="nav-content">
          <div className="nav-items">
            {navItems.map(({ icon, title }) => (
              <div className="nav-item">
                <a href="#" />
                <span className="icon-cover">
                  <span className="icon">{icon}</span>
                </span>
                <div className="nav-title">{title}</div>
              </div>
            ))}

            <div className="nav-item" onClick={toggleMore}>
              <span className="icon-cover">
                <span className="icon">
                  <FontAwesomeIcon icon={All.faEllipsisH} />
                </span>
              </span>
              <div className="nav-title">?????????</div>
            </div>
          </div>
        </div>
      </StyledNav>
    </>
  );
};

export default MobileBottomNavigation;
