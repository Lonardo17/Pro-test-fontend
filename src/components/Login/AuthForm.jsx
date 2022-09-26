import s from './AuthForm.module.css';

export default function AuthForm() {
  return (
    <form className={s.Form}>
      <p className={s.firstText}>You can use Google Account to authorize:</p>
      <button className={s.btnGoogle}>
        <svg className={s.btnIcon} width="18px" height="18px">
          <use href="../../img/google.svg"></use>
        </svg>
        Google
      </button>
      <p className={s.secondText}>
        Or login to our app using e-mail and password:
      </p>
      <label className={s.label}>
        <input className={s.inputMail} type="email" placeholder="E-mail" />
      </label>
      <label className={s.label}>
        <input className={s.inputPassword} type="text" placeholder="Password" />
      </label>
      <div className={s.buttonWraper}>
        <button className={s.buttonSignIn}>Sign in</button>
        <button className={s.buttonSignUp}>Sign up</button>
      </div>
    </form>
  );
}
