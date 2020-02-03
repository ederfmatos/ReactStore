import React, { Component } from 'react';
import { FaShoppingBasket, FaSearch, FaUserAlt } from 'react-icons/fa';

import { menuItems } from './menu';

import { Dropdown } from '../';
import logo from '../../img/logo.png';

export default class Header extends Component {
  handleSubItemClick({ item, parent }) {
    window.location.href = `${parent.location}/${item.value}`;
  }

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
            {menuItems.map((item, index) => (
              <a
                key={`menu-item-${index}`}
                href={item.subitems ? null : item.location}
                className={`menu-item ${item.active ? 'menu-item--active' : ''}
                ${item.subitems ? 'menu-item--hasSubitems' : ''}
                `.trim()}
              >
                <li>{item.label}</li>

                {item.subitems && (
                  <Dropdown
                    items={item.subitems}
                    onItemClick={click =>
                      this.handleSubItemClick({ item: click, parent: item })
                    }
                  />
                )}
              </a>
            ))}
          </ul>
        </nav>

        <div className="user-access">
          <a href="/cadastrar">Cadastrar</a>
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
