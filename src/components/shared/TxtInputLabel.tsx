import React, { Component } from 'react';

const classes = require('./TxtInputLabel.css');

interface IProps {
  label: string;
  value: string;
  placeholder: string;
  onTxtChanged: any;
  type?: string;
  style?: object;
}

class TxtInputLabel extends Component<IProps, any> {
  public render() {
    return (
      <div
        className={classes.wrapper}
        style={this.props.style}
      >
        <p className={classes.label}>{ this.props.label }</p>
        <input
          className={classes.input}
          value={this.props.value}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.props.onTxtChanged}
        />
      </div>
    );
  }
}

export default TxtInputLabel;
