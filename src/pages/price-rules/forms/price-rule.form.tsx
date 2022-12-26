import React from 'react';
import priceRuleService from '../services/price-rule.service';
import '../price-rules.styles.css';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { priceRuleState } from '../reducers/price-rule.reducer';
import ModalWindow from '../../../components/modal-windows/modal-window';

function PriceRuleForm() {
  const [name, setName] = React.useState('');
  const [percent, setPercent] = React.useState('');
  const [minSum, setMinSum] = React.useState('');
  const [maxSum, setMaxSum] = React.useState('');

  const dispatch = useDispatch();

  const Check = () => {
    const obj = {
      name: name,
      percent: Number(percent),
      min: Number(minSum),
      max: Number(maxSum)
    };
    dispatch({ type: 'NEW_RULE', payload: obj });
    priceRuleService.post(obj).then(() => console.log('sent'));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <form className="price_rules">
        <div className="field">
          <label>Название</label>
          <input
            style={{ margin: 10 }}
            placeholder="Выкуп"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Процент</label>
          <input
            style={{ margin: 10 }}
            placeholder="10%"
            type="text"
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Мин. сумма</label>
          <input
            style={{ margin: 10 }}
            type="text"
            placeholder="500"
            value={minSum}
            onChange={(e) => setMinSum(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Макс. сумма</label>
          <input
            style={{ margin: 10 }}
            type="text"
            placeholder="1000"
            value={maxSum}
            onChange={(e) => setMaxSum(e.target.value)}
          />
        </div>
      </form>

      <button className="btn_rules" type={'submit'} onClick={Check}>
        Создать правило
      </button>
    </div>
  );
}

export default PriceRuleForm;
