import React from 'react';

import './home.styles.css';

export default function Home() {
  return (
    <>
      <div>
        <div className="container">
          <h1>Добро пожаловать в систему SomeCompany!</h1>
          <img src={process.env.PUBLIC_URL + 'site-logo.png'} className="logo" alt={'logo'} />
        </div>

        <div className="font_rectangles">
          <div className="front_rectangles_item" />
          <div className="front_rectangles_item" />
          <div className="front_rectangles_item" />
          <div className="front_rectangles_item" />
          <div className="front_rectangles_item" />
          <div className="front_rectangles_item" />
        </div>
      </div>
    </>
  );
}
