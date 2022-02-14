//import { useState } from "react";
import { Link } from "react-router-dom";
import DesktopContainer from "./DesktopContainer";
import NavbarMenu from "./NavbarLeft";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <DesktopContainer /> {/* 추후 MobileContainer 추가 예정 */}
      </nav>
    </header>
  );
};

export default Header;
