import s from './Materials.module.css';

const Resources = () => {
  return (
    <div className={s.resources}>
      <h2 className={s.title}>Useful resources</h2>
      <ul className={s.list}>
        <li>
          <a href="https://dou.ua/" className={s.linkRsourse}>
            1.dou.ua
          </a>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Habr"
            className={s.linkRsourse}
          >
            2.Habr
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" className={s.linkRsourse}>
            3.facebook.com/QA
          </a>
        </li>
        <li>
          <a href="https://goit.ua/" className={s.linkRsourse}>
            4.goit.ua
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Resources;
