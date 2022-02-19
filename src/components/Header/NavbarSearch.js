import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 8px;
  width: 12rem;
  position: relative;

  input {
    padding: 5px 9px;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 3px;
    cursor: text;
    height: 36px;
    margin: 6px 0px;
  }

  input:focus {
    border: 1px solid rgb(0, 196, 113);
  }

  span {
    color: #4a4a4a;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 30px;
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
