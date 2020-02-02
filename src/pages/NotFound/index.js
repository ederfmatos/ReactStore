import React, { Component } from 'react';

import './styles.scss';

export default class NotFound extends Component {
  render() {
    return (
      <div className="u-fullPage u-fullCentered not-found">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzLFIIHpghUY0_onRyKLEVOmuKRIBtZVqMBv7WoKVGeHqe7I80"
          alt=""
        />
        <span>Página não encontrada</span>
      </div>
    );
  }
}
