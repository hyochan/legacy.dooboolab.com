import React, { Component } from 'react';

import classNames from 'classnames/bind';
const classes = require('./RoundBtn.css');
const cx = classNames.bind(classes);

interface IProps {
  txt: string;
  style?: any;
}

class RoundBtn extends Component<IProps, any> {
  public static defaultProps: Partial<IProps> = {
    txt: 'default',
  };

  public render() {
    const wrapperClass = cx({
      roundBtn: true,
    });
    return (
      <div
        className={wrapperClass}
        style={this.props.style}
      >
        <p>{this.props.txt}</p>
      </div>
    );
  }
}

export default RoundBtn;
