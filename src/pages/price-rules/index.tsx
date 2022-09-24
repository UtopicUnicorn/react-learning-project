import React, { useEffect, useState } from 'react';

import './price-rules.styles.css';
import ModalWindow from '../../components/modal-windows/modal-window';
import PriceRuleForm from './forms/price-rule.form';
import PriceRuleService from './services/price-rule.service';

import { PriceRuleInterface } from './interfaces/price-rule.interface';

export default function Index() {
  const [modal, setModal] = useState(false);
  const [rules, setRules] = useState<PriceRuleInterface[]>([]);

  useEffect(() => getFunction, []);

  const getFunction = () => {
    PriceRuleService.get().then((obj) => setRules(obj.data));
  };

  const headers: { label: string }[] = [
    { label: 'ID' },
    { label: 'Название' },
    { label: 'Процент' },
    { label: 'Минимальная цена' },
    { label: 'Максимальная цена' }
  ];

  return (
    <div className="container">
      <main>
        <h1 className="title">Ценовые правила</h1>
        <button className="button-add" onClick={() => setModal(true)}>
          <img src={process.env.PUBLIC_URL + 'btn-plus.svg'} className="btn_plus" alt={'logo'} />
          <a>Добавить</a>
        </button>

        <table>
          <thead>
            <tr>
              {headers.map((row, index) => {
                return <td key={index}>{row.label} </td>;
              })}
            </tr>
          </thead>
          <tbody>
            {rules.map((rule) => {
              return (
                <tr key={rule.id}>
                  <td>{rule.id}</td>
                  <td>{rule.name}</td>
                  <td>{rule.percent}</td>
                  <td>{rule.min}</td>
                  <td>{rule.max}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
      <ModalWindow active={modal} setActive={setModal}>
        <PriceRuleForm />
      </ModalWindow>
    </div>
  );
}
