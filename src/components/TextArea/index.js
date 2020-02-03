import React, { Component } from 'react';

export default class TextArea extends Component {
  getClassNames() {
    const classNames = ['textarea'];

    return classNames.join(' ');
  }

  handleInputChange = e => {
    const { onChange } = this.props;
    if (onChange) {
      onChange({ value: e.target.value });
    }
  };

  render() {
    const { label } = this.props;

    return (
      <div className={this.getClassNames()}>
        {label && <label>{label}</label>}

        <textarea
          cols="30"
          rows="10"
          type="text"
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
