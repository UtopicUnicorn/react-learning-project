import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import IPForm from './ipForm';
import { RootState } from '../../../reducer';
import { changeForm } from '../reducers/partners.reduser';

export default function LawForm() {
  const [kpp, setKPP] = useState('');
  const dispatch = useDispatch();

  const formState = useSelector((state: RootState) => state.partners);

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
      <IPForm />
      <form className="partners_form" onSubmit={formHandler}>
        <input
          name="kpp"
          style={{ margin: 10 }}
          placeholder="КПП"
          type="text"
          value={kpp}
          onChange={(e) => setKPP(e.target.value)}
        />
      </form>
    </div>
  );
}
