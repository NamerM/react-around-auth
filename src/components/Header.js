import React from "react";
import headerLogo from "../images/logo-aroundtheus.svg";


function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Logo text writes Around the U.S."
      />
    </header>
  );
}

export default Header;
