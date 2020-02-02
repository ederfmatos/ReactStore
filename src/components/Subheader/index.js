import React, { Component } from 'react';
import { subitems } from './subheader-items';

export default class Subheader extends Component {
  render() {
    return (
      <div className="subheader">
        {subitems.map((subitem, index) => (
          <div key={`subheader-item-${index}`} className="subheader-item">
            <img src={subitem.img} alt="" />
            <p>{subitem.description}</p>
          </div>
        ))}
      </div>
    );
  }
}
