import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import './price-rules.styles.css';
import ModalWindow from '../../components/modal-windows/modal-window';
import PriceRuleForm from './forms/price-rule.form';
import PriceRuleService from './services/price-rule.service';

import { PriceRuleInterface } from './interfaces/price-rule.interface';
import { useSelector } from 'react-redux';
import { priceRuleState } from './price-rule.reducer';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useAuth } from '../../components/hooks/auth-hook';

export default function PriceRules() {
  const [modal, setModal] = useState(false);
  const [rules, setRules] = useState<PriceRuleInterface[]>([]);

  const { isAuth } = useAuth();

  useEffect(() => getFunction, []);

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Имя', width: 130 },
    { field: 'percent', headerName: 'Процент', width: 130 },
    { field: 'min', headerName: 'Минимальная цена', width: 130 },
    { field: 'max', headerName: 'Максимальная цена', width: 130 }
  ];

  const getFunction = () => {
    PriceRuleService.get().then((obj) => setRules(obj.data));
    addRule();
  };
  const newRule = useSelector((state: priceRuleState) => state);

  const addRule = () => {
    console.log(newRule);
  };

  return isAuth ? (
    <div>
      <div className="test_head">
        <h1>Ценовые правила</h1>
        <div>
          <button className="button-add" onClick={() => setModal(true)}>
            <img src={process.env.PUBLIC_URL + 'btn-plus.svg'} className="btn_plus" alt={'logo'} />
            <a>Добавить</a>
          </button>
        </div>
      </div>
      <main>
        <div className="table">
          <DataGrid rows={rules} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
        </div>
      </main>
      <ModalWindow active={modal} setActive={setModal}>
        <PriceRuleForm />
      </ModalWindow>
    </div>
  ) : (
    <Navigate to="/login" />
  );
}
