import React from 'react';

import './home.styles.css';

export default function Home() {
  return (
    <div className="home_container">
      <div>
        <h1>Добро пожаловать в систему SomeCompany!</h1>
        <img src={process.env.PUBLIC_URL + 'site-logo.png'} className="logo" alt={'logo'} />
        <div className="font_rectangles">
          <div className="font_rectangles_item_1" />
          <div className="font_rectangles_item_2" />
          <div className="font_rectangles_item_3" />
          <div className="font_rectangles_item_4" />
          <div className="font_rectangles_item_5" />
          <div className="font_rectangles_item_6" />
        </div>
      </div>
    </div>
  );
}
