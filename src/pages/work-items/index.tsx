import React, { useEffect, useState } from 'react';

import SelectItem from '../../components/reused-components/select-item';
import './work-items.style.css';
import WorkItemsService from './services/work-items.service';
import { WorkItemsInterface } from './interfaces/work-items.interface';
import { useDispatch, useSelector } from 'react-redux';
import { changeItemWork, workItemInitialState } from './reducers/work-items.reducer';
import { RootState } from '../../reducer';
import { baseURL, itemsURL } from '../../tmpURLs';
import { CustomTable } from '../../components/tables/custom-table';
import { WorkItemsRow } from './table/rows.table';
import { workItemsHeaders } from './table/headers.table';
import { storeSelector } from './selectors/selector.data';

export default function WorkWithItems() {
  const [items, setItems] = useState<WorkItemsInterface[]>([]);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const dispatch = useDispatch();
  const [form, setForm] = useState(workItemInitialState);
  const sendFormObj = useSelector((state: RootState) => state.workItem);

  useEffect(() => loadData(), []);

  const getWork = () => {
    WorkItemsService.getWorkItems().then((data) => setItems(data.data));
  };

  const sendForm = () => {
    const formData = new FormData();

    // @ts-ignore
    formData.append('file', selectedImage);
    formData.append('store', sendFormObj.store);
    formData.append('item', sendFormObj.item);
    formData.append('price', sendFormObj.price);
    formData.append('amount', sendFormObj.amount);

    WorkItemsService.sendOnPlatform(formData).then(() => console.log('sent'));
  };

  const handleInputChange = (ev: any) => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value
    });
    dispatch(changeItemWork({ [ev.target.name]: ev.target.value }));
  };

  const loadData = () => {
    getWork();
  };

  const options = storeSelector.map((text, index) => {
    return (
      <option key={index} value={text}>
        {text}
      </option>
    );
  });
  return (
    <div className="test_hover">
      <div className="nomenclature_title">
        <h1>Работа с товаром</h1>
      </div>
      <main className="nomenclature_container">
        <SelectItem />
        <div className="items_form_container" style={{ marginRight: 600 }}>
          <form>
            <div className="input_block_select_item">
              <label className="item_label">
                {/*empty should be created Purchases component*/}
                Товар
                <select className="item_input" name="item" />
              </label>
              <label className="item_label">
                Площадка
                <select
                  className="item_input"
                  name="store"
                  value={form.store}
                  onChange={handleInputChange}>
                  {options}
                </select>
              </label>
            </div>
            <div className="input_block_item">
              <label className="item_label">
                Кол-во
                <input
                  type="text"
                  className="item_input"
                  name="amount"
                  value={form.amount}
                  onChange={handleInputChange}
                />
              </label>
              <label className="item_label">
                Цена
                <input
                  type="text"
                  className="item_input"
                  name="price"
                  value={form.price}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <p>Добавьте изображения с товаром</p>
              {selectedImage && (
                <div>
                  <img
                    alt="not fount"
                    height={'400px'}
                    width={'400px'}
                    src={URL.createObjectURL(selectedImage)}
                  />
                  <br />
                  <button
                    className="image_work_button_remove"
                    onClick={() => setSelectedImage(null)}>
                    Remove
                  </button>
                </div>
              )}
              <br />

              <br />
              <input
                type="file"
                name="myImage"
                title=""
                className="image_work_button"
                onChange={(event) => {
                  console.log(event.target.files![0]);
                  setSelectedImage(event.target.files![0]);
                }}
              />
            </div>
            <div>
              <button type="button" className="complete_butt" onClick={sendForm}>
                Сохранить
              </button>
            </div>
          </form>
          <div className="item_work_table_block">
            <CustomTable header={workItemsHeaders} template={WorkItemsRow(items)} />
          </div>
        </div>
      </main>
    </div>
  );
}
