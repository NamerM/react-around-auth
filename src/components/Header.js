import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import headerLogo from '../images/logo-aroundtheus.svg';

function Header({ isLoggedIn, email, handleSignOut }) {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Logo text writes Around the U.S."
      />
      <div>
        {isLoggedIn ? (
          <div className="header__container">
          <p className="header__email">{email}</p>
          <p className="header__text" onClick={handleSignOut}>
            Log Out
          </p>
          </div>
        ) : (
          <div className="header__container">
          <Link to={useLocation.pathname === '/signin' ? '/signup' : '/signin'} className='header__link'>
            {useLocation.pathname === '/signin' ? 'Sign up' : 'Log in'}
          </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
