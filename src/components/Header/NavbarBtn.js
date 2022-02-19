import styled from "styled-components";

const StyledNavbarItem = styled.div`
  display: flex;
  align-items: center;

  a {
    height: auto;
    padding: 8px 8px;
    background-color: ${({ btnBgColor }) => btnBgColor};
    border-radius: 4px;
    color: ${({ btnColor }) => btnColor || "#fff"};
    font-weight: ${({ btnWeight }) => btnWeight || 600};
    line-height: 1;
    font-size: 16px;
    border: ${({ borderColor }) =>
      borderColor ? "1px solid " + borderColor : null};
  }

  span {
    margin-left: ${({ icon }) => (icon ? "4px" : null)};
  }
`;

const NavBarBtn = ({
  icon,
  btnText,
  btnBgColor,
  btnColor,
  btnWeight,
  borderColor,
}) => {
  return (
    <StyledNavbarItem
      icon={icon}
      btnBgColor={btnBgColor}
      btnColor={btnColor}
      btnWeight={btnWeight}
      borderColor={borderColor}
      className="navbar-item"
    >
      <a href="#" className="btn">
        {icon ? icon : null}
        <span>{btnText}</span>
      </a>
    </StyledNavbarItem>
  );
};

export default NavBarBtn;
