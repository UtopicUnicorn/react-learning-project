import React from 'react';

import '../partners.styles.css';
import PhysForm from './physForm';
import IPForm from './ipForm';
import { useDispatch, useSelector } from 'react-redux';
import LawForm from './lawForm';
import { RootState } from '../../../reducer';
import partnersService from '../services/partners.service';
import { changeForm } from '../reducers/partners.reduser';

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
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.partners);

  const sendForm = () => {
    // console.log(form);
    partnersService.post(form).then(() => console.log('sent'));
  };

  const handleChange = (type: string) => {
    setType(type);
    dispatch(changeForm({ type: type }));
  };

  return (
    <div className="form_container">
      <h1 className="title_add">Добавить нового контрагента</h1>
      <form className="add_partner_form">
        <div className="flex-center">
          <div className="radio_button">
            <input
              type="radio"
              name="radio"
              value="phys"
              className="tmp_butt"
              defaultChecked={type == 'phys'}
              onChange={(e) => handleChange(e.target.value)}
            />
            <label className="radio_label">Физическое лицо</label>
          </div>

          <div className="radio_button">
            <input
              type="radio"
              name="radio"
              value="ip"
              className="tmp_butt"
              defaultChecked={type == 'ip'}
              onChange={(e) => handleChange(e.target.value)}
            />
            <label>ИП</label>
          </div>
          <div className="radio_button">
            <input
              type="radio"
              name="radio"
              value="law"
              className="tmp_butt"
              defaultChecked={type == 'law'}
              onChange={(e) => handleChange(e.target.value)}
            />
            <label>Юр. лицо</label>
          </div>
        </div>
      </form>
      {FormToggle(type)}
      <div className="btn_view">
        <button className="btn" onClick={sendForm}>
          Отправить
        </button>
      </div>
    </div>
  );
}

export default PartnersForm;
