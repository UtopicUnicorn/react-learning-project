import React, { useState } from 'react';
import PhysForm from './physForm';
import { useDispatch } from 'react-redux';
import { changeForm, partnerInitialState } from '../reducers/partners.reduser';

export default function IPForm() {
  const dispatch = useDispatch();

  const formState = partnerInitialState;

  const [form, setForm] = useState(formState);

  const formHandler = (ev: any) => {
    ev.preventDefault();
    setForm(formState);
  };

  const handleInputChange = (ev: any) => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value
    });

    dispatch(changeForm({ [ev.target.name]: ev.target.value }));
  };

  return (
    <div>
      <PhysForm />
      <form className="partners_form" onSubmit={formHandler}>
        <p>Данные контрагента</p>
        <div style={{ marginTop: 20 }}>
          <input
            name="address"
            placeholder="Адрес"
            type="text"
            value={form.address}
            onChange={handleInputChange}
          />

          <input
            name="inn"
            placeholder="ИНН"
            type="text"
            value={form.inn}
            onChange={handleInputChange}
          />
        </div>
        <p>Банковские данные</p>
        <div>
          <input
            name="bank"
            placeholder="Банк"
            type="text"
            value={form.bank}
            onChange={handleInputChange}
          />

          <input
            name="bik"
            placeholder="БИК"
            type="text"
            value={form.bik}
            onChange={handleInputChange}
          />

          <input
            name="payNumber"
            style={{ margin: 10 }}
            placeholder="Номер счета"
            type="text"
            value={form.payNumber}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}
