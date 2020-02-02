import React, { Component } from 'react';

import { Carousel } from '../../components';

import img1 from '../../img/slider-1.jpg';
import img2 from '../../img/slider-2.jpg';
import img3 from '../../img/slider-3.jpg';

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
      </>
    );
  }
}
