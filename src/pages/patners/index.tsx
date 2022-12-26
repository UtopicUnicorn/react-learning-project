import React, { useEffect, useState } from 'react';
import PartnersService from './services/partners.service';
import { PartnersInterface } from './interfaces/partners.interface';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import './partners.styles.css';
import { Link } from 'react-router-dom';
import { CustomTable } from '../../components/tables/custom-table';
import { partnersHeader } from './table/header.table';
import { PartnersRows } from './table/rows.table';

export default function Partners() {
  const [partners, setPartners] = useState<PartnersInterface[]>([]);
  useEffect(() => getFunction(), []);

  const getFunction = () => {
    PartnersService.get().then((obj) => setPartners(obj.data));
  };

  return (
    <div className="partners_container">
      <div className="title_partners">
        <h1>Контрагенты</h1>
        <Link to={'/add-partner'}>
          <button className="button-add">
            <img src={process.env.PUBLIC_URL + 'btn-plus.svg'} className="btn_plus" alt={'logo'} />
            Добавить
          </button>
        </Link>
      </div>
      <main>
        <div className="table-block">
          <CustomTable header={partnersHeader} template={PartnersRows(partners)} />
        </div>
      </main>
    </div>
  );
}
