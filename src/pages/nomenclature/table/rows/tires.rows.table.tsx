import React from 'react';
import { NomenclatureInterface } from '../../interfaces/nomenclature.interface';

export function TiresRows(tires: NomenclatureInterface[]) {
  return tires.map((tire, index) => {
    return (
      <tr data-id={index} key={index}>
        <td>{tire.brand}</td>
        <td>{tire.model}</td>
        <td>{tire.width}</td>
        <td>{tire.profile}</td>
        <td>{tire.diameter}</td>
        <td>{tire.index}</td>
        <td>{tire.year}</td>
      </tr>
    );
  });
}
