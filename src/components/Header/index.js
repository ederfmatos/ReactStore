import React, { Component } from 'react';
import { FaShoppingBasket, FaSearch, FaUserAlt } from 'react-icons/fa';

import { menuItems } from './menu';

import logo from '../../img/logo.png';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <nav className="menu">
          <ul>
            {menuItems.map(item => (
              <li
                key={item.key}
                className={`menu-item ${
                  item.active ? 'menu-item--active' : ''
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>

        <div className="user-access">
          <a href="">Cadastrar</a>
          <a href="" className="in">
            Entrar
          </a>
        </div>

        <div className="header-right">
          <FaSearch />
          <FaUserAlt />

          <a href="#">
            <span>2</span>
            <FaShoppingBasket />
          </a>
        </div>
      </header>
    );
  }
}
