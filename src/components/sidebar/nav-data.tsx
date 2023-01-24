import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';

export const NavData = [
  {
    title: 'Главная',
    path: '/home',
    icon: <AiIcons.AiFillHome className="icon" />,
    cName: 'nav-text'
  },
  {
    title: 'Номенклатура',
    path: '/nomenclature',
    icon: <FaIcons.FaWpforms className="icon" />,
    cName: 'nav-text'
  },
  {
    title: 'Закупка товара',
    path: '/purchases',
    icon: <FaIcons.FaWpforms className="icon" />,
    cName: 'nav-text'
  },
  {
    title: 'Работа с товаром',
    path: '/work-items',
    icon: <BsIcons.BsFillArchiveFill className="icon" />,
    cName: 'nav-text'
  },
  {
    title: 'Ценовые правила',
    path: '/price-rules',
    icon: <IoIcons.IoIosPaper className="icon" />,
    cName: 'nav-text'
  },
  {
    title: 'Контрагенты',
    path: '/partners',
    icon: <FaIcons.FaPeopleCarry className="icon" />,
    cName: 'nav-text'
  },
  {
    title: 'Сделки с клиентами',
    path: '/deals',
    icon: <FiIcons.FiArchive className="icon" />,
    cName: 'nav-text'
  }
];
