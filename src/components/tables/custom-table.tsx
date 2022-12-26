import React from 'react';
import { baseURL, itemsURL } from '../../tmpURLs';

export function CustomTable(props: any) {
  console.log(props);
  const headers = props.header;

  const tableHeader = () => {
    return headers.map((header: string, index: number) => {
      return <td key={index}>{header}</td>;
    });
  };

  return (
    <div>
      <table className="item_work_table">
        <thead>
          <tr>{tableHeader()}</tr>
        </thead>
        <tbody>{props.template}</tbody>
      </table>
    </div>
  );
}
