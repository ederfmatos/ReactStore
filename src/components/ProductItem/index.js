import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

import './styles.scss';

export default class ProductItem extends Component {
  render() {
    const { product } = this.props;

    return (
      <Link to={`/produto/${encodeURIComponent(product.id)}`}>
        <li>
          <img src={product.img} alt="" />
          <span className={`category category--${product.type}`}>
            {product.category}
          </span>
          <p className="name">{product.name}</p>
          <span className="price">${product.price}</span>

          <div className="hoverable">
            <FaEye />
          </div>
        </li>
      </Link>
    );
  }
}
