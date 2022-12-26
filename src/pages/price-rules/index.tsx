import React, { useEffect, useState } from 'react';

import './price-rules.styles.css';
import ModalWindow from '../../components/modal-windows/modal-window';
import PriceRuleForm from './forms/price-rule.form';
import PriceRuleService from './services/price-rule.service';

import { PriceRuleInterface } from './interfaces/price-rule.interface';
import { CustomTable } from '../../components/tables/custom-table';
import { priceRulesHeaders } from './table/headers.table';
import { PriceRulesRows } from './table/rows.table';

export default function PriceRules() {
  const [modal, setModal] = useState(false);
  const [rules, setRules] = useState<PriceRuleInterface[]>([]);

  useEffect(() => getFunction(), []);

  const getFunction = () => {
    PriceRuleService.get().then((obj) => setRules(obj.data));
  };

  return (
    <div className="price_rules_container">
      <div className="test_head">
        <h1>Ценовые правила</h1>
        <div>
          <button className="button-add" onClick={() => setModal(true)}>
            <img src={process.env.PUBLIC_URL + 'btn-plus.svg'} className="btn_plus" alt={'logo'} />
            <a>Добавить</a>
          </button>
        </div>
      </div>
      <main>
        <div className="table">
          <CustomTable header={priceRulesHeaders} template={PriceRulesRows(rules)} />
        </div>
      </main>
      <ModalWindow active={modal} setActive={setModal}>
        <PriceRuleForm />
      </ModalWindow>
    </div>
  );
}
