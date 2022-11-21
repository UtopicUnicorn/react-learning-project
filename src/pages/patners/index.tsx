/* eslint-disable */
import React, { useEffect, useState } from 'react';
import PartnersService from './services/partners.service';
import { PartnersInterface } from './interfaces/partners.interface';
import ModalWindow from '../../components/modal-windows/modal-window';
import PartnersForm from './forms/partners.form';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import './partners.styles.css';
import { Link } from 'react-router-dom';

export default function Partners() {
  const [modal, setModal] = useState(false);
  const [partners, setPartners] = useState<PartnersInterface[]>([]);

  useEffect(() => getFunction, []);

  const getFunction = () => {
    PartnersService.get().then((obj) => setPartners(obj.data));
  };

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Имя', width: 130 },
    { field: 'surname', headerName: 'Фамилия', width: 130 },
    { field: 'parentname', headerName: 'Отчество', width: 130 },
    { field: 'type', headerName: 'Тип контрагента', width: 130 },
    { field: 'company', headerName: 'Компания', width: 130 },
    { field: 'phone', headerName: 'Номер телефона', width: 150 },
    { field: 'mail', headerName: 'Почта', width: 130 },
    { field: 'organization', headerName: 'Организация', width: 130 },
    { field: 'address', headerName: 'Адрес', width: 130 },
    { field: 'inn', headerName: 'ИНН', width: 130 },
    { field: 'bank', headerName: 'Банк', width: 130 },
    { field: 'paynumber', headerName: 'Номер счета', width: 130 },
    { field: 'bik', headerName: 'БИК', width: 130 },
    { field: 'kpp', headerName: 'КПП', width: 130 }
  ];

  return (
    <div>
      <h1>Контрагенты</h1>
      <main>
        <div className="title">
          <Link to={'/add-partner'}>
            <button className="button-add" onClick={() => setModal(true)}>
              <img
                src={process.env.PUBLIC_URL + 'btn-plus.svg'}
                className="btn_plus"
                alt={'logo'}
              />
              Добавить
            </button>
          </Link>
        </div>
        <div className="table-block">
          <DataGrid rows={partners} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
        </div>
      </main>
    </div>
  );
}
