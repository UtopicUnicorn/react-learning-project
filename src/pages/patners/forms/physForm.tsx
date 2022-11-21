import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeForm, partnerInitialState } from '../reducers/partners.reduser';

export default function PhysForm() {
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
    <div style={{ textAlign: 'center' }}>
      <form className="partners_form" onSubmit={formHandler}>
        <p>ФИО</p>
        <div className="name-block">
          <input
            style={{ margin: 10 }}
            placeholder="Фамилия"
            type="text"
            value={form.surname}
            className="textPartner"
            name="surname"
            onChange={handleInputChange}
          />

          <input
            style={{ margin: 10 }}
            className="textPartner"
            placeholder="Имя"
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
          />

          <input
            style={{ margin: 10 }}
            placeholder="Отчество"
            className="textPartner"
            type="text"
            value={form.parentname}
            name="parentname"
            onChange={handleInputChange}
          />
        </div>
        {/*данные для связи*/}
        Контактный данные
        <div className="contacts_block">
          <input
            style={{ margin: 10 }}
            placeholder="Номер телефона"
            className="textPartner"
            type="text"
            value={form.phone}
            name="phone"
            onChange={handleInputChange}
          />

          <input
            className="textPartner"
            style={{ margin: 10 }}
            placeholder="Электронная почта"
            type="email"
            value={form.email}
            name="email"
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}
