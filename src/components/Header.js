import React from "react";
import headerLogo from "../images/logo-aroundtheus.svg";
import NavBar from "./Nav";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Logo text writes Around the U.S."
      />
      <NavBar />
    </header>
  );
}

export default Header;
