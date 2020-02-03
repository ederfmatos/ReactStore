import React, { Component } from 'react';

export default class Input extends Component {
  getClassNames() {
    const classNames = ['input'];

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

        <input type="text" onChange={this.handleInputChange} />
      </div>
    );
  }
}
