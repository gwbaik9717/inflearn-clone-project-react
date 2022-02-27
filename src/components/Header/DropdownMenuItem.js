import styled from "styled-components";

const StyledDropdownMenuItem = styled.li`
  .dropdown-item {
    display: flex;
    align-items: center;
    padding: 0.375rem 1rem;
    font-size: 14px;
  }

  &:hover {
    pointer-events: auto;
    color: #000a12;
  }

  &:hover > .lv2 {
    display: block !important;
    pointer-events: auto;
  }
`;

const StyledDropdownMenu = styled.ul`
  position: absolute;
  top: 0 !important;
  left: 180px !important;
  display: none;
  opacity: 1 !important;
`;

const DropdownMenuItem = ({ item, dropdownLv2, index }) => {
  return (
    <StyledDropdownMenuItem key={item}>
      <a className="dropdown-item" href="#">
        {item}
      </a>

      {dropdownLv2 ? (
        <StyledDropdownMenu
          key={item}
          className={dropdownLv2[index].length > 0 && "navbar-dropdown lv2 "} // 아이템이 있을때만 dropdown 메뉴 표시
        >
          {dropdownLv2[index].map((item) => (
            <li key={item}>
              <a className="dropdown-item" href="#">
                {item}
              </a>
            </li>
          ))}
        </StyledDropdownMenu>
      ) : null}
    </StyledDropdownMenuItem>
  );
};

export default DropdownMenuItem;
