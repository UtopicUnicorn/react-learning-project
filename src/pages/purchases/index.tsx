import React, { useEffect, useState } from 'react';
import './purchases.style.css';

import { PurchaseInterface } from './interfaces/purchase.interface';
import PurchasesService from './services/purchases.service';
import { CustomTable } from '../../components/tables/custom-table';
import { purchasesHeaders } from './table/purchases.headers';
import { PurchasesRows } from './table/purchases.rows';
import { Link } from 'react-router-dom';

export default function Purchases() {
  const [purchases, setPurchases] = useState<PurchaseInterface[]>([]);

  useEffect(() => getPurchases(), []);

  const getPurchases = () => {
    PurchasesService.getPurchases().then((purchases) => setPurchases(purchases.data));
  };

  return (
    <div className="purchases_container">
      <div className="purchases_title">
        <h1>Закупка товара</h1>
        <Link to={'/add-purchase'}>
          <button className="button-add">
            <img src={process.env.PUBLIC_URL + 'btn-plus.svg'} className="btn_plus" alt={'logo'} />
            Добавить
          </button>
        </Link>
      </div>
      <div className="purchases_content">
        <p>Container</p>
        <div className="purchases_table">
          <CustomTable header={purchasesHeaders} template={PurchasesRows(purchases)} />
        </div>
      </div>
    </div>
  );
}
