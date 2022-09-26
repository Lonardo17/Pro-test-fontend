// import { Link } from 'react-router-dom';

import s from './Login.module.css';

export default function Login() {
  return (
    <div className={s.Login}>
      <h1 className={s.title}>Pro Test</h1>
      <p className={s.text}>
        <span className={s.txtBold}>&#91;</span> We will help you find weak
        points in knowlrdge so that you can strengrhen it. We will show you what
        is relevant to know for <span className={s.txtBold}>QA Engineer</span>{' '}
        and will try to make the learning process more diverse_{' '}
        <span className={s.txtBold}>&#93;</span>
      </p>
    </div>
  );
}
