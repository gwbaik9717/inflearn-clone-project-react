import NavbarItem from "./NavbarItem";
import styled from "styled-components";

const StyledNavbarLeft = styled.div`
  display: flex;
  align-items: center;

  .navbar-item {
    padding: 8px 14px 8px 14px;
  }

  .navbar-item a {
    display: flex;
    padding: 8px 8px;
    height: 48px;
    align-items: center;
  }
`;

const NavbarLeft = () => {
  const itemInfos = [
    { title: "강의", hasDropdown: true },
    { title: "로드맵", hasDropdown: false },
    { title: "멘토링", hasDropdown: false },
    { title: "커뮤니티", hasDropdown: true },
    { title: "인프런", hasDropdown: true },
  ];

  return (
    <StyledNavbarLeft className="navbar-left">
      {itemInfos.map(({ title, hasDropdown }) => (
        <NavbarItem key={title} title={title} hasDropdown={hasDropdown} />
      ))}
    </StyledNavbarLeft>
  );
};

export default NavbarLeft;
