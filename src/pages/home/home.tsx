import React from 'react';

import './home.styles.css';
import { useAuth } from '../../components/hooks/auth-hook';
import { Navigate } from 'react-router-dom';

export default function Home() {
  const { isAuth } = useAuth();
  return isAuth ? (
    <div className="home_container">
      <div>
        <h1>Добро пожаловать в систему SomeCompany!</h1>
        <img src={process.env.PUBLIC_URL + 'site-logo.png'} className="logo" alt={'logo'} />
        <div className="font_rectangles">
          <div className="front_rectangles_item" />
          <div className="front_rectangles_item" />
          <div className="front_rectangles_item" />
          <div className="front_rectangles_item" />
          <div className="front_rectangles_item" />
          <div className="front_rectangles_item" />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
}
