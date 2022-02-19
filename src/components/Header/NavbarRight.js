import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import NavbarItem from "./NavbarItem";
import NavbarSearch from "./NavbarSearch";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBarBtn from "./NavbarBtn";

const StyledNavbarRight = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  .navbar-item {
    padding: 8px;
  }

  .navbar-item a {
    display: flex;
    height: auto;
    align-items: center;
    justify-content: center;
  }

  #profile .icon {
    border-radius: 50%;
    overflow: hidden;
  }
`;

const NavbarRight = () => {
  const itemInfos = [
    { title: "지식공유참여", hasDropdown: false, icon: "", id: "share" },
    {
      title: "",
      hasDropdown: true,
      icon: <FontAwesomeIcon icon={All.faShoppingCart} />,
      id: "cart",
    },
    {
      title: "",
      hasDropdown: true,
      icon: <FontAwesomeIcon icon={All.faBell} />,
      id: "message",
    },
    {
      title: "",
      hasDropdown: true,
      icon: (
        <img
          src="https://cdn.inflearn.com/public/main/profile/default_profile.png"
          alt="profile_img"
        />
      ),
      id: "profile",
    },
  ];

  return (
    <StyledNavbarRight className="navbar-right">
      <NavbarSearch />

      {itemInfos.map(({ id, title, hasDropdown, icon }, index) => (
        <NavbarItem
          key={id}
          title={title}
          hasDropdown={hasDropdown}
          icon={icon}
          id={id}
          flexOrder={index}
        />
      ))}

      <NavBarBtn
        icon={<FontAwesomeIcon icon={All.faPencil} />}
        btnText="최근강의"
        btnBgColor="rgb(0, 196, 113)"
      />
    </StyledNavbarRight>
  );
};

export default NavbarRight;
