import React, { Component } from 'react';

export default class Dropdown extends Component {
  handleClickItem = item => {
    const { onItemClick } = this.props;

    if (onItemClick) {
      onItemClick(item);
    }
  };

  render() {
    const { items = [] } = this.props;

    return (
      <div className="dropdown">
        <ul>
          {items.map((item, index) => (
            <li
              key={`dropdown-item-${index}`}
              className="dropdown-item"
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                this.handleClickItem(item);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
