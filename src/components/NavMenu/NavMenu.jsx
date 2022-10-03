import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

import LogoutButton from 'components/LogoutButton';
import s from './NavMenu.module.css';
import routes from 'utils/router';
import Icon from 'utils/Icon';

const NO_SCROLL = 'body-no-scroll';

const { home, materials, contacts } = routes;

const NavMenu = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    document.body.classList.toggle(NO_SCROLL);
    setIsMenuOpen(isOpen => !isOpen);
  };

  return (
    <>
      <button onClick={toggleMenu} className={s.menuBtn}>
        {isMenuOpen ? (
          <Icon name="close" className={s.iconClose} height={20} />
        ) : (
          <Icon name="menu" className={s.iconOpen} height={20} />
        )}
      </button>

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
