import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import NavbarItem from "./NavbarItem";
import NavbarSearch from "./NavbarSearch";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBarBtn from "./NavbarBtn";

const NavbarRight = () => {
  const itemInfos = [
    { title: "지식공유참여", hasDropdown: false, id: "share" },
    {
      title: "",
      hasDropdown: true,
      NippleSize: 23,
      nipplePosition: "top: 52px; right: 5px;",
      icon: <FontAwesomeIcon icon={All.faShoppingCart} />,
      id: "cart",
    },
    {
      title: "",
      NippleSize: 23,
      nipplePosition: "top: -12px; right: 15px;",
      icon: <FontAwesomeIcon icon={All.faBell} />,
      id: "message",
    },
    {
      title: "",
      hasDropdown: true,
      NippleSize: 23,
      nipplePosition: "top: -12px; right: 15px;",
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

      {itemInfos.map(
        (
          { id, title, hasDropdown, NippleSize, nipplePosition, icon },
          index
        ) => (
          <NavbarItem
            key={id}
            title={title}
            hasDropdown={hasDropdown}
            NippleSize={NippleSize}
            nipplePosition={nipplePosition}
            icon={icon}
            id={id}
            flexOrder={index}
          />
        )
      )}

      <NavBarBtn
        icon={<FontAwesomeIcon icon={All.faPencil} />}
        btnText="최근강의"
        btnBgColor="rgb(0, 196, 113)"
      />
    </StyledNavbarRight>
  );
};

const StyledNavbarRight = styled.div`
  display: flex;
  align-items: center;

  .navbar-item {
    padding: 0.5rem;
  }

  .navbar-item > a {
    display: flex;
    height: 48px;
    align-items: center;
    justify-content: center;
  }

  #profile .icon {
    border-radius: 50%;
    overflow: hidden;
  }
`;

export default NavbarRight;
