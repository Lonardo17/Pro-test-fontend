import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.circle}></div>
      <div className={s.circle}></div>
      <div className={s.circle}></div>
      <div className={s.shadow}></div>
      <div className={s.shadow}></div>
      <div className={s.shadow}></div>
    </div>
  );
};

export default Loader;
