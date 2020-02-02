import React, { Component } from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class Carousel extends Component {
  render() {
    const { items } = this.props;

    return (
      <ReactCarousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        stopOnHover={false}
      >
        {items.map((item, index) => (
          <div key={`carousel-item-${index}`}>
            <img src={item.img} alt={item.description} />
            <div className="content">
              <p className="title">{item.title}</p>
              <p className="description">{item.description}</p>
              <button className="action">See more</button>
            </div>
          </div>
        ))}
      </ReactCarousel>
    );
  }
}
