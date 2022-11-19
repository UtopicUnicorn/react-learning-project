import React from 'react';

import '../partners.styles.css';
import PhysForm from './physForm';
import IPForm from './ipForm';
import { useSelector } from 'react-redux';
import LawForm from './lawForm';

export function FormToggle(type: string) {
  switch (type) {
    case 'phys': {
      return <PhysForm />;
    }

    case 'ip': {
      return <IPForm />;
    }

    case 'law': {
      return <LawForm />;
    }
    default: {
      return <PhysForm />;
    }
  }
}

function PartnersForm() {
  const [type, setType] = React.useState<string>('phys');

  const sendForm = () => {
    const tstFormName = useSelector((state) => console.log(state));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className="title_add">Добавить нового контрагента</h1>
      <form className="add_partner_form">
        <div className="flex-center">
          <input
            style={{ marginLeft: 10, marginRight: 10 }}
            type="radio"
            name="radio"
            value="phys"
            checked={type == 'phys'}
            onChange={(e) => setType(e.target.value)}
          />
          Физическое лицо
          <input
            style={{ marginLeft: 10, marginRight: 10 }}
            type="radio"
            name="radio"
            value="ip"
            checked={type == 'ip'}
            onChange={(e) => setType(e.target.value)}
          />
          ИП
          <input
            style={{ marginLeft: 10, marginRight: 10 }}
            type="radio"
            name="radio"
            value="law"
            checked={type == 'law'}
            onChange={(e) => setType(e.target.value)}
          />
          Юр. лицо
        </div>
      </form>
      {FormToggle(type)}
      {/*<PhysTest />*/}
      {/*<PhysForm />*/}
      <div className="btn_view">
        <button className="btn" onClick={sendForm}>
          Отправить
        </button>
      </div>
    </div>
  );
}

export default PartnersForm;
