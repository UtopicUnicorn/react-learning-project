import React, { useState } from 'react';
import { TextField } from '@mui/material';
import IPForm from './ipForm';

export default function LawForm() {
  const [kpp, setKPP] = useState('');

  return (
    <div>
      <IPForm />
      <TextField
        variant="filled"
        id="outlined-basic"
        style={{ margin: 10 }}
        placeholder="КПП"
        type="text"
        value={kpp}
        onChange={(e) => setKPP(e.target.value)}
      />
    </div>
  );
}
