import React, { Component } from 'react';

export default class Spinner extends Component {
  render() {
    return (
      <div className="spinner lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
