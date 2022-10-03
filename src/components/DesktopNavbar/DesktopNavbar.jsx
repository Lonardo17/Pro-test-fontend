import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import s from './DesktopNavbar.module.css';
import routes from 'utils/router';

const { home, materials, contacts } = routes;

const DesktopNavbar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div className={s.wrapper}>
      <ul className={s.nav}>
        {isLoggedIn && (
          <li className={s.tab}>
            <NavLink className={s.link} end to={home}>
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
