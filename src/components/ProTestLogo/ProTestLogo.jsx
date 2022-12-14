import { Link } from 'react-router-dom';

import s from './ProTestLogo.module.css';
import sprite from 'img/sprite.svg';
import routes from 'utils/router';

const ProTestLogo = () => {
  return (
    <Link to={routes.home} aria-label="Pro-Test home link">
      <div className={s.wrapper}>
        <svg className={s.logo}>
          <use href={`${sprite}#icon-logo`}></use>
        </svg>
      </div>
    </Link>
  );
};

export default ProTestLogo;
