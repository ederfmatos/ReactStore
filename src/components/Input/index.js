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
    const { label, Icon } = this.props;

    return (
      <div className={this.getClassNames()}>
        <div className="description">
          {Icon && <Icon />}

          {label && <label>{label}</label>}
        </div>

        <input type="text" onChange={this.handleInputChange} />
      </div>
    );
  }
}
