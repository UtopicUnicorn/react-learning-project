import React, { useState } from 'react';

export default function SelectItem() {
  const [item, setItem] = useState('tires');

  return (
    <div>
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
    </div>
  );
}
