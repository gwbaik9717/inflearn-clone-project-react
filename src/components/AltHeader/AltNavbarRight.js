import NavbarItem from "../Header/NavbarItem";
import NavbarBtn from "../Header/NavbarBtn";
import NavbarSearch from "../Header/NavbarSearch";
import styled from "styled-components";

const StyledNavbarRight = styled.div`
  display: flex;
  align-items: center;

  .navbar-item {
    display: flex;
    padding: 8px 8px;
  }

  .navbar-item a {
    display: flex;
    height: auto;
    align-items: center;
    justify-content: center;
  }
`;

const NavbarRight = () => {
  const btns = [
    {
      btnText: "로그인",
      btnBgColor: "#fff",
      btnColor: "#363636",
      btnWeight: "400",
      borderColor: "rgb(219, 219, 219)",
    },
    {
      btnText: "회원가입",
      btnBgColor: "#ff7867",
      btnColor: "#fff",
      btnWeight: "400",
      borderColor: "rgb(219, 219, 219)",
    },
  ];

  return (
    <StyledNavbarRight className="navbar-right">
      <NavbarSearch />

      <div className="navbar-item">
        <NavbarItem title="지식공유참여" hasDropdown={false} id="share" />

        {btns.map(
          ({ btnText, btnBgColor, btnColor, btnWeight, borderColor }) => (
            <NavbarBtn
              key={btnText}
              btnText={btnText}
              btnBgColor={btnBgColor}
              btnColor={btnColor}
              btnWeight={btnWeight}
              borderColor={borderColor}
            />
          )
        )}
      </div>
    </StyledNavbarRight>
  );
};

export default NavbarRight;
