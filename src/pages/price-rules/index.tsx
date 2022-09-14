import React, { useState } from 'react';

import './price-rules.styles.css';
import ModalWindow from '../../components/modal-windows/modal-window';
import PriceRuleForm from './forms/price-rule.form';

export default function Index() {
  const [modal, setModal] = useState(false);

  return (
    <div className="container">
      <main>
        <h1 className="title">Ценовые правила</h1>
        <button className="button-add" onClick={() => setModal(true)}>
          <img src={process.env.PUBLIC_URL + 'btn-plus.svg'} className="btn_plus" alt={'logo'} />
          <a>Добавить</a>
        </button>
      </main>
      <ModalWindow active={modal} setActive={setModal}>
        <PriceRuleForm />
      </ModalWindow>
    </div>
  );
}
