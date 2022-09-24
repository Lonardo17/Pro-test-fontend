import s from './ProTestLogo.module.css';
import sprite from 'img/symbol-defs.svg';

const ProTestLogo = () => {
  return (
    <div className={s.wrapper}>
      <svg className={s.logo}>
        <use href={`${sprite}#icon-logo`}></use>
      </svg>
    </div>
  );
};

export default ProTestLogo;
