import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState } from "react";

const StyledMenu = styled.div`
  margin-right: 20px;

  .menu-title {
    font-weight: 700;
    font-size: 14px;
    color: #eee;
    padding: 16px 0;
    line-height: 1.43;
  }

  .menu-items {
    display: flex;
    flex-direction: column;
    max-height: 118px;
    overflow: hidden;
  }

  .menu-item {
    margin-bottom: 7px;
    color: #bdbdbd;
    font-size: 14px;
    line-height: 1.43;
  }

  .toggle-btns {
    display: none;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    border-bottom: 1px solid #434a54;

    .menu-title {
      cursor: pointer;
    }

    .menu-items {
      max-height: ${({ isOpen }) => !isOpen && 0};
    }

    .toggle-btns {
      float: right;
      font-size: 13px;
      display: block;
    }
  }
`;

const MenuList = ({ mainTitle, menuTitles }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuItems = () => {
    setIsOpen((current) => !current);
  };

  return (
    <StyledMenu isOpen={isOpen} className="menu-list" onClick={toggleMenuItems}>
      <div className="menu-title">
        {mainTitle}
        <span className="toggle-btns">
          {isOpen ? (
            <FontAwesomeIcon icon={All.faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={All.faChevronDown} />
          )}
        </span>
      </div>
      <div className="menu-items">
        {menuTitles.map((menuTitle) => (
          <a href="#" key={menuTitle} className="menu-item">
            {menuTitle}
          </a>
        ))}
      </div>
    </StyledMenu>
  );
};

export default MenuList;
