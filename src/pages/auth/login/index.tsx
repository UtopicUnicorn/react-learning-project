import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import authService from '../services/auth.service';
import '../auth.style.css';

export default function Login() {
  const [password, setPassword] = React.useState('');
  const [login, setLogin] = React.useState('');
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const signIn = () => {
    const obj = {
      login: login,
      password: password
    };

    dispatch({ type: 'SIGN_IN', payload: obj });
    authService
      .login(obj)
      .then((data) => localStorage.setItem('key', data.data))
      .then(() => navigation('/home'));
  };

  return (
    <div className="login_container">
      <div className="login">
        {/*  title */}
        <div className="login_title">
          <h4>Вход в систему</h4>
        </div>
        {/* form */}
        <div>
          <form className="login_form">
            <div className="text_area">
              <input
                type="text"
                id="login"
                placeholder="email"
                className="text_input"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>

            <div className="text_area">
              <input
                type="password"
                id="password"
                placeholder="password"
                className="text_input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link to={'/signup'}>Зарегистрироваться</Link>
            <div className="btn_view">
              <button type="button" className="btn" onClick={signIn}>
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
