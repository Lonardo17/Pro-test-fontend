import { Link } from 'react-router-dom';

import s from './LogoutButton.module.css';
import sprite from 'img/symbol-defs.svg';
import routes from 'utils/router';

const LogoutButton = ({ onClick }) => {
  return (
    <Link className={s.link} onClick={onClick} to={routes.auth}>
      <svg className={s.logout}>
        <use href={`${sprite}#icon-sign-out`}></use>
      </svg>
    </Link>
  );
};

export default LogoutButton;
