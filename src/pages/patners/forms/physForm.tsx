import React, { useState } from 'react';

import { TextField } from '@mui/material';

export default function PhysForm() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const FormObj = {
    name: 'name',
    surname: 'surname',
    parentName: 'parentName',
    phone: '+79964273179',
    email: 'parentName'
  };

  const [form, setForm] = useState(FormObj);

  const formHandler = (ev: any) => {
    ev.preventDefault();
    setForm(FormObj);
  };

  const handleInputChange = (ev: any) => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value
    });
  };

  return (
    // <div style={{ textAlign: 'center', marginTop: 20 }}>
    <div style={{ textAlign: 'center' }}>
      <form onSubmit={formHandler}>
        {/*ФИО*/}
        ФИО
        <div>
          <TextField
            variant="filled"
            id="outlined-basic"
            style={{ margin: 10 }}
            placeholder="Фамилия"
            type="text"
            value={form.surname}
            name="surname"
            // value={surname}
            onChange={handleInputChange}
            // onChange={(e) => setSurname(e.target.value)}
          />

          <TextField
            variant="filled"
            id="outlined-basic"
            style={{ margin: 10 }}
            placeholder="Имя"
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />

          <TextField
            variant="filled"
            id="outlined-basic"
            style={{ margin: 10 }}
            placeholder="Отчество"
            type="text"
            value={form.parentName}
            name="parentName"
            onChange={handleInputChange}
            // value={parentName}
            // onChange={(e) => setParentName(e.target.value)}
          />
        </div>
        {/*данные для связи*/}
        Контактный данные
        <div>
          <TextField
            variant="filled"
            id="outlined-basic"
            style={{ margin: 10 }}
            placeholder="Номер телефона"
            type="text"
            value={form.phone}
            name="phone"
            onChange={handleInputChange}
            // value={phone}
            // onChange={(e) => setPhone(e.target.value)}
          />

          <TextField
            variant="filled"
            id="outlined-basic"
            style={{ margin: 10 }}
            placeholder="Электронная почта"
            type="email"
            value={form.email}
            name="email"
            onChange={handleInputChange}
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
