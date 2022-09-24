import React from 'react';
import priceRuleService from '../services/price-rule.service';
import '../price-rules.styles.css';

function PriceRuleForm() {
  const [name, setName] = React.useState('');
  const [percent, setPercent] = React.useState('0');
  const [minSum, setMinSum] = React.useState('0');
  const [maxSum, setMaxSum] = React.useState('0');

  const Check = () => {
    const obj = {
      name: name,
      percent: Number(percent),
      min: Number(minSum),
      max: Number(maxSum)
    };

    priceRuleService.post(obj);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <form>
        <p>Название</p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <p>Процент</p>
        <input type="text" value={percent} onChange={(e) => setPercent(e.target.value)} />

        <p>Минимальная сумма</p>
        <input type="text" value={minSum} onChange={(e) => setMinSum(e.target.value)} />

        <p>Максимальная сумма</p>
        <input type="text" value={maxSum} onChange={(e) => setMaxSum(e.target.value)} />
      </form>

      <button type={'submit'} onClick={Check}>
        Отправить текст
      </button>
    </div>
  );
}

export default PriceRuleForm;
