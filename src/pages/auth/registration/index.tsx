import React from 'react';
import { useDispatch } from 'react-redux';

import '../auth.style.css';
import authService from '../services/auth.service';

export default function Registration() {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch();

  const sendForm = (e: any) => {
    e.preventDefault();
    dispatch({ type: 'NEW_USER', payload: { login: login, password: password } });

    const obj = {
      login: login,
      password: password
    };
    authService.createUser(obj).then(() => console.log('registered'));
  };

  return (
    <div className="login_container">
      <div className="login">
        <div className="login_title">
          <h4>Зарегистрироваться</h4>
        </div>
        <div>
          <form className="login_form">
            <div className="text_area">
              <input
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="text_input"
                type="text"
                placeholder="email"
              />
            </div>

            <div className="text_area">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text_input"
                placeholder="password"
                type="password"
              />
            </div>

            <div className="btn_view">
              <button className="btn" onClick={(e) => sendForm(e)}>
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
