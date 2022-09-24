import { NavLink } from 'react-router-dom';
import s from './DesktopNavbar.module.css';
import routes from 'utils/router';

const { home, materials, contacts } = routes;

const DesktopNavbar = () => {
  const isLoggedIn = false; //TODO: add Redux Auth State support
  return (
    <div className={s.wrapper}>
      <ul className={s.nav}>
        {isLoggedIn && (
          <li className={s.tab}>
            <NavLink className={s.link} to={home}>
              Home
            </NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li className={s.tab}>
            <NavLink className={s.link} to={materials}>
              Materials
            </NavLink>
          </li>
        )}
        <li className={s.tab}>
          <NavLink className={s.link} to={contacts}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNavbar;
