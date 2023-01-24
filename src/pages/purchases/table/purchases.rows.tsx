import React from 'react';
import { PurchaseInterface } from '../interfaces/purchase.interface';

export function PurchasesRows(props: PurchaseInterface[]) {
  return props.map((purchase, index) => {
    return (
      <tr data-id={index} key={index}>
        <td>{purchase.organization}</td>
        <td>{purchase.supplier}</td>
        <td>{purchase.stock}</td>
        <td>{purchase.sum}</td>
        <td>{purchase.addinvest}</td>
        <td>{purchase.date}</td>
      </tr>
    );
  });
}
