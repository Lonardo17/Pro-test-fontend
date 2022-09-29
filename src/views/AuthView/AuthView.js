import Login from 'components/Login/Login';
import AuthForm from 'components/Login/AuthForm';
import s from './AuthView.module.css';
// import Container from 'components/Container';

export default function AuthView() {
  return (
    <>
      <div className={s.container}>
        <div className={s.AuthView}>
          {/* <Container> */}
          <Login />
          <AuthForm />
          {/* </Container> */}
        </div>
      </div>
    </>
  );
}
