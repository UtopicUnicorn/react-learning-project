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
            value={form.email}
            name="email"
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}
