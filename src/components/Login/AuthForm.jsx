import s from './AuthForm.module.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  useAddUserMutation,
  useAuthorizeUserMutation,
} from '../../redux/authAPI';
import { toast } from 'react-toastify';
import { setUser } from '../../redux/auth/authReducer';

export default function AuthForm() {
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
  // const { emailDirty, passwordDirty } = dirty;

  const dispatch = useDispatch();

  const [registerUser] = useAddUserMutation();
  const [authorizeUser] = useAuthorizeUserMutation();

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
    authorizeUser(user)
      .unwrap()
      .then(data => {
        dispatch(
          setUser({
            email: data.user.email,
            token: data.user.token,
            // refreshToken: data.refreshToken,
            // sid: data.sid,
          })
        );
        setUserForm({
          email: '',
          password: '',
        });
      })
      .catch(error => toast.error(error.data.message));
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
                email: data.user.email,
                token: data.user.token,
              })
            );
            setUserForm({
              email: '',
              password: '',
            });
          })
      )
      .catch(error => toast.error(error.data.message));
  };

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
      </label>
      <label className={s.label}>
        <input
          className={s.inputPassword}
          type="text"
          placeholder="Password"
          required
          id="password"
          value={password}
          onChange={onInput}
          onBlur={onBlur}
          name="password"
        />
      </label>
      <div className={s.buttonWraper}>
        <button
          className={s.buttonSignIn}
          type="button"
          onClick={onRegister}
          disabled={!formValidity}
        >
          Sign in
        </button>
        <button
          className={s.buttonSignUp}
          type="button"
          onClick={onLogin}
          disabled={!formValidity}
        >
          Sign up
        </button>
      </div>
    </form>
  );
}