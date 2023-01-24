import React from 'react';
import { WorkItemsInterface } from '../interfaces/work-items.interface';
import { baseURL, itemsURL } from '../../../tmpURLs';

export function WorkItemsRow(items: WorkItemsInterface[]) {
  return items.map((item, index) => {
    if (typeof item.item.item == 'object')
      return (
        <tr data-id={index} key={index}>
          <td>
            <img
              src={baseURL + itemsURL + 'image/' + item.image}
              className="item_work_table_image"
              alt=""
            />
          </td>
          <td>
            {item.item.item.brand} {item.item.item.model}
          </td>
          <td>{item.store}</td>
          <td>{item.amount}</td>
          <td>{item.price}</td>
        </tr>
      );
  });
}
