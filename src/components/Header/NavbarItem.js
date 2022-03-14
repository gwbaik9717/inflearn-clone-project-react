import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import DropdownMenuItem from "./DropdownMenuItem";
import DropdownCart from "./DropdownCart";
import DropdownProfile from "./DropdownProfile";

const NavbarItem = ({
  title,
  hasDropdown,
  dropdownPosition,
  nipplePosition,
  NippleSize,
  dropdownLv1,
  dropdownLv2,
  icon,
  id,
  flexOrder,
}) => {
  const switchDropdownMenu = () => {
    switch (id) {
      case "cart":
        return <DropdownCart />;
      case "message":
        return "";
      case "profile":
        return <DropdownProfile />;
      default:
        return (
          dropdownLv1 && (
            <ul className="navbar-dropdown lv1">
              {dropdownLv1.map((item, index) => (
                <DropdownMenuItem
                  key={item}
                  item={item}
                  dropdownLv2={dropdownLv2}
                  index={index}
                />
              ))}
            </ul>
          )
        );
    }
  };

  return (
    <StyledNavbarItem
      hasDropdown={hasDropdown}
      dropdownPosition={dropdownPosition}
      NippleSize={NippleSize}
      nipplePosition={nipplePosition}
      flexOrder={flexOrder}
      className="navbar-item"
      id={icon ? id : null}
    >
      <Link to={`/roadmap`}>
        <span className={icon ? "icon" : null}>{title ? title : icon}</span>
      </Link>

      {switchDropdownMenu()}
    </StyledNavbarItem>
  );
};

const StyledNavbarItem = styled.div`
  color: #4a4a4a;
  position: relative;
  line-height: 1.5;
  display: flex;
  order: ${(({ flexOrder }) => flexOrder) || 0};

  ${({ hasDropdown, NippleSize, nipplePosition }) =>
    hasDropdown &&
    `&:hover:before {
      display: block;
    }

    &:hover > .navbar-dropdown {
      opacity: 1;
      pointer-events: auto;
    }

    &:hover > .cart-dropdown{
      display:block;
    }

    &:hover > .profile-dropdown{
      display:block;
    }

    &::before {
      width: ${NippleSize || 12}px;
      height: ${NippleSize || 12}px;
      border-top: 1px solid rgb(0 10 18 / 10%);
      border-left: 1px solid rgb(0 10 18 / 10%);
      content: "";
      position: absolute;
      ${nipplePosition || "top: 53px; left: 30px;"}
      transform: rotate(45deg);
      background-color: #fff;
      z-index: 12;
      display: none;
      pointer-events: none;
  
    }`}

  .navbar-dropdown {
    position: absolute;
    padding: 0.5rem 0;
    width: 180px;
    height: 410px;
    box-shadow: 8px 5px 8px 1px rgb(0 10 18 / 10%), 0 0 0 1px rgb(0 10 18 / 10%);
    background-color: #fff;
    ${({ dropdownPosition }) => dropdownPosition || null};
    opacity: 0;
    pointer-events: none;
    color: #4a4a4a;
  }
`;

export default NavbarItem;
