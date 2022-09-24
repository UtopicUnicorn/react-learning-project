import React from 'react';
import partnersService from '../services/partners.service';

import '../partners.styles.css';

function PartnersForm() {
  const [name, setName] = React.useState<string>('');
  const [surname, setSurname] = React.useState<string>('');
  const [parentName, setParentName] = React.useState<string>('');
  const [phone, setPhone] = React.useState<string>('');
  const [mail, setMail] = React.useState<string>('');
  const [type, setType] = React.useState<string>('phys');
  const [organization, setOrganization] = React.useState<string>('');
  const [address, setAddress] = React.useState<string>('');
  const [inn, setINN] = React.useState<string>('');
  const [bank, setBank] = React.useState('');
  const [payNumber, setPayNumber] = React.useState<string>('');
  const [kpp, setKPP] = React.useState<string>('');

  const Check = () => {
    const obj = {
      surname: surname,
      name: name,
      parentname: parentName,
      mail: mail,
      phone: phone,
      type: type,
      pricerule: 'wHJV8Dxfaa'
    };

    partnersService.post(obj);
  };

  const PhysForm = () => {
    return (
      <div>
        <p>Фамилия</p>
        <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />

        <p>Имя</p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <p>Отчество</p>
        <input type="text" value={parentName} onChange={(e) => setParentName(e.target.value)} />

        <p>Телефон</p>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <p>Почта</p>
        <input type="text" value={mail} onChange={(e) => setMail(e.target.value)} />
      </div>
    );
  };

  const IpForm = () => {
    return (
      <div>
        <PhysForm />

        <p>Банк</p>
        <input type="text" value={bank} onChange={(e) => setBank(e.target.value)} />

        <p>Организация</p>
        <input type="text" value={organization} onChange={(e) => setOrganization(e.target.value)} />

        <p>Адрес</p>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

        <p>ИНН</p>
        <input type="text" value={inn} onChange={(e) => setINN(e.target.value)} />

        <p>Номер счета</p>
        <input type="text" value={payNumber} onChange={(e) => setPayNumber(e.target.value)} />
      </div>
    );
  };

  const LawForm = () => {
    return (
      <div>
        <IpForm />
        <p>КПП</p>
        <input type="text" value={kpp} onChange={(e) => setKPP(e.target.value)} />
      </div>
    );
  };

  const SelectForm = () => {
    switch (type) {
      case 'phys': {
        return <PhysForm />;
      }
      case 'ip': {
        return <IpForm />;
      }
      case 'law': {
        return <LawForm />;
      }
      default: {
        return <PhysForm />;
      }
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <form>
        <div className="radio-group">
          <text>Физическое лицо </text>
          <input
            type="radio"
            name="radio"
            value="phys"
            checked={type == 'phys'}
            onChange={(e) => setType(e.target.value)}
          />
          <text>ИП </text>
          <input
            type="radio"
            name="radio"
            value="ip"
            checked={type == 'ip'}
            onChange={(e) => setType(e.target.value)}
          />
          <text>Юр. лицо </text>
          <input
            type="radio"
            name="radio"
            value="law"
            checked={type == 'law'}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        {SelectForm()}
      </form>
      <button type={'submit'} onClick={Check}>
        Отправить текст
      </button>
    </div>
  );
}

export default PartnersForm;
