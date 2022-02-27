import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  position: relative;
  height: 64px;
  width: 164px;

  input {
    padding: 5px 9px;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 3px;
    cursor: text;
    width: 100%;
    height: 36px;
  }

  input:focus {
    border: 1px solid rgb(0, 196, 113);
  }

  span {
    color: #4a4a4a;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

const NavbarSearch = () => {
  return (
    <StyledSearch className="navbar-search">
      <input type="text" className="input" />
      <span>
        <FontAwesomeIcon icon={All.faSearch} />
      </span>
    </StyledSearch>
  );
};

export default NavbarSearch;
