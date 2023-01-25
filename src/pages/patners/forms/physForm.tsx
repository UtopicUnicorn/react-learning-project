import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { changeForm, partnerInitialState } from '../reducers/partners.reduser';
import { PriceRuleInterface } from '../../price-rules/interfaces/price-rule.interface';
import PriceRuleService from '../../price-rules/services/price-rule.service';

export default function PhysForm() {
  const dispatch = useDispatch();
  const [priceRules, setPriceRules] = useState<PriceRuleInterface[]>([]);

  const formState = partnerInitialState;

  useEffect(() => getRules(), []);

  const getRules = () => {
    PriceRuleService.get().then((data) => setPriceRules(data.data));
  };

  const [form, setForm] = useState(formState);

  const formHandler = (ev: any) => {
    ev.preventDefault();
    setForm(formState);
  };

  const rulesOptions = priceRules.map((text, number) => {
    return (
      <option key={number} value={text.id}>
        {text.name}
      </option>
    );
  });

  const handleInputChange = (ev: any) => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value
    });

    dispatch(changeForm({ [ev.target.name]: ev.target.value }));
  };

  return (
    <div>
      <form className="partners_form" onSubmit={formHandler}>
        <h3>ФИО</h3>
        <div className="name-block">
          <input
            placeholder="Фамилия"
            type="text"
            value={form.surname}
            className="textPartner"
            name="surname"
            onChange={handleInputChange}
          />

          <input
            className="textPartner"
            placeholder="Имя"
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
          />

          <input
            placeholder="Отчество"
            className="textPartner"
            type="text"
            value={form.parentname}
            name="parentname"
            onChange={handleInputChange}
          />
        </div>
        {/*данные для связи*/}
        <h3>Контактный данные</h3>
        <div className="contacts_block">
          <input
            placeholder="Номер телефона"
            className="textPartner"
            type="text"
            value={form.phone}
            name="phone"
            onChange={handleInputChange}
          />

          <input
            className="textPartner"
            placeholder="Электронная почта"
            type="email"
            value={form.mail}
            name="mail"
            onChange={handleInputChange}
          />
        </div>
        <div className="partners_select_box">
          <label>{'Выберете ценовое правило'}</label>
          <select
            name="pricerule"
            value={form.pricerule}
            className="partners_select"
            placeholder={'Выберете правило'}
            onChange={handleInputChange}>
            {rulesOptions}
          </select>
        </div>
      </form>
    </div>
  );
}
