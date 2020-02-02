import React, { Component } from 'react';

import { Carousel, ProductItem } from '../../components';

import { bestProducts } from './bestProducts';

import './styles.scss';

import img1 from '../../img/slider-1.jpg';
import img2 from '../../img/slider-2.jpg';
import img3 from '../../img/slider-3.jpg';

import delivery from '../../img/icons/f-delivery.png';

const items = [
  {
    img: img1,
    title: 'title',
    description: 'description',
  },
  {
    img: img2,
    title: 'title',
    description: 'description',
  },
  {
    img: img3,
    title: 'title',
    description: 'description',
  },
];

export default class Home extends Component {
  render() {
    return (
      <>
        <Carousel items={items} />
        <section className="center-screen">
          <section className="single-features">
            <div className="single-features-item">
              <img src={delivery} alt="" />
              <h4>Free shipping</h4>
              <p>
                Fusce urna quam, euismod sit amet mollis quis, vestibulum quis
                velit. Vesti bulum mal esuada aliquet libero viverra cursus.{' '}
              </p>
            </div>
            <div className="single-features-item">
              <img src={delivery} alt="" />
              <h4>Free shipping</h4>
              <p>
                Fusce urna quam, euismod sit amet mollis quis, vestibulum quis
                velit. Vesti bulum mal esuada aliquet libero viverra cursus.{' '}
              </p>
            </div>
            <div className="single-features-item">
              <img src={delivery} alt="" />
              <h4>Free shipping</h4>
              <p>
                Fusce urna quam, euismod sit amet mollis quis, vestibulum quis
                velit. Vesti bulum mal esuada aliquet libero viverra cursus.{' '}
              </p>
            </div>
          </section>

          <section className="best-products">
            <h2 className="title">Produtos mais vistos</h2>

            <ul className="content">
              {bestProducts.map((item, index) => (
                <ProductItem product={item} />
              ))}
            </ul>
          </section>
        </section>
      </>
    );
  }
}
