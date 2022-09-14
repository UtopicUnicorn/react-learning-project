import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';

export const NavData = [
  {
    title: 'Главная',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Ценовые правила',
    path: '/price-rules',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Контрагенты',
    path: '/partners',
    icon: <FaIcons.FaPeopleCarry />,
    cName: 'nav-text'
  },
  {
    title: 'Сделки с клиентами',
    path: '/deals',
    icon: <FiIcons.FiArchive />,
    cName: 'nav-text'
  }
];
