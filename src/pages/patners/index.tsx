import React, { useEffect, useState } from 'react';
import PartnersService from './services/partners.service';
import { PartnersInterface } from './interfaces/partners.interface';
import ModalWindow from '../../components/modal-windows/modal-window';
import PartnersForm from './forms/partners.form';

export default function Partners() {
  const [modal, setModal] = useState(false);
  const [partners, setPartners] = useState<PartnersInterface[]>([]);

  useEffect(() => getFunction, []);

  const getFunction = () => {
    PartnersService.get().then((obj) => setPartners(obj.data));
  };

  const headers: { label: string }[] = [
    { label: 'ID' },
    { label: 'Имя' },
    { label: 'Фамилия' },
    { label: 'Отчество' },
    { label: 'Компания' },
    { label: 'Телефон' },
    { label: 'Организация' },
    { label: 'адрес' },
    { label: 'ИНН' },
    { label: 'банк' },
    { label: 'реквизиты' },
    { label: 'БИК' },
    { label: 'КПП' }
  ];

  return (
    <div className="container">
      <main>
        <h1>Контрагенты</h1>
        <button className="button-add" onClick={() => setModal(true)}>
          <img src={process.env.PUBLIC_URL + 'btn-plus.svg'} className="btn_plus" alt={'logo'} />
          <a>Добавить</a>
        </button>
        <table>
          <thead>
            <tr>
              {headers.map((row, index) => {
                return <td key={index}>{row.label}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {partners.map((partner) => {
              return (
                <tr key={partner.id}>
                  <td>{partner.name}</td>
                  <td>{partner.surname}</td>
                  <td>{partner.parentname}</td>
                  <td>{partner.phone}</td>
                  <td>{partner.mail}</td>
                  <td>{partner.type}</td>
                  <td>{partner.organization}</td>
                  <td>{partner.address}</td>
                  <td>{partner.inn}</td>
                  <td>{partner.bank}</td>
                  <td>{partner.paynumber}</td>
                  <td>{partner.bik}</td>
                  <td>{partner.kpp}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
      <ModalWindow active={modal} setActive={setModal}>
        <PartnersForm />
      </ModalWindow>
    </div>
  );
}
