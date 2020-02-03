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
    const { label, Icon } = this.props;

    return (
      <div className={this.getClassNames()}>
        <div className="description">
          {Icon && <Icon />}

          {label && <label>{label}</label>}
        </div>

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
