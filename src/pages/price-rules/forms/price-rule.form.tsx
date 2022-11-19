import React from 'react';
import priceRuleService from '../services/price-rule.service';
import '../price-rules.styles.css';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { priceRuleState } from '../price-rule.reducer';

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
    priceRuleService.post(obj);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <form>
        <TextField
          style={{ margin: 10 }}
          id="outlined-basic"
          label="Название"
          variant="filled"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          style={{ margin: 10 }}
          id="outlined-basic"
          label="Процент"
          variant="filled"
          type="text"
          value={percent}
          onChange={(e) => setPercent(e.target.value)}
        />

        <TextField
          style={{ margin: 10 }}
          type="text"
          id="outlined-basic"
          label="Минимальная сумма"
          variant="filled"
          value={minSum}
          onChange={(e) => setMinSum(e.target.value)}
        />

        <TextField
          style={{ margin: 10 }}
          type="text"
          id="outlined-basic"
          label="Максимальная сумма"
          variant="filled"
          value={maxSum}
          onChange={(e) => setMaxSum(e.target.value)}
        />
      </form>

      <button type={'submit'} onClick={Check}>
        Отправить текст
      </button>
    </div>
  );
}

export default PriceRuleForm;
