import React, { useState } from 'react';
import { TextField } from '@mui/material';
import PhysForm from './physForm';

export default function IPForm() {
  const [address, setAddress] = useState('');
  const [inn, setINN] = useState('');
  const [bank, setBank] = useState('');
  const [bik, setBIK] = useState('');
  const [payNumber, setPayNumber] = useState('');

  return (
    // <div style={{ textAlign: 'center', marginTop: 20 }}>
    <div>
      <PhysForm />
      <div style={{ marginTop: 20 }}>
        <TextField
          variant="filled"
          id="outlined-basic"
          style={{ margin: 10 }}
          placeholder="Адрес"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <TextField
          variant="filled"
          id="outlined-basic"
          style={{ margin: 10 }}
          placeholder="ИНН"
          type="text"
          value={inn}
          onChange={(e) => setINN(e.target.value)}
        />
      </div>

      <div>
        <TextField
          variant="filled"
          id="outlined-basic"
          style={{ margin: 10 }}
          placeholder="Банк"
          type="text"
          value={bank}
          onChange={(e) => setBank(e.target.value)}
        />

        <TextField
          variant="filled"
          id="outlined-basic"
          style={{ margin: 10 }}
          placeholder="БИК"
          type="text"
          value={bik}
          onChange={(e) => setBIK(e.target.value)}
        />

        <TextField
          variant="filled"
          id="outlined-basic"
          style={{ margin: 10 }}
          placeholder="Номер счета"
          type="text"
          value={payNumber}
          onChange={(e) => setPayNumber(e.target.value)}
        />
      </div>
    </div>
  );
}
