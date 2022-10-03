import Login from 'components/Login/Login';
import AuthForm from 'components/Login/AuthForm';
import s from './AuthView.module.css';
import { useDispatch, } from 'react-redux';
import { seeHuman } from 'redux/human/humanSlices';
// import Container from 'components/Container';

export default function AuthView() {
  const dispatch = useDispatch();
  dispatch(seeHuman())

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
