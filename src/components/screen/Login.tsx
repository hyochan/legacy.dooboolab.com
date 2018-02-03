import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import RountBtn from '@shared/RoundBtn';
import TxtInputLabel from '@shared/TxtInputLabel';
import RoundBtn from '@shared/RoundBtn';
// import classNames from 'classnames/bind';
const classes = require('./Login.css');
// const cx = classNames.bind(classes);

@inject('store')
@observer
class Login extends Component<any, any> {
  constructor(props) {
    super(props);
    console.log(this.props.history);
    const location: object = {
      pathname: '/login',
      state: {},
    };

    this.state = {
      email: '',
      pw: '',
    };
  }

  public render() {
    const { getString } = this.props.store.locale;
    // const containerClass = cx({
    //   container: true,
    //   background: true,
    // });
    return(
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <p className={classes.txtHead}>Login with: {this.state.email}</p>
          <TxtInputLabel
            style={{ marginTop: 18 }}
            label='EMAIL'
            value={this.state.email}
            placeholder='이메일을 입력해주세요'
            onTxtChanged={(e) => this.onTxtChanged('email', e.target.value)}
          />
          <TxtInputLabel
            style={{ marginTop: 18 }}
            label='PASSWORD'
            type='password'
            value={this.state.pw}
            placeholder='암호를 입력해주세요'
            onTxtChanged={(e) => this.onTxtChanged('pw', e.target.value)}
          />
          <div className={classes.btnWrapper}>
            <RoundBtn
              style={
                this.props.store.isDesktop
                  ? styles.btnLoginDesktop
                  : styles.btnLogin
              }
              txt='로그인'
            />
            <RoundBtn
              style={
                this.props.store.isDesktop
                  ? styles.btnSignupDesktop
                  : styles.btnSignup
              }
              txt='회원가입'
            />
          </div>
        </div>
      </div>
    );
  }

  private onTxtChanged = (type, txt) => {
    switch (type) {
      case 'email':
        this.setState({ email: txt });
        break;
      case 'pw':
        this.setState({ pw: txt });
        break;
    }
  }
}

const styles = {
  btnLogin: {
    marginRight: 0,
  },
  btnLoginDesktop: {
    marginTop: 0,
    marginRight: 6.5,
  },
  btnSignup: {
    marginLeft: 0,
    marginTop: 16,
  },
  btnSignupDesktop: {
    marginTop: 0,
    marginLeft: 6.5,
  },
};

export default Login;
