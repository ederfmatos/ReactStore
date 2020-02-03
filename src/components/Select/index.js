import React, { Component } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

export default class Select extends Component {
  state = {
    open: false,
    binding: '',
  };

  componentDidMount() {
    document.addEventListener('click', this.handleOutClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutClick);
  }

  handleOutClick = ({ target }) => {
    if (!target.closest('.select') && target.tagName !== 'path') {
      this.setState({ open: false });
    }
  };

  handleClick = e => {
    e.stopPropagation();
    this.setState({ open: !this.state.open });
  };

  handleUpdate = ({ value, label }) => {
    this.setState({
      binding: value,
      description: label,
      open: false,
    });

    if (this.props.onUpdate) {
      this.props.onUpdate({ value });
    }
  };

  render() {
    const { options = [], label, name } = this.props;
    const { open, description } = this.state;

    const Icon = open ? FaAngleUp : FaAngleDown;

    return (
      <div className="select" data-label={label}>
        <span onClick={this.handleClick}>
          <label>{description || ''}</label>
          <Icon />
        </span>

        {open && (
          <ul name={name}>
            {options.map((item, index) => (
              <li
                key={`select-${name}-option-${index}`}
                value={item.value}
                description={item.label}
                onClick={() => this.handleUpdate(item)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
