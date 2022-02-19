import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbarItem = styled.div`
  color: #4a4a4a;
  position: relative;
  line-height: 1.5;
  display: flex;
  order: ${(({ flexOrder }) => flexOrder) || 0};
`;

const NavbarItem = ({ title, hasDropdown, icon, id, flexOrder }) => {
  return (
    <StyledNavbarItem
      icon={icon}
      flexOrder={flexOrder}
      className="navbar-item"
      id={icon ? id : null}
    >
      <Link to={`/roadmap`}>
        <span className={icon ? "icon" : null}>{title ? title : icon}</span>
      </Link>
      {/*hasDropdown ? :*/}
    </StyledNavbarItem>
  );
};

export default NavbarItem;
