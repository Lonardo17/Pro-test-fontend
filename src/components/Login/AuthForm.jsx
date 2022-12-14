import s from './AuthForm.module.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  useAddUserMutation,
  useAuthorizeUserMutation,
  useAuthorizeUserByGoogleMutation,
} from '../../redux/authAPI';
import { toast } from 'react-toastify';
import { setUser } from '../../redux/auth/authReducer';
import { useGoogleLogin } from '@react-oauth/google';
import googleIcon from '../../img/authForm/google-symbol.svg';
import Loader from 'components/Loader';

export default function AuthForm() {
  const [status, setStatus] = useState(false);
  const [user, setUserForm] = useState({ email: '', password: '' });
  const [error, setError] = useState({
    emailError: 'This is a required field',
    passwordError: 'This is a required field',
  });
  const [dirty, setDirty] = useState({
    emailDirty: false,
    passwordDirty: false,
  });
  const [formValidity, setFormValidity] = useState('true');

  const { email, password } = user;
  const { emailError, passwordError } = error;
  const { emailDirty, passwordDirty } = dirty;

  const dispatch = useDispatch();

  const [registerUser] = useAddUserMutation();
  const [authorizeUser] = useAuthorizeUserMutation();
  const [authorizeUserByGoogle] = useAuthorizeUserByGoogleMutation();

  const onInput = e => {
    setUserForm(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value.trim(),
      };
    });

    if (e.target.id === 'password') {
      if (e.target.value.length !== 0 && e.target.value.length < 8) {
        setError(prevState => {
          return {
            ...prevState,
            passwordError: 'Password must be not less than 8 symbols',
          };
        });
      } else if (!e.target.value) {
        setError(prevState => {
          return {
            ...prevState,
            passwordError: 'This is a required field',
          };
        });
      } else {
        setError(prevState => {
          return {
            ...prevState,
            passwordError: '',
          };
        });
      }
    }

    if (e.target.id === 'email') {
      const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

      if (e.target.value) {
        if (!pattern.test(String(e.target.value).toLowerCase())) {
          setError(prevState => {
            return {
              ...prevState,
              emailError: 'Incorrect email format',
            };
          });
        } else {
          setError(prevState => {
            return {
              ...prevState,
              emailError: '',
            };
          });
        }
      } else {
        setError(prevState => {
          return {
            ...prevState,
            emailError: 'This is a required field',
          };
        });
      }
    }
  };

  const onBlur = e => {
    switch (e.target.id) {
      case 'email':
        setDirty(prevState => {
          return {
            ...prevState,
            emailDirty: true,
          };
        });
        break;

      case 'password':
        setDirty(prevState => {
          return {
            ...prevState,
            passwordDirty: true,
          };
        });
        break;

      default:
        return;
    }
  };

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValidity(false);
    } else {
      setFormValidity(true);
    }
  }, [emailError, passwordError]);

  const onLogin = () => {
    if (!user?.email && !user?.password) {
      toast.warn('Please enter your email and password');
      return;
    }
    setStatus(true);
    authorizeUser(user)
      .unwrap()
      .then(data => {
        dispatch(
          setUser({
            avatar: data.user.avatar,
            email: data.user.email,
            token: data.user.token,
          })
        );
        setUserForm({
          email: '',
          password: '',
        });
        setStatus(false);
        toast.success('Welcome to Pro-Test');
      })
      .catch(error => {
        toast.error(error.data.message);
        setStatus(false);
      });
  };

  const onRegister = () => {
    if (!user?.email && !user?.password) {
      toast.warn('Please enter email and password for registration');
      return;
    }
    registerUser(user)
      .unwrap()
      .then(() =>
        authorizeUser(user)
          .unwrap()
          .then(data => {
            dispatch(
              setUser({
                avatar: data.user.avatar,
                email: data.user.email,
                token: data.user.token,
              })
            );
            setUserForm({
              email: '',
              password: '',
            });
            setStatus(false);
          })
      )
      .catch(error => {
        toast.error(error.data.message);
        setStatus(false);
      });
  };

  const googleLogins = useGoogleLogin({
    onSuccess: async ({ code }) => {
      authorizeUserByGoogle({ code })
        .unwrap()
        .then(data => {
          dispatch(
            setUser({
              avatar: data.user.avatar,
              email: data.user.email,
              token: data.user.token,
            })
          );
        })
        .catch(data => {
          toast.error(data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    },
    flow: 'auth-code',
  });

  return (
    <>
      {status ? (
        <Loader />
      ) : (
        <div className={s.Form}>
          <p className={s.firstText}>
            You can use Google Account to authorize:
          </p>
          <div className={s.google} onClick={googleLogins}>
            <img className={s.icon} src={googleIcon} alt="" />
            <span className={s.iconText}>Google</span>
          </div>
          <p className={s.secondText}>
            Or login to our app using e-mail and password:
          </p>
          <form>
            <label className={s.label}>
              <input
                className={s.inputMail}
                type="email"
                placeholder="E-mail"
                required
                id="email"
                value={email}
                onChange={onInput}
                onBlur={onBlur}
                name="email"
              />
              {emailDirty && emailError && (
                <p className={s.message}>{emailError}</p>
              )}
            </label>
            <label className={s.label}>
              <input
                className={s.inputPassword}
                type="password"
                placeholder="Password"
                required
                id="password"
                value={password}
                onChange={onInput}
                onBlur={onBlur}
                name="password"
              />
              {passwordDirty && passwordError && (
                <p className={s.message}>{passwordError}</p>
              )}
            </label>
            <div className={s.buttonWraper}>
              <button
                className={
                  !formValidity ? s.buttonSignInDisabled : s.buttonSignIn
                }
                type="button"
                onClick={onLogin}
                disabled={!formValidity}
              >
                Sign in
              </button>
              <button
                className={
                  !formValidity ? s.buttonSignUpDisabled : s.buttonSignUp
                }
                type="button"
                onClick={onRegister}
                disabled={!formValidity}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
