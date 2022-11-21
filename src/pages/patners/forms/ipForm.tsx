import React, { useState } from 'react';
import { TextField } from '@mui/material';
import PhysForm from './physForm';
import { useDispatch, useSelector } from 'react-redux';
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
        <div style={{ marginTop: 20 }}>
          <input
            name="address"
            style={{ margin: 10 }}
            placeholder="Адрес"
            type="text"
            value={form.address}
            onChange={handleInputChange}
            // value={address}
            // onChange={(e) => setAddress(e.target.value)}
          />

          <input
            name="inn"
            style={{ margin: 10 }}
            placeholder="ИНН"
            type="text"
            value={form.inn}
            onChange={handleInputChange}
            // value={inn}
            // onChange={(e) => setINN(e.target.value)}
          />
        </div>

        <div>
          <input
            name="bank"
            style={{ margin: 10 }}
            placeholder="Банк"
            type="text"
            value={form.bank}
            onChange={handleInputChange}
            // value={bank}
            // onChange={(e) => setBank(e.target.value)}
          />

          <input
            name="bik"
            style={{ margin: 10 }}
            placeholder="БИК"
            type="text"
            value={form.bik}
            onChange={handleInputChange}
            // value={bik}
            // onChange={(e) => setBIK(e.target.value)}
          />

          <input
            name="payNumber"
            style={{ margin: 10 }}
            placeholder="Номер счета"
            type="text"
            value={form.payNumber}
            onChange={handleInputChange}
            // value={payNumber}
            // onChange={(e) => setPayNumber(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
