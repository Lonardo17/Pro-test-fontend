import { Link } from 'react-router-dom';

import s from './LogoutButton.module.css';
import sprite from 'img/symbol-defs.svg';
import routes from 'utils/router';
import { useLogOutUserMutation, authApi } from 'redux/authAPI';
import { useDispatch } from 'react-redux';
import { resetUser } from 'redux/auth/authReducer';

const LogoutButton = () => {
  const [logOutUser] = useLogOutUserMutation();
  const dispatch = useDispatch();

  const onLogOutUser = () => {
    logOutUser()
      .unwrap()
      .then(() => {
        dispatch(resetUser());
        dispatch(authApi.util.resetApiState());
      });
  };

  return (
    <Link className={s.link} onClick={onLogOutUser} to={routes.auth}>
      <svg className={s.logout}>
        <use href={`${sprite}#icon-sign-out`}></use>
      </svg>
    </Link>
  );
};

export default LogoutButton;
