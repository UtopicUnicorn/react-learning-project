import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavData } from './nav-data';
import { Link, useNavigate } from 'react-router-dom';
import './sidebar.styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducer';
import * as FiIcons from 'react-icons/fi';

function Sidebar() {
  const [navbar, setNavbar] = useState(false);
  const isAuth = !!useSelector((state: RootState) => state.auth).token;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    console.log('quit');
    dispatch({ type: 'SAVE_TOKEN', payload: { token: null } });
    navigate('/login');
  };

  const showSidebar = () => setNavbar(!navbar);
  return isAuth ? (
    <div className="side_bar">
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars className="icon" onClick={showSidebar} />
        </Link>
      </div>
      <nav className={navbar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {NavData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          <li className="nav-text" onClick={() => logOut()}>
            <a>
              <FiIcons.FiBell className="icon" />
              <span>Выйти</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  ) : (
    <div></div>
  );
}

export default Sidebar;
