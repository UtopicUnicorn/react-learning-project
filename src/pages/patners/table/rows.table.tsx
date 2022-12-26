import React from 'react';
import { PartnersInterface } from '../interfaces/partners.interface';

export function PartnersRows(partners: PartnersInterface[]) {
  return partners.map((partner, index) => {
    return (
      <tr data-id={index} key={index}>
        <td>
          {partner.surname} {partner.name} {partner.parentname}
        </td>
        <td>{partner.type}</td>
        <td>{partner.organization}</td>
        <td>{partner.phone}</td>
        <td>{partner.mail}</td>
        <td>{partner.address}</td>
        <td>{partner.inn}</td>
        <td>{partner.bank}</td>
        <td>{partner.paynumber}</td>
        <td>{partner.bik}</td>
        <td>{partner.kpp}</td>
      </tr>
    );
  });
}
