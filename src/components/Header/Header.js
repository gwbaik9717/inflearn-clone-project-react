//import { useState } from "react";
import DesktopContainer from "./DesktopContainer";
import "../../styles/Header.css";

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
