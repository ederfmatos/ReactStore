import React, { Component } from 'react';

// import { Container } from './styles';

export default class SearchContainer extends Component {
  render() {
    return (
      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">+</div>
          <form className="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
            />
          </form>
        </div>
      </div>
    );
  }
}
