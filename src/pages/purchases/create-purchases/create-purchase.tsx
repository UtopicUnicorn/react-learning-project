import React, { useEffect, useState } from 'react';
import '../purchases.style.css';
import { purchaseInitialState } from '../reducers/purchases.reducer';
import { useDispatch } from 'react-redux';
import PurchasesService from '../services/purchases.service';
import { marginPriceCalculator } from './logic/price-calculators';
import NomenclatureService from '../../nomenclature/services/nomenclature.service';
import { NomenclatureInterface } from '../../nomenclature/interfaces/nomenclature.interface';
import PartnersService from '../../patners/services/partners.service';
import { PartnersInterface } from '../../patners/interfaces/partners.interface';
import { documentSelectItem } from '../../../components/reused-components/document-select-item';

export default function CreatePurchase() {
  const [form, setForm] = useState(purchaseInitialState);
  const [items, setItems] = useState<NomenclatureInterface[]>([]);
  const [partners, setPartners] = useState<PartnersInterface[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const handleInputChange = (ev: any) => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value
    });

    if (ev.target.name === 'sum') {
      setForm({
        ...form,
        [ev.target.name]: ev.target.value,
        addinvest: marginPriceCalculator(partners, form.partner, ev.target.value)
      });
      dispatch({
        type: 'NEW_PURCHASE',
        payload: { addinvest: marginPriceCalculator(partners, form.partner, ev.target.value) }
      });
    }
    dispatch({ type: 'NEW_PURCHASE', payload: { [ev.target.name]: ev.target.value } });
  };

  const getItems = () => {
    NomenclatureService.getNomenclature().then((data) => setItems(data.data));
  };

  const getData = () => {
    getPartners();
    getItems();
  };
  const getPartners = () => {
    PartnersService.get().then((data) => setPartners(data.data));
  };

  const sendPurchase = () => {
    PurchasesService.addPurchase(form).then((res) => console.log(res));
  };

  //mb should move to another directory
  const optionsItem = items.map((text) => {
    return (
      <option key={text.id} value={text.id}>
        {text.model} {text.brand}
      </option>
    );
  });

  const optionsPartner = partners.map((text) => {
    return (
      <option key={text.id} value={text.id}>
        {text.name} {text.surname} {text.parentname}
      </option>
    );
  });

  const optionsDocs = documentSelectItem.map((text, number) => {
    return (
      <option key={number} value={text}>
        {text}
      </option>
    );
  });

  return (
    <div className="purchases_container">
      <div className="purchases_title">
        <h1>Создание закупки</h1>
      </div>
      <div className="purchases_form_block ">
        <form>
          <div className="purchases_contacts">
            <div className="purchases_input_box">
              <label htmlFor={'organization'} className="purchases_form_label">
                {'Организация'}
              </label>
              <input
                className="purchases_form_input"
                name="organization"
                value={form.organization}
                onChange={handleInputChange}
              />
            </div>

            <div className="purchases_input_box">
              <label>{'Поставщик'}</label>
              <input
                className="purchases_form_input"
                name="supplier"
                value={form.supplier}
                onChange={handleInputChange}
              />
            </div>

            <div className="purchases_input_box">
              <label>{'Склад'}</label>
              <input
                className="purchases_form_input"
                name="stock"
                value={form.stock}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="purchases_select_block">
            <div className="purchases_item">
              <label>{'Документ'}</label>
              <select
                className="purchases_form_select"
                name="document"
                value={form.document}
                placeholder="Выберете документ"
                onChange={handleInputChange}>
                {optionsDocs}
              </select>
            </div>

            <div className="purchases_item">
              <label>{'Контрагент'}</label>
              <select
                className="purchases_form_select"
                name="partner"
                value={form.partner}
                placeholder="Выберете контрагента"
                onChange={handleInputChange}>
                {optionsPartner}
              </select>
            </div>

            <div className="purchases_item">
              <label>{'Товар'}</label>
              <select
                className="purchases_form_select"
                name="item"
                value={form.item}
                placeholder="Выберете товар"
                onChange={handleInputChange}>
                {optionsItem}
              </select>
            </div>
          </div>
          <div className="purchases_form_inputs">
            <div className="purchases_input_box">
              <label>{'Цена'}</label>
              <input
                className="purchases_form_input"
                name="sum"
                value={form.sum}
                onChange={handleInputChange}
              />
            </div>
            <div className="purchases_input_box">
              <label>{'Дополнительные вложения'}</label>

              <input
                className="purchases_form_input"
                type={'text'}
                name="addinvest"
                disabled={true}
                value={form.addinvest}
                onChange={handleInputChange}
                readOnly={true}
              />
            </div>
          </div>
          <div className="purchases_send_button_block">
            <button type="button" className="complete_butt" onClick={() => sendPurchase()}>
              Добавить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
