import React, { useState } from 'react';
import * as BaIcons from 'react-icons/bs';
import * as GiIcons from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { changeTire, nomenclatureInitialState } from '../reducers/nomenclature.reducer';
import NomenclatureService from '../services/nomenclature.service';
import { NomenclatureInterface } from '../interfaces/nomenclature.interface';
import { RootState } from '../../../reducer';

export default function CreateNomenclature() {
  let [condition, setCondition] = useState('new');
  let [season, setSeason] = useState('winter');
  let [item, setItem] = useState('tires');

  const column: GridColDef[] = [
    { field: 'brand', headerName: 'Брэнд', width: 120 },
    { field: 'model', headerName: 'Модель', width: 220 },
    { field: 'width', headerName: 'Ширина', width: 120 },
    { field: 'profile', headerName: 'Профиль', width: 120 },
    { field: 'diameter', headerName: 'Диаметер', width: 120 },
    { field: 'index', headerName: 'Индекс', width: 120 }
  ];

  const dispatch = useDispatch();
  const [form, setForm] = useState(nomenclatureInitialState);
  let [arr, setArr] = useState<NomenclatureInterface[]>([]);
  const navigate = useNavigate();
  const check = useSelector((state: RootState) => state.nomenclature);

  const sendNomenclature = () => {
    NomenclatureService.createNomenclature(form).then(() =>
      setArr((oldArray) => [...oldArray, check])
    );
  };

  const sendNomenclatureAndQuit = () => {
    NomenclatureService.createNomenclature(form).then(() => navigate('/nomenclature'));
  };

  const handleInputChange = (ev: any) => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value
    });

    dispatch(changeTire({ [ev.target.name]: ev.target.value }));
  };

  const handleSeasonToggle = (s: string) => {
    setSeason(s);
    dispatch(changeTire({ season: s }));
  };

  const handleConditionToggle = (c: string) => {
    setCondition(condition);
    dispatch(changeTire({ status: c }));
  };

  return (
    <div>
      <div className="nomenclature_title">
        <h1>Создание номенклатуры</h1>
        <div>
          <button type="button" className="complete_butt" onClick={sendNomenclature}>
            Записать
          </button>
          <button className="complete_butt" onClick={sendNomenclatureAndQuit}>
            Записать и закрыть
          </button>
        </div>
      </div>
      <main className="nomenclature_container">
        {/*вынести в отдельный файл*/}
        <div className="item_select">
          <div className="item_butt">
            <input
              type="radio"
              name="item"
              defaultChecked={item == 'offer'}
              onChange={() => setItem('offer')}
            />
            <label>Услуги</label>
          </div>
          <div className="item_butt">
            <input
              type="radio"
              name="item"
              defaultChecked={item == 'tires'}
              onChange={() => setItem('tires')}
            />
            <label>Шины</label>
          </div>
          <div className="item_butt">
            <input
              type="radio"
              name="item"
              defaultChecked={item == 'caps'}
              onChange={() => setItem('caps')}
            />
            <label>Колпаки</label>
          </div>
          <div className="item_butt">
            <input
              type="radio"
              name="item"
              defaultChecked={item == 'disks'}
              onChange={() => setItem('disks')}
            />
            <label>Диски</label>
          </div>
          <div className="item_butt">
            <input
              type="radio"
              name="item"
              defaultChecked={item == 'tire-chamber'}
              onChange={() => setItem('tire-chamber')}
            />
            <label>Камеры</label>
          </div>
          <div className="item_butt">
            <input
              type="radio"
              name="item"
              defaultChecked={item == 'sensors'}
              onChange={() => setItem('sensors')}
            />
            <label>Датчики</label>
          </div>
          <div className="item_butt">
            <input type="radio" name="item" onChange={() => setItem('fasteners')} />
            <label>Крепеж</label>
          </div>
        </div>
        <div className="search_block">
          <div className="status_butt">
            <input
              type="radio"
              name="radio"
              value="new"
              className="select_butt"
              defaultChecked={condition == 'new'}
              onChange={() => handleConditionToggle('new')}
            />
            <label className="nomenclature_label">New</label>
          </div>
          <div className="status_butt">
            <input
              type="radio"
              name="radio"
              value="old"
              className="select_butt"
              defaultChecked={condition == 'old'}
              onChange={() => handleConditionToggle('old')}
            />
            <label className="nomenclature_label">Б/У</label>
          </div>
          <div>
            <div className="season_search">
              <div className="season_butt">
                <input
                  type="radio"
                  name="season"
                  value="summer"
                  defaultChecked={season == 'summer'}
                  onChange={() => handleSeasonToggle('summer')}
                />
                <label>
                  <BaIcons.BsSun />
                </label>
              </div>
              <div className="season_butt">
                <input
                  type="radio"
                  name="season"
                  value="winter"
                  defaultChecked={season == 'winter'}
                  onChange={() => handleSeasonToggle('winter')}
                />
                <label>
                  <BaIcons.BsSnow />
                </label>
              </div>
              <div className="season_butt">
                <input
                  type="radio"
                  name="season"
                  value="nailed"
                  defaultChecked={season == 'nailed'}
                  onChange={() => handleSeasonToggle('nailed')}
                />
                <label>
                  <GiIcons.GiCarWheel />
                </label>
              </div>
              <div className="season_butt">
                <input
                  type="radio"
                  name="season"
                  value="norwegian"
                  defaultChecked={season == 'norwegian'}
                  onChange={() => handleSeasonToggle('norwegian')}
                />
                <label>
                  <GiIcons.GiCartwheel />
                </label>
              </div>
            </div>
          </div>
        </div>
        {/*/вынести в другой файл */}
        <div className="nomenclature_form">
          <form>
            <div className="nomenclature_input_block">
              <label className="nomenclature_label">
                Ширина
                <input
                  name="width"
                  className="nomenclature_input"
                  type="text"
                  value={form.width}
                  onChange={handleInputChange}
                />
              </label>

              <label className="nomenclature_label">
                Профиль
                <input
                  name="profile"
                  className="nomenclature_input"
                  type="text"
                  value={form.profile}
                  onChange={handleInputChange}
                />
              </label>
              <label className="nomenclature_label">
                Диаметр
                <input
                  name="diameter"
                  className="nomenclature_input"
                  type="text"
                  value={form.diameter}
                  onChange={handleInputChange}
                />
              </label>
              <label className="nomenclature_label">
                Индекс
                <input
                  name="index"
                  className="nomenclature_input"
                  type="text"
                  value={form.index}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            {/*change to select*/}
            <div className="nomenclature_input_block">
              <label className="nomenclature_label">
                Бренд
                <input
                  name="brand"
                  className="nomenclature_item_input"
                  type="text"
                  value={form.brand}
                  onChange={handleInputChange}
                />
              </label>

              <label className="nomenclature_label">
                Модель
                <input
                  name="model"
                  className="nomenclature_item_input"
                  type="text"
                  value={form.model}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="nomenclature_input_block">
              <label className="nomenclature_label">
                Год
                <input
                  name="year"
                  className="nomenclature_item_input"
                  type="text"
                  value={form.year}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="nomenclature_input_block">
              <label className="nomenclature_label">
                Описание
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleInputChange}
                  className="nomenclature_textarea"
                />
              </label>
            </div>

            <button type="button" className="complete_butt" onClick={() => sendNomenclature()}>
              Добавить
            </button>
          </form>
        </div>

        <div className="nomenclature_table">
          <DataGrid
            rows={arr}
            columns={column}
            pageSize={5}
            rowsPerPageOptions={[5]}
            getRowId={() => Math.random()}
          />
        </div>
      </main>
    </div>
  );
}
