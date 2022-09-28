import React from "react";
import { Link, useLocation } from 'react-router-dom';
import headerLogo from "../images/logo-aroundtheus.svg";

function Header({ isLoggedIn, email, handleSignOut }) {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Logo text writes Around the U.S."
      />
      <div className="header__account">
        {isLoggedIn ? (
          <div>
          <p className="header__email">{email}</p>
          <p className="header__text" onClick={handleSignOut}>
            Log Out
          </p>
          </div>
        ) : (
          <Link to={useLocation.pathname === '/signin' ? '/signup' : '/signin'} className='header__link'>
            {useLocation.pathname === '/signin' ? 'Sign up' : 'Sign in'}
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
