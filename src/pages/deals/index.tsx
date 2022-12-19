import React from 'react';
import './index.css';

export default function Deals() {
  return (
    <>
      <div>
        <div className="deals_title">
          <h2>Сделки с клиентами Currently in progress...</h2>
        </div>
        <div style={{ textAlign: 'center' }}>
          <form>
            <div>
              <input className="deals_input" type="text" placeholder="Организация" />
              <input className="deals_input" type="text" placeholder="Сделки с клиентами" />
              <input className="deals_input" type="text" placeholder="Менеджер" />
            </div>
            <div className="deals_button_block">
              <button className="deals_button">Выкуп</button>
              <button className="deals_button">Комиссия</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
