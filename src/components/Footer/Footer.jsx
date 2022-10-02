import { Link } from 'react-router-dom';

import s from './Footer.module.css';
import sprite from 'img/sprite.svg';
import routes from 'utils/router';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <p className={s.text}>
        <svg className={s.copyright}>
          <use href={`${sprite}#icon-copyright`}></use>
        </svg>
        <span className={s.year}>2021</span>
        <span className={s.rights}>All Rights Reserved</span>
        <span className={s.dev}>Developed with</span>
        <svg className={s.heart}>
          <use href={`${sprite}#icon-heart`}></use>
        </svg>
        <span className={s.by}>
          by{' '}
          <Link className={s.link} to={routes.contacts}>
            GoIT Students
          </Link>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
