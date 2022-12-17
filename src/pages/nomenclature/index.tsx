import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as BaIcons from 'react-icons/bs';
import * as GiIcons from 'react-icons/gi';
import { Link, Navigate } from 'react-router-dom';
import './nomenclature.style.css';
import NomenclatureService from './services/nomenclature.service';
import { NomenclatureInterface } from './interfaces/nomenclature.interface';
import { useAuth } from '../../components/hooks/auth-hook';

export default function Nomenclature() {
  const [nomenclature, setNomenclature] = useState<NomenclatureInterface[]>([]);
  const [condition, setCondition] = useState('new');
  const [season, setSeason] = useState('winter');
  const [item, setItem] = useState('tires');
  const { isAuth } = useAuth();

  const columns: GridColDef[] = [
    { field: 'brand', headerName: 'Брэнд', width: 120 },
    { field: 'model', headerName: 'Модель', width: 220 },
    { field: 'width', headerName: 'Ширина', width: 120 },
    { field: 'profile', headerName: 'Профиль', width: 120 },
    { field: 'diameter', headerName: 'Диаметер', width: 120 },
    { field: 'index', headerName: 'Индекс', width: 120 },
    { field: 'year', headerName: 'Год', width: 100 }
  ];

  useEffect(() => getNomenclature(), []);

  const getNomenclature = () => {
    NomenclatureService.getNomenclature().then((obj) => setNomenclature(obj.data));
  };

  return isAuth ? (
    <div>
      <div className="nomenclature_title">
        <h1>Каталог Номенклатуры</h1>
        <Link to={'/add-nomenclature'}>
          <button className="button-add">
            <img src={process.env.PUBLIC_URL + 'btn-plus.svg'} className="btn_plus" alt={'logo'} />
            Добавить
          </button>
        </Link>
      </div>
      <main className="nomenclature_container">
        <div className="item_select">
          <div className="item_butt">
            <input type="radio" name="item" defaultChecked={item == 'offer'} />
            <label>Услуги</label>
          </div>
          <div className="item_butt">
            <input type="radio" name="item" defaultChecked={item == 'tires'} />
            <label>Шины</label>
          </div>
          <div className="item_butt">
            <input type="radio" name="item" defaultChecked={item == 'caps'} />
            <label>Колпаки</label>
          </div>
          <div className="item_butt">
            <input type="radio" name="item" defaultChecked={item == 'disks'} />
            <label>Диски</label>
          </div>
          <div className="item_butt">
            <input type="radio" name="item" defaultChecked={item == 'tire-chamber'} />
            <label>Камеры</label>
          </div>
          <div className="item_butt">
            <input type="radio" name="item" defaultChecked={item == 'sensors'} />
            <label>Датчики</label>
          </div>
          <div className="item_butt">
            <input type="radio" name="item" />
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
                  onChange={(e) => setSeason('summer')}
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
                  onChange={(e) => setSeason('winter')}
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
                  onChange={(e) => setSeason('nailed')}
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
                  onChange={(e) => setSeason('norwegian')}
                />
                <label>
                  <GiIcons.GiCartwheel />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="nomenclature_table">
          <DataGrid rows={nomenclature} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
        </div>
      </main>
    </div>
  ) : (
    <Navigate to="/login" />
  );
}
