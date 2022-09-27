import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import LogoutButton from 'components/LogoutButton';
import s from './NavMenu.module.css';
import sprite from 'img/symbol-defs.svg';
import routes from 'utils/router';

const NO_SCROLL = 'body-no-scroll';

const { home, materials, contacts } = routes;

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = false; //TODO: add Redux Auth State support

  const toggleMenu = () => {
    document.body.classList.toggle(NO_SCROLL);
    setIsMenuOpen(isOpen => !isOpen);
  };

  return (
    <>
      <div onClick={toggleMenu}>
        {isMenuOpen ? (
          <svg className={s.iconClose}>
            <use href={`${sprite}#icon-close`}></use>
          </svg>
        ) : (
          <svg className={s.iconOpen}>
            <use href={`${sprite}#icon-menu`}></use>
          </svg>
        )}
      </div>

      {isMenuOpen && (
        <div className={s.menu}>
          <ul className={s.list}>
            {isLoggedIn && (
              <li className={s.tab}>
                <NavLink className={s.link} onClick={toggleMenu} to={home}>
                  Home
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li className={s.tab}>
                <NavLink className={s.link} onClick={toggleMenu} to={materials}>
                  Materials
                </NavLink>
              </li>
            )}
            <li className={s.tab}>
              <NavLink className={s.link} onClick={toggleMenu} to={contacts}>
                Contacts
              </NavLink>
            </li>
            {isLoggedIn && (
              <li className={s.tab}>
                <LogoutButton
                  onClick={() => {
                    toggleMenu();
                  }}
                />
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavMenu;
