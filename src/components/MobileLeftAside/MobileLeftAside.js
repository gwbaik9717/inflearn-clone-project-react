import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import { categoryData } from "../../data/dummydatas";
import CategoryMenuItem from "./CategoryMenuItem";
import CategorySubMenuItem from "./CategorySubMenuItem";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsLeftModalOpen } from "../Redux modules/toggleMobileModal";

const StyledAsideLeft = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: -316px;
  width: 316px;
  height: 100%;
  transition: transform 0.3s ease;
  background-color: #fff;
  z-index: 76;
  transform: ${({ isLeftModalOpen }) => isLeftModalOpen && "translateX(316px)"};

  .search-box {
    padding: 8px 16px;
    position: relative;
    border-bottom: 1px solid #e9ecef;
  }

  .search-box input {
    background: #e9ecef;
    padding: 8px;
    border-radius: 3px;
    color: #5f5f5f;
    border: 1px solid transparent;
    width: 100%;
    height: 42px;
    line-height: 24px;
    font-size: 1rem;
  }

  .search-box input::placeholder {
    font-size: 14px;
  }

  .search-box .icon {
    position: absolute;
    right: 24px;
    font-size: 18px;
    top: 50%;
    transform: translateY(-50%);
  }

  .category-content {
    display: flex;
    flex: 1 1 auto;
    color: #495057;
  }

  .category-menu {
    flex: 0 0 auto;
    min-width: 121px;
    border-right: 1px solid #e9ecef;
  }

  .category-menu-item:nth-child(${({ index }) => index + 1}) {
    background: #ebfff7;
  }

  .category-menu-item:nth-child(${({ index }) => index + 1}) .title {
    color: #00c471;
    font-weight: 600;
  }

  .category-submenu {
    overflow-y: auto;
    flex: 1 1 auto;
  }

  .category-submenu-item {
    border-bottom: 1px solid #e9ecef;
    padding: 1rem;
  }

  .category-submenu-item .title {
    color: #212529;
    font-size: 15px;
    line-height: 1.07;
    position: relative;
    font-weight: 300;
  }

  .category-submenu-item:first-child .title {
    font-weight: 600;
  }
`;
const StyledBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(11, 19, 30, 0.37);
  z-index: 75;
  display: ${({ isLeftModalOpen }) => (isLeftModalOpen ? "block" : "none")};
`;

const MobileLeftAside = () => {
  const [index, setIndex] = useState("");
  const getIndex = (index) => {
    setIndex(index);
  };

  const dispatch = useDispatch();
  const toggleMobileModal = () => {
    dispatch(setIsLeftModalOpen());
  };

  const { isLeftModalOpen } = useSelector((state) => state.toggleMobileModal);

  useEffect(() => {
    if (isLeftModalOpen) {
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      }
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLeftModalOpen]);

  return (
    <>
      <StyledBg
        className="dimmed-bg"
        onClick={toggleMobileModal}
        isLeftModalOpen={isLeftModalOpen}
      ></StyledBg>

      <StyledAsideLeft
        className="mobile-left-aside"
        isLeftModalOpen={isLeftModalOpen}
        index={index}
      >
        <div className="search-box">
          <input placeholder="강의/강사명을 입력해주세요" type="text" />
          <span className="icon">
            <FontAwesomeIcon icon={All.faSearch} />
          </span>
        </div>

        <div className="category-content">
          <div className="category-menu">
            {categoryData.dropdownLv1.map((title, index) => (
              <CategoryMenuItem
                title={title}
                key={title}
                index={index}
                getIndex={getIndex}
              />
            ))}
          </div>

          <div className="category-submenu">
            {index > 0 &&
              index < categoryData.dropdownLv1.length - 1 &&
              categoryData.dropdownLv2[index].map((title) => (
                <CategorySubMenuItem title={title} key={title} />
              ))}
          </div>
        </div>
      </StyledAsideLeft>
    </>
  );
};

export default MobileLeftAside;
