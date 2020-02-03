import React, { Component } from 'react';
import { Spinner } from '../';

export default class Button extends Component {
  state = {
    loading: false,
    type: 'default',
    enable: true,
  };

  getTypes() {
    return {
      default: 'button--default',
      info: 'button--info',
      success: 'button--success',
      error: 'button--error',
    };
  }

  handleClick = () => {
    const { onClick } = this.props;
    const { enable } = this.state;

    if (enable && onClick) {
      onClick({ component: this });
    }
  };

  showLoadingIndicator() {
    this.setState({ loading: true });
    return this;
  }

  hideLoadingIndicator() {
    this.setState({ loading: false });
    return this;
  }

  enable() {
    this.setState({ enable: true });
    return this;
  }

  disable() {
    this.setState({ enable: false });
    return this;
  }

  resetState() {
    this.setState({ loading: false, enable: true });
    return this;
  }

  componentDidMount() {
    const { type, loading, enable = true } = this.props;
    const types = this.getTypes();

    this.setState({ type: types[type] || types['default'], loading, enable });
  }

  getContainer(childs) {
    const { type, loading } = this.state;
    const enable = this.state.enable || this.props.enable;

    const classNames = ['button'];
    classNames.push(type);

    if (loading) {
      classNames.push('button--loading');
    }

    if (!enable) {
      classNames.push('button--disabled');
    }

    return (
      <div className={classNames.join(' ')} onClick={this.handleClick}>
        {childs}
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    const { label, loadingLabel = 'Carregando' } = this.props;

    if (loading) {
      return this.getContainer(
        <>
          <span>{loadingLabel}</span>
          <Spinner />
        </>
      );
    }

    return this.getContainer(<span>{label}</span>);
  }
}
